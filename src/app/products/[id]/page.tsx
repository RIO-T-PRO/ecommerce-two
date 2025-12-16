"use client";

import { products } from "@/data/products";
import {
  Star,
  StarHalf,
  ChevronDown,
  ChevronUp,
  Heart,
  Plus,
  Minus,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const params = useParams();
  const { id } = params;

  const product = products.find((item) => item.id === id);

  const [selectedImage, setselectedImage] = useState(product?.images[0]);

  return (
    <div className="min-h-screen bg-background-dark">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="mb-6">
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
          <div className="flex flex-col col-span-2 gap-6">
            <div className="h-100 w-full border-2 border-text-blue rounded-xl">
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
                    {Array.from({ length: Math.floor(product.rating) }).map(
                      (_, index) => (
                        <Star key={index} className="w-5 h-5 fill-current" />
                      )
                    )}
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
              <div className="flex flex-wrap items-center gap-2">
                <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 text-text-muted text-sm font-semibold hover:bg-white/20">
                  S
                </button>
                <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-text-blue text-text-light text-sm font-semibold">
                  M
                </button>
                <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 text-text-muted text-sm font-semibold hover:bg-white/20">
                  L
                </button>
                <button className="flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 text-text-muted text-sm font-semibold hover:bg-white/20">
                  XL
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-lg bg-white/10">
                <button className="px-3 py-3 text-text-muted hover:text-text-light">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-3 text-text-light font-bold">1</span>
                <button className="px-3 py-3 text-text-muted hover:text-text-light">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-text-blue text-text-light text-base font-bold leading-normal tracking-[0.015em] hover:bg-text-blue/90">
                <ShoppingBag className="w-5 h-5 mr-2" />
                <span className="truncate">Add to Cart</span>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-white/5 text-text-muted hover:text-text-light hover:bg-white/10 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-3.5">
                <Heart className="w-5 h-5" />
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
              <div className="border-t border-border-light">
                <button className="flex justify-between items-center w-full py-3 text-left">
                  <h3 className="text-text-light font-medium">
                    Shipping & Returns
                  </h3>
                  <ChevronDown className="w-5 h-5 text-text-muted" />
                </button>
              </div>
              <div className="border-t border-border-light">
                <button className="flex justify-between items-center w-full py-3 text-left">
                  <h3 className="text-text-light font-medium">
                    Store Information
                  </h3>
                  <ChevronDown className="w-5 h-5 text-text-muted" />
                </button>
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
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <StarHalf className="w-5 h-5 fill-current" />
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
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7GxIPy7OyX0v4OIdsjT2WvOB_TvJyNgm8UB8iV9B58VSjmytEDdAEW-q7SEnu2tqW1FQNuS5KfVn-yamqDymVVBrB-JUKsB1Pm3JLFa8sFK90fBd7IhQksc1bf7le-7C_q4MrzaAUkZuAaNc2U8lbEibjk9_4I-Qh2g3MwdH4ci0nDywg1rmWJGfvQCNvM1rIvYZ6-ak_eOdMR7eoLREiS_7tKBbuimlVrDHRbS-gmeNhOLrB6M_ac9KtdqaQxoiOxtJJIaqJs2w"
                  alt="Image of a stylish black bomber jacket"
                  className="w-full aspect-3/4 object-cover"
                />
                <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-black/30 backdrop-blur-sm text-text-muted hover:text-text-light hover:bg-black/50">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-light font-semibold">
                  Classic Bomber Jacket
                </h3>
                <p className="text-text-muted text-sm">Men's Outerwear</p>
                <p className="text-text-light font-bold mt-1">$150.00</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6sdLvT86rygY54NLZ4mU5JHUpmcGNnExaRNMN9ytFj160I7ptIlQct3ItBo4AsgmKt1K9xELlbX_Ui98q2-RV_n5mmEh4ums9OAKTB09Xko2qOiK3uKYTmbsXJQqAg2JVeRKdL7G6_GI7vuI59BE6BfWjd9SQDUirfvbAuQJ9r8IuhjH5Jge_rlCMR4uIzTqQOekxNP3Cd2A8mKS3gjZ6ulxEBMO89FQ7GuGj8h3Gg3Z5ifIyflZMHq9JHdyqnClNl8qY5z_Wr5Q"
                  alt="Image of a cozy beige trench coat"
                  className="w-full aspect-3/4 object-cover"
                />
                <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-black/30 backdrop-blur-sm text-text-muted hover:text-text-light hover:bg-black/50">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-light font-semibold">
                  Elegant Trench Coat
                </h3>
                <p className="text-text-muted text-sm">Women's Collection</p>
                <p className="text-text-light font-bold mt-1">$250.00</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB5SajXBh7u9Sondk9ow05Mq_ObiynYSb9k2oUiU0bk1PT6ji9--lJ4Y9EseeedyKdWZ3vxTYYHyOzDPzrvgIWtwMLl6y7oTKpBiQP2dxpYezm2DiyO3MeEUw9iOVRenbRs8PzPHFpfjqfqMCUzeuwBzpqQUf6Px1kNhk-sY9SBckyDzVdctEM85eVtfjUGvpk8kS6XAdS80zjkPA7JYCRHvg_VDgXolL4mq5saXeuwnZgwY26R4xK-gMxmPa5WwoFEcT_kStcfM0"
                  alt="Image of a rugged denim jacket"
                  className="w-full aspect-3/4 object-cover"
                />
                <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-black/30 backdrop-blur-sm text-text-muted hover:text-text-light hover:bg-black/50">
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-light font-semibold">
                  Vintage Denim Jacket
                </h3>
                <p className="text-text-muted text-sm">Unisex Apparel</p>
                <p className="text-text-light font-bold mt-1">$120.00</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfbzLLcMSI_PjuXx5ZMhw5dyBWyePpsgQVs6kM84fVDxN2olYm5x1QdO7Q7tp1MI-Pm0w3UoZTq9vk522XCXzTAoRB2Z3GoRhLZgPw1cXlhQSmOJhCoLIgJUVInBx_XOgA8e8SDtcH7b2Sg1vg7cyC4CpLQGi0jlN6mMUjdGJ9VoAUUtzhIwzZeQjQnAqc331FDgCpYP9jlOOlrxVJt5rbXqVJBukVzLFT9AXyeaLZyJgKzS0T6RJfaPA_PDgbrM0ZNzG_Bjj3Lrg"
                  alt="Image of a leather biker jacket"
                  className="w-full aspect-3/4 object-cover"
                />
                <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full bg-black/30 backdrop-blur-sm text-text-muted hover:text-text-light hover:bg-black/50">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-light font-semibold">
                  Leather Biker Jacket
                </h3>
                <p className="text-text-muted text-sm">Men's Outerwear</p>
                <p className="text-text-light font-bold mt-1">$300.00</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
