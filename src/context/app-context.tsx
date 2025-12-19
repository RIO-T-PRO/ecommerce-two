"use client";

import { CartItem } from "@/data/cart";
import { ProductsData } from "@/data/products";
import { Console } from "console";
import { useContext, useState, createContext } from "react";

type IContext = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  productData: ProductsData[];
  setProductData: React.Dispatch<React.SetStateAction<ProductsData[]>>;
};

type Props = {
  children: React.ReactNode;
};

const defaultProductContext: IContext = {
  cart: [],
  setCart: () => {
    console.log("Cart not found");
  },
  productData: [],
  setProductData: () => {
    console.warn("ProductProvider not found");
  },
};

const productContext = createContext<IContext>(defaultProductContext);

const ProductProvider = ({ children }: Props) => {
  const [productData, setProductData] = useState<ProductsData[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const value: IContext = {
    productData,
    setProductData,
    cart,
    setCart,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(productContext);
