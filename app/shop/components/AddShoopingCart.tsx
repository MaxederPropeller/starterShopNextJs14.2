
import { MotionButton } from '@/lib/motionExport';

import React from 'react';
import { useCart } from '../helpers/context/cartContex';
import { toast } from "sonner"
import { ProductType } from '../helpers/types';



const AddShoppingCartButton: React.FC<{ product: ProductType }> = ({ product }) => {
    const { addToCart } = useCart();


    const handleAddToCart  = async () => {
        addToCart(product);
        toast.success(`${product.name} wurde zum Warenkorb hinzugefügt`, 
        {position: 'bottom-right',
            icon: '✅'
        }
        );
      };
    
 


    return (
        <MotionButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

            onClick={() => handleAddToCart() }
            className="flex items-center justify-center w-12 h-12 bg-slate-500 text-white rounded-full"
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
         </svg>
        </MotionButton>
    );
};

export default AddShoppingCartButton;
