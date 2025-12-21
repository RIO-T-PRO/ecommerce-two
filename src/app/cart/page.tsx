import CartCard from "@/components/products/cards/cart-card";
import CartAside from "@/components/products/cart-aside";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-background-dark py-6 px-11">
      <main className="w-full max-w-7xl">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 mb-3">
          <a
            className="text-text-muted text-sm font-medium leading-normal transition-colors"
            href="/products"
          >
            Product
          </a>
          <span className="text-text-muted text-sm font-medium leading-normal">
            /
          </span>
          <span className="text-text-light text-sm font-medium leading-normal">
            Cart
          </span>
        </div>

        <div className="mb-4">
          <h1 className="text-text-light text-2xl font-semibold leading-tight tracking-[-0.033em] min-w-72">
            Your Cart
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-2 rounded-xl bg-card-bg p-4">
            <div className="flex justify-between items-center border-b border-border-light pb-3">
              <h2 className="text-text-light text-lg font-bold">2 Items</h2>
              <button className="text-text-muted hover:text-primary text-sm font-medium transition-colors">
                Clear Cart
              </button>
            </div>

            <CartCard />
            <CartCard />
            <div className="mt-2">
              <Link
                className="inline-flex items-center gap-2 text-text-blue hover:underline text-sm font-medium"
                href="/products"
              >
                <ArrowBigLeft className="size-5" />
                Continue Shopping
              </Link>
            </div>
          </div>

          <CartAside />
        </div>
      </main>
    </div>
  );
};

export default CartPage;
