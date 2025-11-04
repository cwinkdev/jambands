import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { CreatePaymentIntentRequest } from '../types';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
});

export async function POST(request: NextRequest) {
  try {
    const body: CreatePaymentIntentRequest = await request.json();
    const {
      amount,
      shippingCost = 0,
      currency = 'usd',
      productName = 'HALO Lamp',
      shippingAddress,
    } = body;

    // Debug: Log received shipping address
    console.log('Received shipping address:', JSON.stringify(shippingAddress, null, 2));

    // Validate the amount (should be in cents)
    if (!amount || amount < 50) {
      return NextResponse.json(
        { error: 'Invalid amount. Minimum is $0.50' },
        { status: 400 }
      );
    }

    // Build line items
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        price_data: {
          currency: currency,
          product_data: {
            name: productName,
            description: 'Sleek and satisfying. This custom, full RGB LED lamp brings a vibe into any room.',
          },
          unit_amount: amount, // Amount in cents
        },
        quantity: 1,
      },
    ];

    // Add shipping as a separate line item if provided
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: currency,
          product_data: {
            name: 'Shipping',
            description: 'Shipping and handling',
          },
          unit_amount: shippingCost, // Amount in cents
        },
        quantity: 1,
      });
    }

    // Build metadata for both session and payment intent
    const buildMetadata = (): Record<string, string> => {
      const baseMetadata: Record<string, string> = {};

      // Format shipping address as a single, readable string
      if (shippingAddress) {
        const addressParts = [
          shippingAddress.name || '',
          shippingAddress.street1 || '',
          shippingAddress.street2 || '',
          `${shippingAddress.city || ''}, ${shippingAddress.state || ''} ${shippingAddress.zip || ''}`.trim(),
          shippingAddress.country || ''
        ].filter(part => part.trim() !== ''); // Remove empty parts

        // Format as a proper address with line breaks
        baseMetadata.shippingAddress = addressParts.join('\n');
      }

      return baseMetadata;
    };

    const metadata = buildMetadata();
    // Debug: Log metadata being sent to Stripe
    console.log('Metadata being sent to Stripe:', JSON.stringify(metadata, null, 2));

    // Create checkout session
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      line_items: lineItems,
      mode: 'payment',
      payment_method_types: ['card'],
      // Don't collect shipping address - customer already entered it once
      // We'll store it in metadata which will be visible in dashboard
      metadata: metadata,
      // Attach shipping address to Payment Intent metadata for better visibility in dashboard
      // Payment Intent metadata is more prominently displayed in Stripe Dashboard
      payment_intent_data: {
        metadata: metadata,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/lamps/halo`,
    };

    const session = await stripe.checkout.sessions.create(sessionParams);

    // Debug: Verify metadata was set on the session
    console.log('Session created with ID:', session.id);
    console.log('Session metadata:', JSON.stringify(session.metadata, null, 2));

    // If payment intent was created, log its metadata too
    if (session.payment_intent && typeof session.payment_intent === 'string') {
      const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);
      console.log('Payment Intent ID:', paymentIntent.id);
      console.log('Payment Intent metadata:', JSON.stringify(paymentIntent.metadata, null, 2));
    }

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}