'use client';

import Image from 'next/image';
import { Product } from '../types/product';
import { colorClasses, ColorKey } from '../utils/colorMappings';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const MAX_RATING = 5;

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('sv-SE').format(price);
};

const FilledStarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#F7B559"
    className="w-3 h-3"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);

const OutlineStarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#F7B559"
    className="w-3 h-3"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
);

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-md shadow-[0px_30px_50px_-30px_rgba(0,0,0,0.2),0px_50px_100px_-20px_rgba(50,50,93,0.25)] overflow-hidden flex flex-col h-[300px] w-[200px]">
      <div className="relative h-[164px] w-full">
        <Image
          src={`/productImages/${product.imageUrl}.svg`}
          alt={product.name}
          height={163.46}
          width={200}
          className="object-cover"
        />
        {/* Price overlay */}
        <div className="absolute bottom-1 right-1 bg-white rounded-full px-[10px] py-[7px] shadow-lg">
          <p className={`text-blue font-semibold text-[12px] leading-[150%] ${inter.className}`}>{formatPrice(product.price)} SEK</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-2">
        <p className={`text-xs font-semibold mb-2 ${colorClasses[product.color as ColorKey]?.text || 'text-gray-500'} text-center`}>{product.name}</p>
        <p className="text-black text-[10px] mb-1">Ratings</p>
        <div className="flex mb-6">
          {[...Array(MAX_RATING)].map((_, index) => (
            <span key={index}>{index < product.rating ? <FilledStarIcon /> : <OutlineStarIcon />}</span>
          ))}
        </div>
        <button
          className={`w-full ${colorClasses[product.color as ColorKey]?.bg || 'bg-gray-500'} text-white font-bold text-[10px] py-3 rounded-md`}
          aria-label={`Add ${product.name} to cart`}
        >
          ADD TO CART
        </button>
      </div>
    </article>
  );
}
