import { Headphones, RotateCcw, Shield, Lock } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    { text: "100% Authentic Products", icon: Shield },
    { text: "Secure Checkout", icon: Lock },
    { text: "30-Day Returns", icon: RotateCcw },
    { text: "24/7 Customer Support", icon: Headphones },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {indicators.map((indicator) => {
        const IconComponent = indicator.icon;
        return (
          <div key={indicator.text} className="flex items-center gap-2">
            <IconComponent size={16} className="text-[#3f3fdd] shrink-0" />
            <p className="text-sm text-[#edeff5]">{indicator.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TrustIndicators;
