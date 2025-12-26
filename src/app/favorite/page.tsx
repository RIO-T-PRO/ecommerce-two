"use client";

import ProductCard from "@/components/products/cards/product-card";
import { useProduct } from "@/context/app-context";
import Link from "next/link";

const FavoritesPage = () => {
  const { favorite } = useProduct();

  if (favorite.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] gap-4 bg-background-dark">
        <h2 className="text-2xl font-semibold text-text-light">
          No favorites yet
        </h2>
        <p className="text-text-muted">
          Browse products and add them to your favorites.
        </p>
        <Link
          href="/products"
          className="px-6 py-2 rounded-lg bg-text-blue text-white hover:opacity-90"
        >
          Products
        </Link>
      </div>
    );
  }

  return (
    <section className="px-4 md:px-8 py-8 bg-background-dark">
      <div className="mb-6 flex items-center space-x-1">
        <Link href="/products" className="text-text-muted font-semibold">
          products /
        </Link>
        <h1 className="text-xl font-semibold text-text-light ">favorites</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorite.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FavoritesPage;
