import H1 from "@/components/styledComponents/h1";

import P from "@/components/styledComponents/p";
import ABGSGrid from "./returnGrid";
import H2 from "@/components/styledComponents/h2";


export default function ABGs() {
    
    const contentValues = {
        title: "Geschäftsbedingungen",
        description: "Hier findest du alle Informationen zu den AGBs."
    }
    
    
    return (
        <div className="w-full flex flex-col justify-center items-center my-6 px-4 ">
            
        <H1 content={contentValues.title} />
        <P content={contentValues.description} />

        <ABGSGrid />

     



</div>
  );
}


