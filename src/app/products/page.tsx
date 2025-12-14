"use client";

import Aside from "@/components/products/aside";
import ProductCard from "@/components/products/product-card";
import { Star } from "lucide-react";
import { storesData } from "@/data/stores";
import { useProduct } from "@/context/app-context";

const Products = () => {
  const { productData } = useProduct();

  return (
    <div>
      <div className="px-6 lg:px-10 py-12 bg-background-dark">
        <div className="flex flex-col lg:flex-row">
          <main className="flex-1 p-6 lg:p-8">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-text-light">
                  Featured Stores
                </h2>
                <button className="text-text-blue text-sm hover:text-opacity-80 transition-colors flex items-center gap-1">
                  View All <span className="text-lg">→</span>
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {storesData.map((store, index) => (
                  <div
                    key={index}
                    className="bg-card-bg border border-border-light rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <div className="w-16 h-16 bg-soft-blue-bg rounded-lg mb-4 overflow-hidden">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-text-light font-semibold text-sm mb-2">
                      {store.name}
                    </p>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < store.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-700 text-gray-700"
                          }`}
                        />
                      ))}
                      <span className="text-text-muted text-xs ml-1">
                        ({store.reviews})
                      </span>
                    </div>
                    <p className="text-text-blue text-xs hover:text-primary transition-colors">
                      Visit shop
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-text-light">Results</h2>
                  <p className="text-sm text-text-muted mt-1">
                    Showing {productData.length} products
                  </p>
                </div>
                <button className="text-text-blue text-sm hover:text-opacity-80 transition-colors flex items-center gap-1">
                  View All <span className="text-lg">→</span>
                </button>
              </div>

              {productData.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed border-border-light rounded-lg">
                  <div className="text-text-muted mb-2">No products found</div>
                  <div className="text-sm text-text-muted">
                    Try adjusting your filters
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {productData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </main>

          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Products;
