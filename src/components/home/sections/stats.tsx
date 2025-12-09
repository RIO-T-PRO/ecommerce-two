import { Package, Smile, Zap } from "lucide-react";

const StatsWidget = () => {
  const stats = [
    { label: "Products", value: "8,500+", icon: Package },
    { label: "Happy Customers", value: "50K+", icon: Smile },
    { label: "Fast Shipping", value: "2-3 Days", icon: Zap },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={stat.label}
            className="rounded-xl p-4 transition-colors bg-soft-blue-bg"
          >
            <div className="mb-2">
              <IconComponent size={24} className="text-primary" />
            </div>
            <p className="text-xs uppercase tracking-wide text-text-muted">
              {stat.label}
            </p>
            <p className="text-2xl font-bold mt-1 text-text-light">
              {stat.value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsWidget;
