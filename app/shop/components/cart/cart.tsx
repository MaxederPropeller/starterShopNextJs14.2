'use client';

import { useCart } from "../../helpers/context/cartContex";
import {
  Sheet,
  SheetContent,
 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { ProductType, WarenKorbItemProps } from "../../helpers/types";

import { CheckoutFormCart } from "../../helpers/stripe/CheckoutFormCart";


// Sidebar Sheet für den Warenkorb
export const WarenKorbSheet = () => {
  const { cart, removeAllFromCart, cartTotal } = useCart(); // Verwende den useCart Hook


  return (
    <Sheet>
      <SheetTrigger>
    
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        
      </SheetTrigger>
      <SheetContent className='overflow-scroll h-full'>
        <SheetHeader>
          <SheetTitle>Warenkorb</SheetTitle>
          
          
            <>
              {cart.map(({ product, quantity }: { product: ProductType; quantity: number }) => (
                <div key={product.id}>
                  <WarenKorbItem product={product} quantity={quantity} />
                </div>
              ))}
            </>
            <div className='flex-col gap-2 sticky bottom-0'>
              <p className='text-lg font-bold w-full flex justify-between my-2'>Total: <span>{cartTotal} CHF</span></p>
              <div className="flex gap-2">
                <Button className='w-fit bg-red-500/50 text-white'
                  onClick={() => removeAllFromCart()} >
                
                  ❌
                </Button>
                <CheckoutFormCart  cartItems={cart} uiMode='hosted' />
              </div>
              
            </div>
   
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};


// Warenkorb ProduktEinzeln
export const WarenKorbItem = ({ product, quantity }: WarenKorbItemProps) => {
  const { removeFromCart, addToCart } = useCart(); // Verwende den useCart Hook

  return (
    <div className="flex justify-between items-center flex-col my-4 max-h-24 w-full">
      <div className="flex items-center gap-2 w-full">
        <img src={product.image} alt={product.name} className="w-full max-w-24 h-full max-h-24 object-cover" />

        <div className='text-start flex flex-col w-full'>
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-sm font-semibold">{product.price} CHF</p>
          <div className='flex gap-2 items-center justify-between'>
            <button
              className="bg-gray-200 text-black rounded px-2"
              onClick={() => removeFromCart(product.id)}
            >
              -
            </button>
            <p className="text-sm">{quantity}</p>
            <button
              className="bg-gray-200 text-black rounded px-2"
              onClick={() => addToCart(product)}
            >
              +
            </button>
       
          </div>
        </div>
      </div>
    </div>
  );
};