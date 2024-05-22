"use server";

import type { Stripe } from "stripe";
import { headers } from "next/headers";
import { CURRENCY, formatAmountForStripe } from "./stripeHelpers";
import { stripe } from "./stripeConfig";
import { ProductType } from "../types";


export async function createCheckoutSession(
  data: FormData,
  cartItems: { product: ProductType, quantity: number }[]
): Promise<{ client_secret: string | null; url: string | null }> {
  const ui_mode = data.get("uiMode") as Stripe.Checkout.SessionCreateParams.UiMode;
  const origin: string = headers().get("origin") as string;
  const ProductID = cartItems.map(({ product }) => product.id);
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = cartItems.map(({ product, quantity }) => ({
    quantity,
    price_data: {
      currency: CURRENCY,
      product_data: {
        name: product.name,
        description: product.shortDes || "", // Use empty string if shortDes is null/undefined
        images: [product.image],
      },
      unit_amount: formatAmountForStripe(product?.salePrice || 0, CURRENCY) || formatAmountForStripe(product.price, CURRENCY),
    },
  }));

  const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    metadata: {
      product_id: ProductID.join(","),
    },
    mode: "payment",

    submit_type: "pay",
    consent_collection: { terms_of_service: 'required' },
    shipping_address_collection: {
      allowed_countries: ['US', 'CH', 'CA', 'DE', 'GB', 'FR', 'AU'],
    },
    custom_text: {
      shipping_address: {
        message: 'Bitte geben Sie Ihre Lieferadresse ein. Wir liefern nur in die oben aufgeführten Länder. Danke für Ihr Verständnis.',
      },
      terms_of_service_acceptance: {
        message: `Ich stimme den [AGB's](${origin}/abgs) zu`,
      },
      submit: {
        message: 'Sie werden per Mail über den Bestellstatus informiert.',
      },
    },
    ...(ui_mode === "hosted" && {
      success_url: `${origin}/shop/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop`,
    }),
    ui_mode,
  });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}