import type { Stripe } from "stripe";









export default async function PrintObject({
  content,
}: {
  content: Stripe.PaymentIntent | Stripe.Checkout.Session;
}): Promise<JSX.Element> {
  // Parse content if it's a string, otherwise use it directly
    const contentObj = typeof content === 'string' ? JSON.parse(content) : content;




  return (
    <div className="flex flex-col items-center justify-center min-h-[600px]   space-y-4">
      <h1 className="text-2xl font-bold">Stripe Object</h1>
      <pre className="w-full text-sm bg-gray-100 p-4 rounded-md text-wrap ">
        {JSON.stringify(contentObj, null, 2)}
      </pre>
   
  </div>


  )
}

