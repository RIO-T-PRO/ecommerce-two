import { Testimonial } from "@/data/testimonials";
import { Star } from "lucide-react";
import React from "react";

interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 bg-section-bg border border-border-light">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
            style={{ boxShadow: `0 0 0 2px text-text-primary` }}
          />
          <div>
            <p className="font-semibold text-sm text-text-light">
              {testimonial.name}
            </p>
            <p className="text-xs text-text-muted">{testimonial.role}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < testimonial.rating
                  ? "text-text-primary fill-text-primary"
                  : "text-text-muted fill-none"
              }
            />
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-text-light">
        {testimonial.content}
      </p>
    </div>
  );
};

export default TestimonialCard;
