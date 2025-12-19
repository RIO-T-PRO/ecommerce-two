"use client";

import { CartItem } from "@/data/cart";
import { ProductsData } from "@/data/products";
import { useContext, useState, createContext } from "react";

type IContext = {
  favorite: ProductsData[];
  setFavorite: React.Dispatch<React.SetStateAction<ProductsData[]>>;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  productData: ProductsData[];
  setProductData: React.Dispatch<React.SetStateAction<ProductsData[]>>;
};

type Props = {
  children: React.ReactNode;
};

const defaultProductContext: IContext = {
  favorite: [],
  setFavorite: () => {
    console.log("No favorite found");
  },
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
  const [favorite, setFavorite] = useState<ProductsData[]>([]);

  const value: IContext = {
    favorite,
    setFavorite,
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
