"use client";

import Aside from "@/components/products/aside";
import ProductCard from "@/components/products/cards/product-card";
import { Star } from "lucide-react";
import { storesData } from "@/data/stores";
import { useProduct } from "@/context/app-context";

const Products = () => {
  const { productData } = useProduct();

  return (
    <div>
      <div className="pb-6 bg-background-dark">
        <div className="flex ">
          <main className="flex-1 p-4 md:px-8">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-text-light">Store</h2>
                <button className="text-text-blue text-sm hover:text-opacity-80">
                  View All →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {storesData.map((store, index) => (
                  <div
                    key={index}
                    className="bg-card-bg border border-border-light rounded-lg p-2"
                  >
                    <div className="w-16 h-16 bg-soft-blue-bg rounded-lg mb-2">
                      <img src={store.image} alt={store.name} />
                    </div>
                    <p className="text-text-light font-semibold text-sm mb-1">
                      {store.name}
                    </p>
                    <div className="flex items-center gap-1 mb-1">
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
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-text-light">Products</h2>
                <button className="text-text-blue text-sm hover:text-opacity-80">
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productData.length > 0 ? (
                  productData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
                ) : (
                  <p className="text-center text-text-muted text-3xl col-span-full py-8">
                    No products found.
                  </p>
                )}
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
