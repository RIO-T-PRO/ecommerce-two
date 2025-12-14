"use client";

import Aside from "@/components/products/aside";
import ProductCard from "@/components/products/product-card";
// import { products } from "@/data/products";
import { Star } from "lucide-react";
import { storesData } from "@/data/stores";
import { useProduct } from "@/context/app-context";

const Products = () => {
  const { productData } = useProduct();

  return (
    <div>
      <div className="px-6 lg:px-10 py-12 bg-background-dark">
        <div className="flex">
          <main className="flex-1 p-8">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-text-light">Store</h2>
                <button className="text-text-blue text-sm hover:text-opacity-80">
                  View All →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {storesData.map((store, index) => (
                  <div
                    key={index}
                    className="bg-card-bg border border-border-light rounded-lg p-4"
                  >
                    <div className="w-16 h-16 bg-soft-blue-bg rounded-lg mb-4">
                      <img src={store.image} alt={store.name} />
                    </div>
                    <p className="text-text-light font-semibold text-sm mb-2">
                      {store.name}
                    </p>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(store.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="text-text-muted text-xs ml-1">
                        {store.reviews}
                      </span>
                    </div>
                    <p className="text-text-blue text-xs">Visit shop</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-text-light">Result</h2>
                <button className="text-text-blue text-sm hover:text-opacity-80">
                  View All →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {productData.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </main>

          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Products;
