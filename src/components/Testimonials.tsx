import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/hospitalData';
import { Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#252C2D]/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase mb-2">
            <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
            <span>Care Journeys & Recovery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight">
            Reflections on Compassionate Care
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A66B] mx-auto mt-3 mb-4" aria-hidden="true" />
          <p className="text-xs text-[#252C2D]/60 max-w-md mx-auto">
            * Clearly labeled sample patient narratives illustrating clinical experience, recovery protocols, and post-operative milestones.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-xl p-8 sm:p-12 border border-[#252C2D]/8 shadow-sm relative transition-all duration-300">
          <Quote className="w-10 h-10 text-[#C6A66B]/30 absolute top-8 left-8" aria-hidden="true" />

          <div className="relative z-10 space-y-6 pt-4">
            <p className="text-lg sm:text-xl text-[#123D40] font-light italic leading-relaxed">
              "{current.quote}"
            </p>

            <div className="pt-4 border-t border-[#252C2D]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold text-[#123D40]">{current.patientName}</h4>
                <div className="flex items-center gap-2 text-xs text-[#252C2D]/70 mt-0.5">
                  <span className="text-[#C6A66B] font-medium">{current.condition}</span>
                  <span>·</span>
                  <span>{current.department}</span>
                </div>
                <div className="text-[11px] text-[#252C2D]/55 mt-1">
                  {current.stayDuration} · {current.recoveryNote}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-2 rounded-full border border-[#252C2D]/15 hover:border-[#123D40] hover:bg-[#FAF9F6] text-[#123D40] transition-colors"
                  aria-label="Previous patient story"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#252C2D]/60 px-1">
                  0{currentIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  onClick={next}
                  className="p-2 rounded-full border border-[#252C2D]/15 hover:border-[#123D40] hover:bg-[#FAF9F6] text-[#123D40] transition-colors"
                  aria-label="Next patient story"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
