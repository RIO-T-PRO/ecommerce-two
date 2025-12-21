import { ArrowBigLeft, Delete, Minus, Plus, Trash } from "lucide-react";
import React from "react";

const CartCard = () => {
  return (
    <div className="flex items-center justify-between py-0.5">
      <div className="flex items-center gap-3">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16"
          data-alt="Classic white t-shirt"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUbxi-PhFn3Z7gkneocQmgQJl3-VUYc4ok2nA8oCkcXoZj5vf78tVYhGZ4gKzNVN0irhFBxNIhLzyhS4U9lF_XGYiBWBzkBd6TMv7pbvM-7u2a7sdYHxtuavuYAMCVehwJVj9QgsUnA5qx42xK_CzqSLkC8A1ESMVhA3zz3SzP2e8NaxxmTQbDfSD1UvOlbrYpHZfvZYyS41qGJavq_EWSvwYO5t61v8Fk80QnxE92f_-QU2gFjAp-D6JfjXU28kyhWju6zZIsl0w')",
          }}
        ></div>
        <div className="flex flex-col justify-center">
          <p className="text-text-light text-base font-medium leading-normal line-clamp-1">
            Classic T-Shirt
          </p>
          <p className="text-text-muted text-sm font-normal leading-normal line-clamp-2">
            Color: White, Size: M
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 text-text-light">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
            <Minus className="size-5" />
          </button>
          <input
            className="w-8 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            type="number"
            defaultValue="2"
          />
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
            <Plus className="size-5" />
          </button>
        </div>
        <p className="text-text-light text-base font-medium w-20 text-right">
          $49.98
        </p>
        <button className="text-text-muted hover:text-red-600 transition-colors cursor-pointer">
          <Trash className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
