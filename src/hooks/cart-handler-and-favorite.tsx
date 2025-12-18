"use client";

import { useProduct } from "@/context/app-context";
import { ProductsData } from "@/data/products";

const cartHandlerAndFavorite = () => {
  const { productData, setProductData } = useProduct();

  const handleAddToCart = (product: ProductsData) => {
    const newItem = [...productData, { product, cartQuantity: 1 }];
    return newItem;
  };

  const increaseQuantity = (id: string) => {
    const cartItem = productData.find((product) => product.id === id);
    if (!cartItem) {
      console.error("error finding the product");
      return;
    }

    const newCart = productData.map((product) =>
      product.id === id
        ? { ...product, cartQuantity: product.cartQuantity + 1 }
        : product
    );

    return newCart;
  };

  const decreaseQuantity = (id: string) => {
    const cartItem = productData.find((product) => product.id === id);
    if (!cartItem) {
      console.error("error fining the product");
    }

    const newCart = productData.map((product) =>
      product.id === id
        ? { ...product, cartQuantity: product.cartQuantity - 1 }
        : product
    );

    return newCart;
  };

  const deleteItem = (id: string) => {
    const newCart = productData.filter((product) => product.id !== id);
    return newCart;
  };

  return {
    handleAddToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
  };
};

export default cartHandlerAndFavorite;
