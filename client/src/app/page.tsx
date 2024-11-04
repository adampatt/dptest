'use server';
import { fetchProducts } from '@/app/lib/api';

export default async function Home() {
  const products = await fetchProducts();
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p>{JSON.stringify(products[0])}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p>{JSON.stringify(products[1])}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p>{JSON.stringify(products[2])}</p>
        </div>
      </div>
    </div>
  );
}
