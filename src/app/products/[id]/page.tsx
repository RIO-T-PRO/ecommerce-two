"use client";

import ProductCard from "@/components/products/cards/product-card";
import { useProduct } from "@/context/app-context";
import { products } from "@/data/products";
import useCart from "@/hooks/use-cart";
import useFavorite from "@/hooks/use-favorite";

import {
  Star,
  StarHalf,
  ChevronDown,
  ChevronUp,
  Heart,
  Plus,
  Minus,
  ShoppingBag,
  Delete,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const params = useParams();
  const { id } = params;
  const { cart, favorite } = useProduct();
  const { handleFavorite } = useFavorite();

  const product = products.find((item) => item.id === id);
  const relatedProductFilter = products.filter(
    (item) => item.category === product?.category && item.id !== id
  );

  const [selectedImage, setselectedImage] = useState(product?.images[0]);

  const { handleAddToCart, decreaseQuantity, increaseQuantity, deleteItem } =
    useCart();

  if (!product) {
    return (
      <div className="text-3xl text-center text-text-muted">
        Product not found
      </div>
    );
  }

  const cartItem = cart.find((item) => item.id === product.id);
  const isFavorite = favorite.find((item) => item.id === product.id);

  const quantity = cartItem?.cartQuantity;

  return (
    <div className="min-h-screen bg-background-dark">
      <main className="w-full max-w-7xl px-11 py-6">
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <Link
              className="text-text-muted text-sm font-medium leading-normal hover:text-text-light"
              href="/"
            >
              Home
            </Link>
            <span className="text-text-muted text-sm font-medium leading-normal">
              /
            </span>
            <Link
              className="text-text-muted text-sm font-medium leading-normal hover:text-text-light"
              href="/products"
            >
              Products
            </Link>
            <span className="text-text-muted text-sm font-medium leading-normal">
              /
            </span>
            <span className="text-text-light text-sm font-medium leading-normal">
              {product?.name}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="flex flex-col col-span-2 gap-5">
            <div className="h-90 w-full border-2 border-text-blue rounded-xl">
              <img
                src={selectedImage}
                alt={product?.name}
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product?.images.map((image, index) => (
                <div onClick={() => setselectedImage(image)} key={index}>
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className={`size-full rounded-lg border-2 ${
                      selectedImage === image
                        ? "border-text-blue"
                        : "border-white"
                    } cursor-pointer object-contain`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col col-span-3 gap-6">
            <div>
              <h1 className="text-text-light text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                {product?.name}
              </h1>
              <div className="flex items-center gap-2 mt-3">
                {product?.rating && (
                  <div className="flex text-yellow-400">
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
                )}

                <span className="text-text-light font-bold text-sm">4.6</span>
                <a
                  className="text-text-muted text-sm underline hover:text-text-light"
                  href="#reviews"
                >
                  ({product?.reviews} reviews)
                </a>
              </div>
            </div>

            <p className="text-text-light text-4xl font-bold">
              ${product?.price.toFixed(2)}
            </p>

            <div className="flex flex-col gap-3">
              <h3 className="text-text-light font-medium">Size:{}</h3>
              <div>
                <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 text-text-muted text-sm font-semibold hover:bg-white/20">
                  {product.size}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {cartItem && (
                <div className="flex items-center rounded-lg bg-white/10">
                  <button
                    disabled={quantity === 1}
                    onClick={() => decreaseQuantity(product.id)}
                    className="px-3 py-3 text-text-muted hover:text-text-light cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 text-text-light font-bold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="px-3 py-3 text-text-muted hover:text-text-light cursor-pointer`"
                  >
                    <Plus className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => deleteItem(product.id)}
                    className="px-3 py-3 text-text-muted hover:text-text-light cursor-pointer`"
                  >
                    <Delete className="w-4 h-4" />
                  </button>
                </div>
              )}
              <button
                onClick={() => handleAddToCart(product)}
                className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-text-blue text-text-light text-base font-bold leading-normal tracking-[0.015em] hover:bg-text-blue/90"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                <span className="truncate">Add to Cart</span>
              </button>
              <button
                onClick={() => handleFavorite(product)}
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-white/5 text-text-muted hover:text-text-light hover:bg-white/10 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-3.5"
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite ? "fill-text-blue" : ""}`}
                />
              </button>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-border-light">
              <div className="flex flex-col">
                <button className="flex justify-between items-center w-full py-3 text-left">
                  <h3 className="text-text-light font-medium">
                    Product Description
                  </h3>
                  <ChevronUp className="w-5 h-5 text-text-muted" />
                </button>
                <div className="pb-3">
                  <p className="text-text-muted text-sm leading-relaxed">
                    {product?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-border-light" id="reviews">
          <h2 className="text-text-light text-3xl font-bold mb-6">
            Reviews & Ratings
          </h2>
          <div className="flex flex-wrap gap-x-12 gap-y-8 p-4 bg-white/5 rounded-xl">
            <div className="flex flex-col gap-2">
              <p className="text-text-light text-5xl font-black leading-tight tracking-[-0.033em]">
                4.6
              </p>
              <div className="flex gap-0.5 text-yellow-400">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star key={item} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-text-muted text-base font-normal leading-normal">
                Based on 125 reviews
              </p>
            </div>
            <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-3">
              <p className="text-text-light text-sm font-normal leading-normal">
                5
              </p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="rounded-full bg-white w-[54%]" />
              </div>
              <p className="text-text-muted text-sm font-normal leading-normal text-right">
                54%
              </p>
              <p className="text-text-light text-sm font-normal leading-normal">
                4
              </p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="rounded-full bg-white w-[30%]" />
              </div>
              <p className="text-text-muted text-sm font-normal leading-normal text-right">
                30%
              </p>
              <p className="text-text-light text-sm font-normal leading-normal">
                3
              </p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="rounded-full bg-white w-[10%]" />
              </div>
              <p className="text-text-muted text-sm font-normal leading-normal text-right">
                10%
              </p>
              <p className="text-text-light text-sm font-normal leading-normal">
                2
              </p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="rounded-full bg-white w-[4%]" />
              </div>
              <p className="text-text-muted text-sm font-normal leading-normal text-right">
                4%
              </p>
              <p className="text-text-light text-sm font-normal leading-normal">
                1
              </p>
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div className="rounded-full bg-white w-[2%]" />
              </div>
              <p className="text-text-muted text-sm font-normal leading-normal text-right">
                2%
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-text-light text-3xl font-bold mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProductFilter.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
