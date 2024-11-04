'use client';

import Image from 'next/image';
import { Product } from '../types/product';
import { colorClasses, ColorKey } from '../utils/colorMappings';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-[200px] h-[300px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      {/* Image container with relative positioning for price overlay */}
      <div className="relative h-[164px] w-full">
        <Image
          src={`/productImages/${product.imageUrl}.svg`}
          alt={product.name}
          height={300}
          width={200}
          className="object-cover"
        />
        {/* Price overlay */}
        <div className="absolute bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
          <span className="text-black font-medium">{product.price.toLocaleString()} SEK</span>
        </div>
      </div>

      {/* Content section */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className={`text-2xl font-semibold ${colorClasses[product.color as ColorKey].text} mb-2`}>{product.name}</h2>

        {/* Ratings */}
        <div className="mb-4">
          <p className="text-gray-700 mb-1">Ratings</p>
          <div className="flex">stars</div>
        </div>

        {/* Add to Cart button */}
        <button
          className={`mt-auto w-full ${colorClasses[product.color as ColorKey].bg} text-white py-3 rounded-md hover:opacity-90 transition-colors`}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
