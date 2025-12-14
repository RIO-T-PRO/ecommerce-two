import { Heart, Home, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap px-6 lg:px-10 py-3 sticky top-0 z-10 bg-background-dark/98 backdrop:blur-sm border-b border-b-gray-800">
      <div className="flex items-center gap-8">
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

        <nav className="flex items-center gap-6 text-text-muted font-medium">
          <Link href="/" className="hover:text-text-blue">
            Home
          </Link>

          <Link href="/products" className="hover:text-text-blue">
            Products
          </Link>
          <Link href="/about" className="hover:text-text-blue">
            About
          </Link>
          <Link href="/contact" className="hover:text-text-blue">
            Contact
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4.5">
        <button className="flex items-center justify-center rounded-lg px-4 h-10 bg-text-blue whitespace-nowrap text-text-light cursor-pointer">
          Sign up
        </button>
        <button className="flex items-center justify-center rounded-lg px-3 h-10 bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-500/10 border border-gray-500 cursor-pointer">
          <Heart size={18} />
        </button>
        <button className="relative flex items-center justify-center rounded-lg h-10 bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-500/10 px-3 border border-gray-500 cursor-pointer">
          <ShoppingCart size={18} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-text-blue text-[10px] font-bold text-text-light">
            3
          </span>
        </button>
        <Link href="/user-profile">
          <div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxOYrA8x__3bham69-kGm2hkfZhyXPvF3wKOg56Sdv-tqRX4UzZUyFd8fI3qOJ_MNaVo_Gm5ORsESKZXx7p1T2AHnHfmvZmKWjnhA7JmyX-mAh0RE0BoEP_CIyRMxC80jvv-BMyvJHLy8DYhVnhOepisgNw_nlcs_vUa_OEYybBE43Xagh80VlYj4iE0h38NX4qlfDCwSl0v1knMHuL-XucE9NjhYYupH-wCWaULS3_XG7YiUVO5cDPwUgrla39tKbqJ_Tcdmwk-o"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
