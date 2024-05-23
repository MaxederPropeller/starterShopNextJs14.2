import ProductCardGrid from "../app/shop/components/ProductCardGrid";
import H1 from "./styledComponents/h1";
import P from "./styledComponents/p";



export default function ShopSection() {
    
    const contentValues = {
        title: "Shop",
        description: "Hier findest du alle Produkte, die wir anbieten."
    }
    
    
    return (
        <div className="w-full flex flex-col justify-center items-center my-6 ">
            
        <H1 content={contentValues.title} />
        <P content={contentValues.description} />

        <ProductCardGrid />

    </div>
  );
}