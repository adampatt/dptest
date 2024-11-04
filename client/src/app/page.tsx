'use server';
import { fetchProducts } from '@/app/lib/api';
import ProductCard from '@/app/components/productCard';

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
