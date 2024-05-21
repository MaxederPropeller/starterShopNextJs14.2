import React from 'react';
import ProductCard from './ProductCard';

import { readAllProducts } from '../helpers/firebase/actionFirebase';
import { ProductType } from '../helpers/types';





export default async function ProductCardGrid () {
  const products = await readAllProducts() as ProductType[];

  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
  );
};


