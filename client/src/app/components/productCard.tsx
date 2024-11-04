'use client';

import Image from 'next/image';
import { Product } from '../types/product';
import { colorClasses, ColorKey } from '../utils/colorMappings';

interface ProductCardProps {
  product: Product;
}

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

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[6px] shadow-md overflow-hidden flex flex-col h-[300px] w-[200px]">
      {/* Image container with relative positioning for price overlay */}
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
          <span className="text-blue font-semibold text-[12px] leading-[150%]">{new Intl.NumberFormat('sv-SE').format(product.price)} SEK</span>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-col justify-center items-center pt-4">
        <p className={`text-xs font-semibold pb-4 ${colorClasses[product.color as ColorKey].text} text-center`}>{product.name}</p>

        {/* Ratings */}
        <div className="text-center gap-y-2">
          <p className="text-black text-[10px]">Ratings</p>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>{index < product.rating ? <FilledStarIcon /> : <OutlineStarIcon />}</span>
            ))}
          </div>
        </div>

        {/* Add to Cart button */}
        <button
          className={`mt-4 w-[184px] ${
            colorClasses[product.color as ColorKey].bg
          } text-white font-bold text-[10px] leading-[150%] py-3 rounded-md hover:opacity-90 transition-colors`}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
