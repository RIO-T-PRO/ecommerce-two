const Footer = () => {
  return (
    <footer className="bg-background-dark text-text-light pb-5 px-6 py-2 lg:px-10 border-t border-t-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="size-6 text-text-primary">
              <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"></path>
              </svg>
            </div>
            <h2 className="text-text-light text-xl font-bold">ShopRiot</h2>
          </div>
          <p className="text-sm text-text-light">
            Elevate Your Wardrobe with Irresistible Fashion Finds!
          </p>
        </div>

        <div>
          <h3 className="text-text-light font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-primary">
            <li>
              <a className="hover:text-text-blue transition-colors" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-text-blue transition-colors" href="#">
                Catalog
              </a>
            </li>
            <li>
              <a className="hover:text-text-blue transition-colors" href="#">
                Our Store
              </a>
            </li>
            <li>
              <a className="hover:text-text-blue transition-colors" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-text-light font-semibold mb-4">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-text-blue transition-colors" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-text-blue transition-colors" href="#">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a className="hover:text-text-blue transition-colors" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-text-blue transition-colors" href="#">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-text-light font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4 text-text-light">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form className="flex">
            <input
              className="w-full rounded-l-lg outline-none border border-gray-600 bg-background-dark text-text-light pl-4 py-2"
              placeholder="Your email"
              type="email"
            />
            <button
              className="bg-text-blue text-text-light px-4 rounded-r-lg transition-colors"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
