"use client";

import { products, ProductsData } from "@/data/products";
import { useContext, useState, createContext } from "react";

type IContext = {
  productData: ProductsData[];
  setProductData: React.Dispatch<React.SetStateAction<ProductsData[]>>;
};

type Props = {
  children: React.ReactNode;
};

const defaultProductContext: IContext = {
  productData: products,
  setProductData: () => {
    console.warn("ProductProvider not found");
  },
};

const productContext = createContext<IContext>(defaultProductContext);

const ProductProvider = ({ children }: Props) => {
  const [productData, setProductData] = useState<ProductsData[]>(products);

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
