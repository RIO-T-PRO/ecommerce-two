import CategorySection from "@/components/home/sections/category-section";
import HeroSection from "../components/home/sections/hero-section";
import StatsWidget from "@/components/home/sections/stats";
import TestimonialsSection from "@/components/home/sections/testimonials-section";
import TrustIndicators from "@/components/home/sections/indicators";

export default function Home() {
  return (
    <div>
      <div className="px-6 lg:px-10 py-12 bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <HeroSection />
          <CategorySection />
          <StatsWidget />
          <TestimonialsSection />
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#edeff5]">
              Why Shop With Us
            </h3>
            <TrustIndicators />
          </div>
        </div>
      </div>
    </div>
  );
}
