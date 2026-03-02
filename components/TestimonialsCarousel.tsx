'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlay, testimonials.length]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="relative">
      {/* Carousel container */}
      <div className="relative overflow-hidden">
        <div
          className="transition-opacity duration-700 ease-out"
          key={current}
        >
          <blockquote className="bg-background p-8 lg:p-12 flex flex-col gap-8 min-h-[280px] lg:min-h-[320px] flex justify-between">
            <p className="text-[15px] lg:text-[16px] text-foreground/70 leading-relaxed italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <footer className="pt-4 border-t border-white/8">
              <cite className="not-italic">
                <span className="block text-[13px] font-bold text-foreground uppercase tracking-[0.08em]">
                  {testimonials[current].name}
                </span>
                <span className="block text-[11px] text-foreground/40 mt-0.5">
                  {testimonials[current].role}
                </span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={goToPrev}
          className="focus-ring p-2 text-foreground/40 hover:text-primary transition-colors duration-300"
          aria-label="Témoignage précédent"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        {/* Dots indicator */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`focus-ring h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
              aria-current={index === current ? 'true' : 'false'}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="focus-ring p-2 text-foreground/40 hover:text-primary transition-colors duration-300"
          aria-label="Témoignage suivant"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="mt-6 text-center">
        <span className="text-[12px] uppercase tracking-[0.15em] text-foreground/40">
          {current + 1} / {testimonials.length}
        </span>
      </div>
    </div>
  );
}
