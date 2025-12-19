"use client";

import { useProduct } from "@/context/app-context";
import { ProductsData } from "@/data/products";

const useCart = () => {
  const { cart, setCart } = useProduct();

  const handleAddToCart = (product: ProductsData) => {
    const existingItem = cart.find((item) => item.id === product.id);
    setCart((prev) => {
      return existingItem
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, cartQuantity: item.cartQuantity + 1 }
              : item
          )
        : [...prev, { ...product, cartQuantity: 1 }];
    });
  };

  const increaseQuantity = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cartQuantity: item.cartQuantity - 1 } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    handleAddToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
  };
};

export default useCart;
