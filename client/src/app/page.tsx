'use server';
import { fetchProducts } from '@/app/lib/api';

export default async function Home() {
  const products = await fetchProducts();
  return (
    <div>
      <p>{JSON.stringify(products)}</p>
    </div>
  );
}
