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
      productId,
      productName = 'HALO Lamp',
      shippingAddress,
    } = body;

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

    // Create checkout session
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      line_items: lineItems,
      mode: 'payment',
      payment_method_types: ['card'],
      // Note: We've already collected shipping address in the checkout form,
      // so we don't need Stripe to collect it again (removed shipping_address_collection)
      metadata: {
        productId: productId || 'halo',
        shippingCost: shippingCost.toString(),
        // Store complete shipping address in metadata for order fulfillment
        ...(shippingAddress && {
          shippingName: shippingAddress.name,
          shippingStreet1: shippingAddress.street1,
          shippingStreet2: shippingAddress.street2 || '',
          shippingCity: shippingAddress.city,
          shippingState: shippingAddress.state,
          shippingZip: shippingAddress.zip,
          shippingCountry: shippingAddress.country,
        }),
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/lamps/halo`,
    };

    const session = await stripe.checkout.sessions.create(sessionParams);

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