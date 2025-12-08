import CategoryCard from "../cards/categorieCard";
import { categoriesData } from "@/data/categories";

const CategorySection = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-wrap justify-between items-baseline gap-4 mb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#edeff5]">
            Categories
          </h1>
          <p className="text-base font-normal text-[#bfbfc5]">
            Explore our wide range of product categories.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoriesData.map((category, index) => (
          <CategoryCard category={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
