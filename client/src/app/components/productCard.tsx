'use client';

import Image from 'next/image';
import { Product } from '../types/product';
import { colorClasses, ColorKey } from '../utils/colorMappings';

interface ProductCardProps {
  product: Product;
}

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
      <div className="flex flex-col justify-center items-center p-4">
        <p className={`text-xs font-semibold ${colorClasses[product.color as ColorKey].text} mb-2 text-center`}>{product.name}</p>

        {/* Ratings */}
        <div className="mb-4 text-center">
          <p className="text-black text-[10px]">Ratings</p>
          <div className="flex">stars</div>
        </div>

        {/* Add to Cart button */}
        <button
          className={`mt-auto w-full ${
            colorClasses[product.color as ColorKey].bg
          } text-white font-bold text-[10px] leading-[150%] py-3 rounded-md hover:opacity-90 transition-colors`}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
