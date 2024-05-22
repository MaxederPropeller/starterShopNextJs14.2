import H1 from "@/components/styledComponents/h1";
import ImpressumGrid from "./impressumGrid";
import P from "@/components/styledComponents/p";


export default function Impressum() {
    
    const contentValues = {
        title: "Impressum",
        description: "Hier findest du alle Informationen zu den Betreibern dieser Webseite."
    }
    
    
    return (
        <div className="w-full flex flex-col justify-center items-center my-6 ">
            
        <H1 content={contentValues.title} />
        <P content={contentValues.description} />

        <ImpressumGrid />

     



</div>
  );
}


