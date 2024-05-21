"use server";


// in meiner Server Action wird das CheckoutFormulat von Stripe verarbeitet. 
// Hier kann man durch das create( { 
// line_items: [
// custom_text: {
// shipping_address: {
// mode etc anpassen


import type { Stripe } from "stripe";
import { headers } from "next/headers";

import { formatAmountForStripe, CURRENCY } from "./stripeHelpers";
import { stripe } from "./stripeConfig";
import { ProductType } from "../types";
import { readAllProducts } from "../firebase/actionFirebase";

export async function createCheckoutSession(
  data: FormData,
): Promise<{ client_secret: string | null; url: string | null }> {

  

  const productid = data.get("id") as string;
  const resDataDB = await readAllProducts() as ProductType[] ;



const productDB = resDataDB.find((product) => product.id === productid);
  const productName = productDB?.name ?? "";
  const productPrice =  formatAmountForStripe(productDB?.price ?? 0, CURRENCY);
  const productDescription = productDB?.shortDes ?? "";
  const productImage = productDB?.image ?? "";

  const ui_mode = data.get("uiMode") as Stripe.Checkout.SessionCreateParams.UiMode;
  const origin: string = headers().get("origin") as string;

  const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
    line_items: [
      {
        quantity: 1, // Initial quantity (optional)
        price_data: {
            currency: CURRENCY,
            product_data: {
                name: productName,
                description: productDescription,
                images: [productImage],
              
            },
            
            unit_amount: productPrice,
        },

        adjustable_quantity: {
          enabled: true, // Allow quantity adjustment
          minimum: 1,    // Optional: Set minimum quantity (default is 1)
          maximum: 10,   // Optional: Set maximum quantity
      },
   
        
      },
    ],
    mode: "payment",
    submit_type: "pay",
    consent_collection: {
      terms_of_service: 'required',
    },

    
   
    shipping_address_collection: {
      allowed_countries: ['US', 'CH', 'CA', 'DE', 'GB', 'FR', 'AU', 'CA', 
    ],
  
    
    },
    custom_text: {
      shipping_address: {
        message: 'Bitte geben Sie Ihre Lieferadresse ein. Wir liefern nur in die oben aufgeführten Länder. Danke für Ihr Verständnis.',
      },
      terms_of_service_acceptance: {
        message: `Ich stimme den [AGB's](${origin}/termsofuse) zu`,
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

export async function createPaymentIntent(
  data: FormData,
): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(
      Number(data.get("customDonation") as string),
      CURRENCY,
    ),
    automatic_payment_methods: { enabled: true },
    currency: CURRENCY,
  });

  return { client_secret: paymentIntent.client_secret as string };
}