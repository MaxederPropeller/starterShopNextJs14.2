import ProductCard from './ProductCard';
import { readAllProducts } from '../helpers/firebase/actionFirebase';
import { ProductType } from '../helpers/types';

export default async function ProductCardGrid() {
  const products = await readAllProducts() as ProductType[];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}