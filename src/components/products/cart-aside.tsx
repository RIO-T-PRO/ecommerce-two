import { useProduct } from "@/context/app-context";
import { useRouter } from "next/router";

const CartAside = () => {
  const { cart } = useProduct();

  const router = useRouter();

  const subTotal = cart.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  const discount = cart.reduce((totalDiscount, item) => {
    if (item.cartQuantity >= 3) {
      return totalDiscount + item.price * item.cartQuantity * 0.05;
    }
    return totalDiscount;
  }, 0);

  const shipping = (subTotal: number, discount: number) => {
    const orderValue = Math.max(0, subTotal - discount);

    if (orderValue >= 150) return 0;
    if (orderValue < 75) return 5.99;
    return 3.99;
  };

  const shippingCost = shipping(subTotal, discount);

  const tax = (subTotal: number, shipping: number, discount: number) => {
    const taxRate = 0.02;
    const amount = subTotal - discount + shipping;
    return Number((amount * taxRate).toFixed(2));
  };

  const taxCost = tax(subTotal, shippingCost, discount);

  const total = subTotal - discount + shippingCost + taxCost;

  return (
    <aside className="lg:col-span-1 rounded-xl bg-card-bg p-6 h-fit sticky top-24">
      <h2 className="text-text-light text-lg font-bold border-b border-border-light pb-3 mb-3">
        Order Summary
      </h2>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between text-text-muted">
          <p>Subtotal</p>
          <p className="font-medium text-text-light">${subTotal}</p>
        </div>
        <div className="flex justify-between text-text-muted">
          <p>Shipping</p>
          <p className="font-medium text-text-light">${shippingCost}</p>
        </div>
        <div className="flex justify-between text-text-muted">
          <p>Taxes</p>
          <p className="font-medium text-text-light">${taxCost}</p>
        </div>
        <div className="w-full h-px bg-white/10 my-2"></div>
        <div className="flex justify-between text-text-light text-lg font-bold">
          <p>Total</p>
          <p>${total}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <div className="relative">
          <input
            className="w-full h-12 rounded-lg border border-border-light outline-none text-text-muted pl-4 pr-24"
            placeholder="Promo Code"
            type="text"
          />
          <button className="absolute top-1/2 -translate-y-1/2 right-2 rounded-md h-9 px-4 text-sm font-bold bg-text-primary text-text-light cursor-pointer hover:bg-text-primary/80 transition-colors">
            Apply
          </button>
        </div>
        <button
          onClick={() => router.push("/checkout")}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-text-primary text-text-light gap-2 text-base font-bold leading-normal  hover:bg-text-primary/80 transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>
    </aside>
  );
};

export default CartAside;
