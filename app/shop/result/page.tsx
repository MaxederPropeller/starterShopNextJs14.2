// Importiert den Typ `Stripe` aus der "stripe"-Bibliothek. Dies dient der Typisierung und besseren Code-Unterstützung.
import type { Stripe } from "stripe";

// Importiert eine Komponente `PrintObject` aus den Projektressourcen, die zum Anzeigen von Objekten in einer für den Menschen lesbaren Form dient.
import PrintObject from "./components/PrintObject";
// Importiert eine vorbereitete Instanz des Stripe-Clients aus den Projektutilities, um mit der Stripe-API zu interagieren.
import { stripe } from "../helpers/stripe/stripeConfig";

// Definiert eine asynchrone Standardfunktion für die ResultPage-Komponente, die Suchparameter erhält.
export default async function ResultPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}): Promise<JSX.Element> {
  // Überprüft, ob ein `session_id`-Parameter vorhanden ist. Wenn nicht, wird ein Fehler geworfen.
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  // Ruft die Checkout-Session von Stripe ab, indem die `session_id` verwendet wird.
  // Die `expand`-Option wird genutzt, um zusätzliche Objekte innerhalb der Session zu laden, wie z.B. `line_items` und `payment_intent`.
  const checkoutSession: Stripe.Checkout.Session =
  await stripe.checkout.sessions.retrieve(searchParams.session_id, {
    expand: ["line_items", "payment_intent"],
  });
  if (!checkoutSession) {
    // Gibt eine Fehlermeldung zurück oder verarbeitet den Fehler auf eine andere Weise.
    return <div>Session nicht gefunden. Bitte überprüfen Sie die session_id.</div>;
  }

  // Extrahiert das `payment_intent`-Objekt aus der Checkout-Session und castet es zum `Stripe.PaymentIntent` Typ für die Verwendung im Code.
  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent;

  // Gibt JSX zurück, der den Status des Zahlungsintents und die Checkout-Session-Details anzeigt.
  // `PrintObject` wird verwendet, um die Checkout-Session-Details in einer übersichtlichen Form zu präsentieren.
  return (
    <>
      <PrintObject content={checkoutSession} />
    </>
  );
}
