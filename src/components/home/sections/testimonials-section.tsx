"use client";

import { useState } from "react";
import TestimonialCard from "../cards/testimonialCard";
import { Testimonial, testimonialsData } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 2;

  const totalSlides = Math.ceil(testimonialsData.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      return nextSlide >= totalSlides ? 0 : nextSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = prev - 1;
      return prevSlide < 0 ? totalSlides - 1 : prevSlide;
    });
  };

  const getCurrentTestimonials = (): Testimonial[] => {
    const startIndex = currentSlide * slidesToShow;
    const endIndex = startIndex + slidesToShow;
    return testimonialsData.slice(startIndex, endIndex);
  };

  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
    }
  };

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {getCurrentTestimonials().map((testimonial, idx) => (
          <TestimonialCard
            testimonial={testimonial}
            key={testimonial.id || `${currentSlide}-${idx}`}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        {/* Slide Indicators */}
        <div className="flex gap-2">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`
                h-2 rounded-full transition-all duration-300 
                ${
                  idx === currentSlide
                    ? "w-6 bg-indigo-600"
                    : "w-2 bg-gray-400 opacity-50 hover:opacity-70"
                }
              `}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slide Navigation Buttons */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="
              p-2 rounded-lg transition-all duration-300 
              bg-gray-100/5 border border-gray-400/10 
              text-gray-100 hover:bg-indigo-500/10 hover:border-indigo-500/30
              dark:bg-gray-800/50 dark:border-gray-600/20 dark:text-gray-200
              dark:hover:bg-indigo-600/20 dark:hover:border-indigo-500/40
            "
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="
              p-2 rounded-lg transition-all duration-300 
              bg-gray-100/5 border border-gray-400/10 
              text-gray-100 hover:bg-indigo-500/10 hover:border-indigo-500/30
              dark:bg-gray-800/50 dark:border-gray-600/20 dark:text-gray-200
              dark:hover:bg-indigo-600/20 dark:hover:border-indigo-500/40
            "
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
