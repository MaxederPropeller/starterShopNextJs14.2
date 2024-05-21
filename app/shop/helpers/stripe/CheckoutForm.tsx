
// Importiert Stripe-Typen für die TypeScript-Integration.
import type Stripe from "stripe";
import React, { useState } from "react";

// Hilfsfunktion zur Formatierung von Beträgen für die Anzeige.
import { createCheckoutSession } from "./action-Checkout-stripe";
import getStripe from "./get-stripe";


import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { MotionButton } from "@/lib/motionExport";



interface URLProps {
    params: {
      id: string;
      number?: string; // Optional quantity parameter
    };
  }
  
  // Adjusted CheckoutFormProps to include URLProps
  interface CheckoutFormProps extends URLProps {
    uiMode: Stripe.Checkout.SessionCreateParams.UiMode;

  }


  
  export function CheckoutForm(props: CheckoutFormProps): JSX.Element {
    const [loading, setLoading] = useState<boolean>(false);

      const [clientSecret, setClientSecret] = useState<string | null>(null);
      const url = props.params.id;

     



  // Da wir den CustomDonationInput entfernen, wird auch der handleInputChange nicht mehr benötigt.

  const formAction = async (data: FormData): Promise<void> => {
    const uiMode = data.get("uiMode") as Stripe.Checkout.SessionCreateParams.UiMode;
    const { client_secret, url } = await createCheckoutSession(data);
    if (uiMode === "embedded") return setClientSecret(client_secret);
    window.location.assign(url as string);
  };

  return (
    <>
      <form action={formAction} className="w-full">
        <input type="hidden" name="uiMode" value={props.uiMode} />

        <input type="hidden" name="id" value={url} />


     

        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="w-full  border-2 font-bold p-4 rounded"  
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