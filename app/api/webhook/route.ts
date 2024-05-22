import Stripe from 'stripe';
import { stripe } from '@/app/shop/helpers/stripe/stripeConfig';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POSt(req: Request) {
const body = await req.json();
const sig = headers().get('stripe-signature') as string;

let event: Stripe.Event;
try {
  event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
} catch (err) {
    return new NextResponse("Invalid signature", { status: 400 });
}
const session = event.data.object as Stripe.Checkout.Session;

if (event.type === 'checkout.session.completed') {
  console.log(`Payment for session ${session.id} succeeded.`);
}

}

