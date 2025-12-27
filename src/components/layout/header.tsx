"use client";

import { useState } from "react";
import { useProduct } from "@/context/app-context";
import { Heart, Home, ShoppingCart, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const { cart, favorite } = useProduct();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Change this based on your auth logic

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap px-8 py-3 sticky top-0 z-50 bg-background-dark/98 backdrop:blur-sm border-b border-b-gray-800">
        <div className="flex items-center gap-8">
          <button
            className="lg:hidden text-text-muted hover:text-text-blue transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex items-center gap-2">
            <div className="size-6 text-text-primary">
              <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
              </svg>
            </div>
            <h2 className="text-text-light text-xl font-bold tracking-[-0.015]">
              ShopRiot
            </h2>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-text-muted font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative hover:text-text-blue transition-colors"
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute left-0 -bottom-3 w-full h-0.5 bg-text-blue animate-lineDown"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4.5">
          {!isSignedIn && (
            <Link href="auth/sign-up">
              <button className="flex items-center justify-center rounded-lg px-4 h-10 bg-text-blue whitespace-nowrap text-text-light cursor-pointer hover:bg-text-primary/80 transition-colors">
                Sign up
              </button>
            </Link>
          )}

          <Link href="/favorite">
            <button className="relative flex items-center justify-center rounded-lg px-3 h-10 bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-500/10 border border-gray-500 cursor-pointer">
              <Heart size={18} />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-text-blue text-[10px] font-bold text-text-light">
                {favorite.length}
              </span>
            </button>
          </Link>

          <Link href="/cart">
            <button className="relative flex items-center justify-center rounded-lg h-10 bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-500/10 px-3 border border-gray-500 cursor-pointer">
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-text-blue text-[10px] font-bold text-text-light">
                {cart.length}
              </span>
            </button>
          </Link>

          {isSignedIn && (
            <Link href="/user-profile">
              <div className="relative group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxOYrA8x__3bham69-kGm2hkfZhyXPvF3wKOg56Sdv-tqRX4UzZUyFd8fI3qOJ_MNaVo_Gm5ORsESKZXx7p1T2AHnHfmvZmKWjnhA7JmyX-mAh0RE0BoEP_CIyRMxC80jvv-BMyvJHLy8DYhVnhOepisgNw_nlcs_vUa_OEYybBE43Xagh80VlYj4iE0h38NX4qlfDCwSl0v1knMHuL-XucE9NjhYYupH-wCWaULS3_XG7YiUVO5cDPwUgrla39tKbqJ_Tcdmwk-o"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover:border-text-blue transition-colors"
                />
              </div>
            </Link>
          )}
        </div>
      </header>

      {mobileOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-background-dark/98 backdrop:blur-sm border-b border-b-gray-800 px-6 py-4 animate-slideDown">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-text-muted font-medium hover:text-text-blue transition-colors py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-text-blue animate-lineDown"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <style jsx global>{`
        @keyframes lineDown {
          from {
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-lineDown {
          animation: lineDown 0.3s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Header;
