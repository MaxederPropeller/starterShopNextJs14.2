"use client";
import H1 from "@/components/styledComponents/h1";
import { AlertCircle } from "lucide-react";

export default function Error({ error }: { error: Error }): JSX.Element {
  const TextValue = { 
    titel: "Es ist ein Fehler aufgetreten", 
    description: "Wir konnten Ihre Anfrage leider nicht bearbeiten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns."
  };

  return (
    <div className="bg-red-50 min-h-screen flex flex-col items-center justify-center space-y-8 p-4 md:p-8 pb-12">
      <AlertCircle className="h-16 w-16 md:h-20 md:w-20 text-red-500" />
      <H1 content={TextValue.titel} />
      <p className="text-center text-base md:text-lg text-red-700">
        {TextValue.description}
      </p>
      <div className="grid grid-cols-1 w-full max-w-2xl bg-white p-4 md:p-6 rounded-md shadow-md">
        <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">
          Fehlerdetails
        </h2>
        <p className="text-red-600 font-medium">{error.message}</p> 
        {/* Optional: You can display a stack trace for more detailed debugging */}
        {/* {process.env.NODE_ENV === "development" && (
          <pre className="text-xs mt-4 text-gray-500">{error.stack}</pre>
        )} */}
      </div>
    </div>
  );
}
