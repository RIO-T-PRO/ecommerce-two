"use client";

import { useProduct } from "@/context/app-context";
import { products } from "@/data/products";
import { Search, Star } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";

const Aside = () => {
  const { setProductData } = useProduct();

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000,
    currentValue: 500,
  });

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPriceRange((prev) => ({ ...prev, currentValue: value }));
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const categories = [...new Set(products.map((product) => product.category))];
  const sizes = [...new Set(products.flatMap((product) => product.size))];

  const toggleCategory = (category: string) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const toggleSizes = (sizes: string[]) => {
    setSelectedSize((prev) => {
      let update = [...prev];
      sizes.forEach(
        (size) =>
          (update = update.includes(size)
            ? update.filter((s) => s !== size)
            : [...prev, size])
      );
      return update;
    });

    setIsActive(true);
  };

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchCategory =
        selectedCategory.length === 0 ||
        selectedCategory.includes(product.category);

      const matchSize =
        selectedSize.length === 0 ||
        product.size.some((size) => selectedSize.includes(size));

      const matchRange = product.price <= priceRange.currentValue;

      const matchSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSize && matchSearch && matchRange;
    });

    setProductData(filtered);
  }, [
    selectedCategory,
    selectedSize,
    search,
    priceRange.currentValue,
    setProductData,
  ]); // Add dependencies

  return (
    <div>
      <aside className="hidden xl:block w-80 border-r border-border-light p-6 space-y-2 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-visible bg-[#101622]">
        <div className="flex items-center rounded-lg h-10 bg-section-bg border border-border-light">
          <Search className="w-5 h-5 text-text-muted ml-3" />
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search within results"
            className="flex-1 bg-transparent border-none px-3 text-white placeholder-text-muted focus:outline-none text-sm"
          />
        </div>

        <div className="space-y-1.5">
          <h3 className="text-text-light font-semibold">Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange.currentValue}
            onChange={handlePriceChange}
            className="w-full h-2 bg-section-bg rounded-lg accent-text-blue cursor-pointer"
          />
          <div className="flex justify-between text-sm text-text-muted">
            <span>$0</span>
            <span>{priceRange.currentValue}</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <h3 className="text-text-light font-semibold">Category</h3>
          <div className="space-y-2 text-sm text-text-muted">
            {categories.map((item, index) => (
              <label
                key={index}
                className="flex items-center cursor-pointer hover:text-text-light"
              >
                <input
                  onChange={() => toggleCategory(item)}
                  type="checkbox"
                  className="w-4 h-4 rounded bg-section-bg border border-[rgba(191,191,197,0.3)] text-text-blue cursor-pointer"
                />
                <span className="ml-3">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
          <button
            onClick={() => setSelectedSize([])}
            className={`px-3 py-1 rounded-lg transition-colors ${
              selectedSize.length === 0
                ? "bg-primary text-text-light"
                : "bg-section-bg text-text-light hover:bg-primary"
            }`}
          >
            All
          </button>

          {sizes.map((size) => {
            const active = selectedSize.includes(size);

            return (
              <button
                key={size}
                onClick={() => toggleSizes(sizes)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  active
                    ? "bg-primary text-text-light"
                    : "bg-section-bg text-text-light hover:bg-primary"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Aside;
