"use client";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { MotionButton } from "@/lib/motionExport";
import getStripe from "./get-stripe";
import { createCheckoutSession } from "./action-Checkout-Cart-stripe"; 
import type Stripe from "stripe";
import { ProductType } from "../types";

interface CheckoutFormProps {
  cartItems: { product: ProductType, quantity: number }[]; 
  uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
}

export function CheckoutFormCart({ cartItems, uiMode }: CheckoutFormProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const formAction = async (data: FormData): Promise<void> => {
    setLoading(true);

    try {
      // Explicitly set uiMode if not provided or is empty
      if (!uiMode || uiMode.trim() === '') {
        uiMode = 'hosted'; // Default to 'hosted' if not specified
        data.set("uiMode", uiMode);
      }
      
      const { client_secret, url } = await createCheckoutSession(data, cartItems);
      setLoading(false);
      if (uiMode === "embedded") return setClientSecret(client_secret);
      window.location.assign(url as string);

    } catch (error) {
      // Handle errors gracefully (e.g., display an error message to the user)
      console.error("Error creating checkout session:", error);
      setLoading(false); 
      // Consider displaying a user-friendly error notification
    }
  };
  return (
    <>
      <form action={formAction} className="w-full">
        <input type="hidden" name="uiMode" value={uiMode} />
        {/* Optional hidden fields for other data you want to send to createCheckoutSession */}
        <MotionButton
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
            className="w-full   bg-lime-400 py-2 px-4 font-bold text-primary  rounded"  
          type="submit"
          disabled={loading}
        >
          Kaufen
        </MotionButton>
      </form>

      {clientSecret ? (
        <EmbeddedCheckoutProvider
          stripe={getStripe()}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : null}
    </>
  );
}