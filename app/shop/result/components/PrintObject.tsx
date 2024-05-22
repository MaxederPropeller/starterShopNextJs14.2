import H1 from "@/components/styledComponents/h1";
import { CheckCircleIcon } from "lucide-react";
import type { Stripe } from "stripe";

export default async function PrintObject({ content }: { content: Stripe.PaymentIntent | Stripe.Checkout.Session; }): Promise<JSX.Element> {
  const contentObj = typeof content === 'string' ? JSON.parse(content) : content;
  const TextValue = { titel: "Vielen Dank für Ihre Bestellung!", description: "Ihre Bestellung wurde erfolgreich abgeschlossen. Sie erhalten in Kürze eine Bestätigung per Mail." };
  const formatPrice = (amount: number, currency: string) => new Intl.NumberFormat('de-CH', { style: 'currency', currency }).format(amount / 100);

  return (
    <div className="bg-green-200 min-h-screen flex flex-col items-center justify-center space-y-8 p-4 md:p-8 pb-12"> 
      <CheckCircleIcon className="h-16 w-16 md:h-20 md:w-20 text-green-600" /> 
      <H1 content={TextValue.titel} />
      <p className="text-center text-base md:text-lg text-green-700">{TextValue.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl bg-white p-4 md:p-6 rounded-md shadow-md"> 
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Kundeninformationen</h2>
          <p><span className="font-semibold">Name:</span> {contentObj.customer_details.name}</p>
          <p><span className="font-semibold">Email:</span> {contentObj.customer_details.email}</p>
        </div>
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Bestellübersicht</h2>
          {contentObj.line_items.data.map((item: any) => (
            <div key={item.id} className="flex justify-between mb-1">
              <span>{item.quantity} x {item.description}</span>
              <span>{formatPrice(item.amount_total, item.currency)}</span>
            </div>
          ))}
          <div className="border-t border-gray-300 pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span>Gesamt:</span>
              <span>{formatPrice(contentObj.amount_total, contentObj.currency)}</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2"> 
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Lieferadresse</h2>
          <p>{contentObj.shipping_details.name}</p>
          <p>{contentObj.shipping_details.address.line1}</p> 
        </div>
      </div>
    </div>
  );
}
