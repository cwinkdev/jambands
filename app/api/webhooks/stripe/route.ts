import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      await handleSuccessfulPayment(session);
      break;

    case 'payment_intent.succeeded':
      // Handle if you still have some Payment Intents
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log('Payment succeeded:', paymentIntent.id);
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  console.log('=== NEW ORDER ===');
  console.log('Session ID:', session.id);
  console.log('Customer Email:', session.customer_details?.email);
  console.log('Payment Status:', session.payment_status);

  // Get shipping address - using type assertion since shipping_details might not be in base Session type
  const sessionWithShipping = session as Stripe.Checkout.Session & {
    shipping_details?: {
      name?: string;
      address?: {
        line1?: string;
        line2?: string;
        city?: string;
        state?: string;
        postal_code?: string;
        country?: string;
      };
    };
  };
  if (sessionWithShipping.shipping_details) {
    console.log('Shipping Address:');
    console.log('  Name:', sessionWithShipping.shipping_details.name);
    console.log('  Address Line 1:', sessionWithShipping.shipping_details.address?.line1);
    console.log('  Address Line 2:', sessionWithShipping.shipping_details.address?.line2);
    console.log('  City:', sessionWithShipping.shipping_details.address?.city);
    console.log('  State:', sessionWithShipping.shipping_details.address?.state);
    console.log('  Postal Code:', sessionWithShipping.shipping_details.address?.postal_code);
    console.log('  Country:', sessionWithShipping.shipping_details.address?.country);
  }

  // Get product information from metadata
  console.log('Product ID:', session.metadata?.productId);

  // Get line items for more details
  if (session.line_items) {
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
    console.log('Line Items:');
    lineItems.data.forEach((item, index) => {
      console.log(`  Item ${index + 1}:`);
      console.log(`    Description: ${item.description}`);
      console.log(`    Quantity: ${item.quantity}`);
      console.log(`    Amount: $${(item.amount_total! / 100).toFixed(2)}`);
    });
  }

  console.log('==================');

  // Here you could:
  // 1. Send yourself an email notification
  // 2. Create a shipping label
  // 3. Update inventory
  // 4. Send confirmation to customer
  // 5. Log to a file or external service

  // For now, we'll just log everything to console
  // In production, you might want to save this to a file or send notifications
}
