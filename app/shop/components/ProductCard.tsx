'use client';

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
      className="col-span-1 md:col-span-2 lg:col-span-1 min-h-fit relative max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between h-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-full">
        <Image
          className="w-full min-w-full min-h-full object-cover shadow-slate-300/30 shadow-lg"
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
        />

        <div className="absolute top-0 right-0 flex gap-1">
          {product.isOnSale && (
            <div className="bg-red-500 text-white text-lg font-bold px-4 py-1">Sale</div>
          )}
          {product.isNew && (
            <div className="bg-cyan-500 text-white text-lg font-bold px-4 py-1">New</div>
          )}
          {product.isHit && (
            <div className="bg-lime-500 text-white text-lg font-bold px-4 py-1">Bestseller</div>
          )}
        </div>

        <div className="absolute -bottom-5 right-4">
          <AddShoppingCartButton product={product} />
        </div>
      </div>

      <div className="px-6 py-4 flex-grow h-fit">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.shortDes}</p>
      </div>

      <div className="px-4 mx-2 text-xl font-semibold text-right text-gray-700 mr-2 relative">
        <span className="text-2xl">
          {product.isOnSale ? (
            <div className="flex flex-col items-end">
              <div className="text-gray-500 text-sm font-semibold line-through">{CURRENCY} {product.price}</div>
              <div className="text-red-500 text-lg font-bold">{CURRENCY} {product.salePrice}</div>
            </div>
          ) : (
            <div className="text-primary text-lg font-bold">{CURRENCY} {product.price}</div>
          )}
        </span>
      </div>

      <div className="px-6 py-4 flex justify-between items-center relative">
        <div className="flex w-full gap-2 text-center">
          <MotionButton
            className="flex w-1/2 gap-2 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/shop/${product.id}`} className="w-full border-2 font-bold p-4 rounded border-accent-foreground">
              Mehr
            </Link>
          </MotionButton>
          <CheckoutForm params={product} uiMode="hosted" />
        </div>
      </div>
    </MotionDiv>
  );
}
