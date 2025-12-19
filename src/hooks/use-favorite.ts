import { useProduct } from "@/context/app-context";
import { ProductsData } from "@/data/products";
import React from "react";

const useFavorite = () => {
  const { favorite, setFavorite } = useProduct();

  const handleFavorite = (product: ProductsData) => {
    const existingItem = favorite.find((item) => item.id === product.id);

    setFavorite((prev) => {
      return existingItem
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
    });
  };

  return {
    handleFavorite,
  };
};

export default useFavorite;
