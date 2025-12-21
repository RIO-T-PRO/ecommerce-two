import { CartItem } from "@/data/cart";
import useCart from "@/hooks/use-cart";
import { Minus, Plus, Trash } from "lucide-react";
import React from "react";

interface Props {
  cartItem: CartItem;
}

const CartCard: React.FC<Props> = ({ cartItem }) => {
  const { increaseQuantity, decreaseQuantity, deleteItem } = useCart();
  const quantity = cartItem?.cartQuantity;

  return (
    <div className="flex items-center justify-between py-0.5">
      <div className="flex items-center gap-3">
        <img
          src={cartItem.images[0]}
          alt={cartItem.name}
          className="aspect-square rounded-lg size-16 object-cover"
        />
        <div className="flex flex-col justify-center">
          <p className="text-text-light text-base font-medium leading-normal line-clamp-1">
            {cartItem.name}
          </p>
          <p className="text-text-muted text-sm font-normal leading-normal line-clamp-2">
            Color: {cartItem.color}, Size: {cartItem.size}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 text-text-light">
          <button
            disabled={quantity === 1}
            onClick={() => decreaseQuantity(cartItem.id)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
          >
            <Minus className="size-5" />
          </button>
          <button className="w-8 p-0 text-center bg-transparent focus:outline-0 focus:ring-0 focus:border-none border-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none">
            {quantity}
          </button>
          <button
            onClick={() => increaseQuantity(cartItem.id)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
          >
            <Plus className="size-5" />
          </button>
        </div>
        <p className="text-text-light text-base font-medium w-20 text-right">
          ${cartItem.price}
        </p>
        <button
          onClick={() => deleteItem(cartItem.id)}
          className="text-text-muted hover:text-text-primary/80 transition-colors cursor-pointer"
        >
          <Trash className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
