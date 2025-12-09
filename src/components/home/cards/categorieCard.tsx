import { CategoriesSection } from "@/data/categories";

interface CategoriesSectionProps {
  category: CategoriesSection;
}

const CategoryCard: React.FC<CategoriesSectionProps> = ({ category }) => {
  return (
    <div className="group bg-card-bg border border-border-light flex flex-col gap-3 rounded-xl p-3 pb-4 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="relative w-full aspect-square rounded-lg overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-base font-medium text-text-light">
            {category.title}
          </p>
          <p className="text-sm font-normal text-text-muted">
            {category.itemCount} items
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
