import AddShoppingCartButton from './AddShoopingCart';
import { MotionButton, MotionDiv } from '@/lib/motionExport';
import { ProductType } from '../helpers/types';
import Image from 'next/image';
import { CheckoutForm } from '../helpers/stripe/CheckoutForm';
import Link from 'next/link';
import { CURRENCY } from '../helpers/stripe/stripeHelpers';

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <MotionDiv
      className={`min-h-fit lg:hover:scale-105 transition-transform duration-300 ease-in-out relative rounded overflow-hidden shadow-lg flex flex-col justify-between`}
      transition={{ duration: 0.2 }}
    >
      <div className="relative flex-grow">
        <Image className="w-full h-auto object-contain" src={product.image} alt={product.name} width={500} height={500} />
        <div className='absolute top-0 right-0 flex gap-1'>
          {product.isOnSale && (
            <div className="bg-red-500 text-white text-lg font-bold px-4 py-1">
              Sale
            </div>
          )}
          {product.isNew && (
            <div className="bg-cyan-500 text-white text-lg font-bold px-4 py-1">
              New
            </div>
          )}
          {product.isHit && (
            <div className="bg-lime-500 text-white text-lg font-bold px-4 py-1">
              Bestseller
            </div>
          )}
        </div>
        <div className="absolute -bottom-5 right-4">
          <AddShoppingCartButton product={product} />
        </div>
      </div>

      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.shortDes}</p>
      </div>

      <div className="px-6 py-4 flex justify-between items-center">
        <div className="rounded-full text-xl font-semibold text-end text-gray-700">
          <span className='text-2xl'>
            {product.isOnSale ? (
              <div className='flex flex-col justify-end items-end'>
                <div className="text-gray-500 text-sm font-semibold line-through">{CURRENCY} {product.price}</div>
                <div className="text-red-500 text-lg font-bold">{CURRENCY} {product.salePrice}</div>
              </div>
            ) : (
              <div className="text-primary text-lg font-bold">{CURRENCY} {product.price}</div>
            )}
          </span>
        </div>

        <div className="flex w-full gap-2 text-center">
          <MotionButton className='w-1/2'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/shop/${product.id}`} className="w-full border-2 font-bold p-4 rounded border-accent-foreground">
              Mehr
            </Link>
          </MotionButton>
          <CheckoutForm params={product} uiMode='hosted' />
        </div>
      </div>
    </MotionDiv>
  );
};
