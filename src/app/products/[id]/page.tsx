"use client";

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

const ProductDetailsPage = () => {
  return (
    <div className="min-h-screen bg-background-dark">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <a
              className="text-text-muted text-sm font-medium leading-normal hover:text-text-light"
              href="#"
            >
              Home
            </a>
            <span className="text-text-muted text-sm font-medium leading-normal">
              /
            </span>
            <a
              className="text-text-muted text-sm font-medium leading-normal hover:text-text-light"
              href="#"
            >
              Jackets
            </a>
            <span className="text-text-muted text-sm font-medium leading-normal">
              /
            </span>
            <span className="text-text-light text-sm font-medium leading-normal">
              Unisex Printed Quilted Jacket
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIedGwwA-O7w3LX5ilh-g2cqyOInCPeAGCbOFNR1xMIO2JF2X06f7QcbfS6ssO2xP0w13lAnJ-TVzHjPCMhn-uOsAGMnG8JCPCM7Xbvmuuld0L61VLvqJHt0s_zGhaCpFPgqiTMZ_idgWCvf1DEylnBShscZmLr3JdlQ3Z6nqV4DvGWimAFc8vMSLpG1b5d7QEzWf72puWLsm0qpqPyFYADb55nqkOvor4yLTWvdXUyx5YzPsOx51C4qs9ovHhfFqeVVaZa9gsKh4"
              alt="Main image of a unisex printed quilted jacket"
              className="w-full aspect-square rounded-xl object-cover"
            />

            <div className="grid grid-cols-4 gap-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVVSstcdx9uVIueoxiHWSLHZ8h2_1DWJ-XB87P6eALd-Xuc1iqx6CAKaXqoKY0InlpcQw75tm0XlQpp1Qeqc9Da4mNqaS6kx0Ji83XZXVL5UMnpOucLvF9HXkHMK40UnabApV9oVXcnwN5ODZ7yJga_pkpSR-084cGB5tBtGwT6bB6SVdKkJSrKHbD549ecxzFGKBsAMg_eAgRbxKsCp2gaFExSn2EP_tnMyktGoQiz46VuyEazoBqTHzbk7Ki_XgTQ-bUKnOJGqU"
                alt="Jacket thumbnail image 1"
                className="w-full aspect-square rounded-lg border-2 border-text-blue cursor-pointer object-cover"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnJCVaUVWn1_nRbiVLX2wkT5kQsFYHBUoc0gMXeyf6G5gJJ96pZLYbjiF1_sN3XJt4ymQsYYQSEmqTFG5h8IKohWoMIwSCGNxbPXKm45Uf5IxgC7Zb8SRPKs6D31_PuAG3vhtVAVhj9EQIk9CH5fUqfywpROfJiszoArbTEChYe8KviRw5TVSsSK8-7FNVf4VTh6r6Nf0agrxSHQc83isv1Mos-g1ktavRHUxu0_dDNH3cN9lUbTizfNg92ftWp0NJpVVJc2_MCE4"
                alt="Jacket thumbnail image 2"
                className="w-full aspect-square rounded-lg opacity-60 hover:opacity-100 cursor-pointer object-cover"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqLKd-hoU95M_38--rEYuprYJwCbZgv9R8DKcDtuCW8JdFRL3ROoM3R5yHbvw-F7WP5vkyhgGWPg_GrOn-Oyp5k_1BEcIUtX3FgA8mr8Fff7xg3BC9TaR2Z_atuc1vMBAAG5oDWbq3qXy7xhypjB0O_EGPbC8gVgwvAQoZUkWSrencEXfbUj_yn6QW2_8JoSLLhqYqPeeeMYlsgbgF-sfBylaX07okqzvNDAHnuCfk6lfH_0rJw_q14OjQQQppu5iSh-dU06DsN3s"
                alt="Jacket thumbnail image 3"
                className="w-full aspect-square rounded-lg opacity-60 hover:opacity-100 cursor-pointer object-cover"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6SmULFzEWi_asbM5Rnrj7QNYIv8OswHHm0EJwDam7Defs4i8GhwCwn-3HaVSf1tUYwYmoh6lb0mhT50M1ON0DVSNP9lnNard2bqgCGr83-QQhy5Cv6p9k9Xnbf4oN3VcJr2aiKkHGOpg5wI4abK--h7lbt4eqTI_t3n-w6l3ekU59aoJZhFstqDGKUmVMeZklk2BMRyVD-2_ppFpWD9L3BrXrX8IC2-Wcbvsl_gP6uqsTyHIqfuXxqNKHT8paxsFXX7ATuKTmW9s"
                alt="Jacket thumbnail image 4"
                className="w-full aspect-square rounded-lg opacity-60 hover:opacity-100 cursor-pointer object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-text-light text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                Unisex Printed Quilted Jacket
              </h1>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <StarHalf className="w-5 h-5 fill-current" />
                </div>
                <span className="text-text-light font-bold text-sm">4.6</span>
                <a
                  className="text-text-muted text-sm underline hover:text-text-light"
                  href="#reviews"
                >
                  (125 reviews)
                </a>
              </div>
            </div>

            <p className="text-text-light text-4xl font-bold">$200.00</p>

            <div className="flex flex-col gap-3">
              <h3 className="text-text-light font-medium">
                Color: <span className="text-text-muted">Green</span>
              </h3>
              <div className="flex items-center gap-2">
                <button className="size-8 rounded-full bg-green-500 ring-2 ring-offset-2 ring-offset-background-dark ring-text-blue" />
                <button className="size-8 rounded-full bg-pink-500 hover:ring-2 ring-white/50" />
                <button className="size-8 rounded-full bg-blue-500 hover:ring-2 ring-white/50" />
                <button className="size-8 rounded-full bg-linear-to-br from-red-500 to-yellow-500 hover:ring-2 ring-white/50" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-text-light font-medium">Size:</h3>
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
                    Stay warm and stylish with our Unisex Printed Quilted
                    Jacket. Crafted with high-quality materials, this jacket
                    features a unique all-over print, a cozy quilted design, and
                    a comfortable fit suitable for everyone. Perfect for chilly
                    days and making a fashion statement.
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

export default ProductDetailsPage;
