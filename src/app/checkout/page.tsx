"use client";

import { useProduct } from "@/context/app-context";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddressSelector, {
  Address,
} from "@/components/products/checkout/address-selector";

const CheckoutPage = () => {
  const { cart } = useProduct();
  const router = useRouter();
  const [promoCode, setPromoCode] = useState("");

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      fullName: "John Doe",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "+1 555 555 5555",
    },
  ]);
  const [selectedAddress, setSelectedAddress] = useState<string>("1");

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
    <div className="bg-background-dark">
      <div className="container px-4 md:px-8 py-10 lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <a
              className="text-text-muted text-sm font-medium leading-normal transition-colors"
              href="/cart"
            >
              Cart
            </a>
            <span className="text-text-muted text-sm font-medium leading-normal">
              /
            </span>
            <span className="text-text-light text-sm font-medium leading-normal">
              Checkout
            </span>
          </div>

          {cart.length === 0 ? (
            <p className="text-text-muted">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-card-bg"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-text-light font-medium">
                        {item.name}
                      </h2>
                      <p className="text-text-muted text-sm">
                        Quantity: {item.cartQuantity}
                      </p>
                    </div>
                  </div>
                  <p className="text-text-light font-medium">
                    ${(item.price * item.cartQuantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}

          <AddressSelector
            addresses={addresses}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            setAddresses={setAddresses}
          />
        </div>

        <aside className="mt-8 lg:mt-0 rounded-xl bg-card-bg p-6 h-fit sticky top-24 flex flex-col gap-4">
          <h2 className="text-text-light text-lg font-bold border-b border-border-light pb-3">
            Order Summary
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-text-muted">
              <p>Subtotal</p>
              <p className="font-medium text-text-light">
                ${subTotal.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-text-muted">
              <p>Shipping</p>
              <p className="font-medium text-text-light">
                ${shippingCost.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-text-muted">
              <p>Taxes</p>
              <p className="font-medium text-text-light">
                ${taxCost.toFixed(2)}
              </p>
            </div>
            <div className="w-full h-px bg-white/10 my-2"></div>
            <div className="flex justify-between text-text-light text-lg font-bold">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>

          <div className="relative mt-4">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Promo Code"
              className="w-full h-12 rounded-lg border border-border-light outline-none text-text-muted pl-4 pr-24"
            />
            <button className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-2 rounded-md h-9 px-4 text-sm font-bold bg-text-primary text-text-light hover:bg-text-primary/80 transition-colors">
              Apply
            </button>
          </div>

          <button
            disabled={cart.length === 0}
            onClick={() => router.push("/confirmation")}
            className="cursor-pointer mt-4 w-full h-12 rounded-lg bg-text-primary text-text-light font-bold text-base hover:bg-text-primary/80 transition-colors"
          >
            Complete Purchase
          </button>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
