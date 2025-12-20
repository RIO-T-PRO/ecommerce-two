"use client";

import { Heart, Star } from "lucide-react";
import { ProductsData } from "@/data/products";
import Link from "next/link";
import useFavorite from "@/hooks/use-favorite";
import { useProduct } from "@/context/app-context";

interface ProductCardProps {
  product: ProductsData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { handleFavorite } = useFavorite();
  const { favorite } = useProduct();

  const isFavorite = favorite.find((item) => item.id === product.id);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={product.images[0]}
          className="w-full aspect-3/4 object-cover"
        />
        <button
          onClick={() => handleFavorite(product)}
          className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-black/30 backdrop-blur-sm text-text-muted hover:text-text-light hover:bg-black/50 cursor-pointer"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-text-blue" : ""}`} />
        </button>
      </div>
      <Link href={`/products/${product.id}`}>
        <div className="flex flex-col gap-1">
          <h3 className="text-text-light font-semibold">{product.name}</h3>

          <span className="flex items-center space-x-2">
            <p className="text-text-muted text-sm">{product.category}</p>

            <div className="flex items-center space-x-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={`star-${product.id}-${index}`}
                  className={`w-4 h-4 ${
                    index < Math.floor(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-300 text-gray-300"
                  }`}
                />
              ))}
            </div>
          </span>

          <p className="text-text-light font-bold mt-1">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
