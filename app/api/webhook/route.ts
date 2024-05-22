import Stripe from 'stripe';
import { stripe } from '@/app/shop/helpers/stripe/stripeConfig';
import { NextResponse } from 'next/server';

// Define the expected input for the POST handler
export interface WebhookData {
  type: string;
  data: {
    object: Stripe.Checkout.Session;
  };
}

// Use the correct HTTP method name (POST)
export async function POST(request: Request) {
  const signature = request.headers.get('stripe-signature');

  let event: WebhookData;

  try {
    if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
      throw new Error('Missing signature or webhook secret');
    }
    event = stripe.webhooks.constructEvent(
      await request.text(),
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    ) as WebhookData; // Explicitly cast the event
  } catch (err) {
    console.error("Webhook Error: ", err);
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  const session = event.data.object;

  if (event.type === 'checkout.session.completed') {
    console.log(`Payment for session ${session.id} succeeded.`);
    // ... Add your custom logic for handling successful payments
  }

  // Return a successful response
  return NextResponse.json({ received: true });
}
