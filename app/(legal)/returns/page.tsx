import H1 from "@/components/styledComponents/h1";

import P from "@/components/styledComponents/p";
import ReturnGrid from "./returnGrid";


export default function Returns() {
    
    const contentValues = {
        title: "Rücksendung und Versand",
        description: "Hier findest du alle Informationen zu den Rücksendungen und der Versandabwicklung."
    }
    
    
    return (
        <div className="w-full flex flex-col justify-center items-center my-6 ">
            
        <H1 content={contentValues.title} />
        <P content={contentValues.description} />

        <ReturnGrid />

     



</div>
  );
}


