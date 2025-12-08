import { Testimonial } from "@/data/testimonials";
import { Star } from "lucide-react";
import React from "react";

interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 bg-[#1d2536] border-[1px solid rgba(191, 191, 197, 0.1)]]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
            style={{ boxShadow: `0 0 0 2px #3f3fdd` }}
          />
          <div>
            <p className="font-semibold text-sm" style={{ color: "#edeff5" }}>
              {testimonial.name}
            </p>
            <p className="text-xs" style={{ color: "#bfbfc5" }}>
              {testimonial.role}
            </p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              style={{
                fill: i < testimonial.rating ? "#3f3fdd" : "none",
                color: i < testimonial.rating ? "#3f3fdd" : "#bfbfc5",
              }}
            />
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-[#edeff5]">
        {testimonial.content}
      </p>
    </div>
  );
};

export default TestimonialCard;
