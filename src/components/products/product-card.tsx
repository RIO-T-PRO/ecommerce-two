import { Heart, Star } from "lucide-react";
import { ProductsData } from "@/data/products";

interface ProductCardProps {
  product: ProductsData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="bg-background-dark border border-[rgba(191,191,197,0.1)] rounded-lg overflow-hidden hover:border-[rgba(191,191,197,0.3)] transition-colors group">
    <div className="relative overflow-hidden bg-[#2a2d66] aspect-square">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
      />
      <button className="absolute top-3 right-3 bg-[#1a253b] bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full transition-colors">
        <Heart className="w-5 h-5 text-[#edeff5]" />
      </button>
    </div>
    <div className="p-4">
      <p className="text-[#edeff5] text-sm font-medium line-clamp-2 mb-2">
        {product.name}
      </p>
      <div className="flex items-center gap-2 mb-3">
        {[...Array(Math.floor(product.rating))].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
        ))}
        <span className="text-[#bfbfc5] text-xs">({product.reviews})</span>
      </div>
      <p className="text-[#edeff5] font-semibold text-lg">
        {product.price.toFixed(2)} USD
      </p>
    </div>
  </div>
);

export default ProductCard;
