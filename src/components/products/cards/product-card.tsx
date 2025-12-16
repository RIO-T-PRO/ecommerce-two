import { Heart, Star } from "lucide-react";
import { ProductsData } from "@/data/products";
import Link from "next/link";

interface ProductCardProps {
  product: ProductsData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={product.images[0]}
            className="w-full aspect-3/4 object-cover"
          />
          <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-black/30 backdrop-blur-sm text-text-muted hover:text-text-light hover:bg-black/50">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-text-light font-semibold">{product.name}</h3>

          <span className="flex items-center space-x-2">
            <p className="text-text-muted text-sm">{product.category}</p>

            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-text-light">{product.rating}</span>
            </div>
          </span>

          <p className="text-text-light font-bold mt-1">{product.price} USD</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
