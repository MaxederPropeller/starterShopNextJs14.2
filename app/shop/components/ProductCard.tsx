'use client';




import AddShoppingCartButton from './AddShoopingCart';
import { MotionDiv } from '@/lib/motionExport';
import { ProductType } from '../helpers/types';
import Image from 'next/image';
import { CheckoutForm } from '../helpers/stripe/CheckoutForm';
import Link from 'next/link';



export default  function ProductCard  ({ product }: { product: ProductType })  {


  return (
    <MotionDiv
      className={`lg:hover:scale-105 transition-transform duration-300 ease-in-out lg:hover:z-20  relative max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between h-full`}
      transition={{ duration: 0.2 }}>
      <div className="relative">
        <Image className="w-full" src={product.image} alt={product.name} 
        width={500}
        height={500}

        />
        {product.isOnSale === true && (
          <div className="absolute top-0 right-0 bg-red-500 text-white text-lg font-bold rounded-bl px-4 py-1">
            Sale
          </div>
        )}
        <div className="absolute -bottom-5 right-4 ">
        <AddShoppingCartButton product={product} />
        </div>
      </div>
      <div className="flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
        <span className="inline-block rounded-full px-4 mx-2  text-xl font-semibold text-end text-gray-700 mr-2">
          <span
            className='text-2xl font-bold bg-gray-400/50 p-4 py-2 rounded-full text-black'
          >{product.price} €</span>
        </span>
      <div className="px-6 py-4 flex justify-between items-center">
        
        <div className='flex w-full gap-2 text-center'>
          <Link href={`/shop/${product.id}`}
                    className="w-1/2  border-2 font-bold p-4 rounded"
          >
            Mehr
          </Link>
          <CheckoutForm params={product} uiMode='hosted' />
        </div>
                </div>
    </MotionDiv>
  );
};


