"use client";

import { useProduct } from "@/context/app-context";
import ProductCard from "../products/cards/product-card";

const FavoritesTab = () => {
  const { favorite } = useProduct();

  if (!favorite.length) {
    return (
      <div className="bg-card-bg rounded-xl border border-border-light p-6 text-center">
        <p className="text-text-muted text-sm">
          You haven’t added any products to favorites yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {favorite.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FavoritesTab;
