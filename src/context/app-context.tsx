"use client";

import { CartItem } from "@/data/cart";
import { useContext, useState, createContext } from "react";

type IContext = {
  productData: CartItem[];
  setProductData: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

type Props = {
  children: React.ReactNode;
};

const defaultProductContext: IContext = {
  productData: [],
  setProductData: () => {
    console.warn("ProductProvider not found");
  },
};

const productContext = createContext<IContext>(defaultProductContext);

const ProductProvider = ({ children }: Props) => {
  const [productData, setProductData] = useState<CartItem[]>([]);

  const value: IContext = {
    productData,
    setProductData,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => useContext(productContext);
