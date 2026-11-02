import React, { useState } from 'react';
import { IMAGES } from '../data/hospitalData';
import { Calendar, ArrowRight, Clock, ShieldCheck, PhoneCall, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FAF9F6] overflow-hidden">
      {/* Decorative subtle ambient architectural glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#DCE8E2]/40 blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#C6A66B]/10 blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-6">
            {/* Accreditation / Quality trust signal */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#123D40] uppercase">
              <span className="w-5 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
              <span>JCI Accredited Clinical Hospital</span>
              <span className="text-[#252C2D]/40" aria-hidden="true">·</span>
              <span className="text-[#252C2D]/70 font-normal">Excellence in Tertiary Medicine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-light text-[#123D40] tracking-tight leading-[1.2] text-balance">
              Exceptional Healthcare,{' '}
              <span className="font-semibold text-[#123D40] relative inline-block">
                Centered Around You.
                <span
                  className="absolute bottom-1 left-0 w-full h-[2px] bg-[#C6A66B]/50 rounded-full"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-base lg:text-[18px] text-[#252C2D]/80 leading-relaxed max-w-2xl font-normal">
              Discover compassionate care, advanced medical expertise, and personalized treatment
              designed around your well-being. At Aurelia, world-renowned clinicians combine pioneering
              diagnostics with hospitality-level comfort.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[15px] font-medium tracking-wide text-white bg-[#123D40] hover:bg-[#123D40]/90 active:scale-[0.99] transition-all rounded-md shadow-md hover:shadow-lg cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C6A66B]" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-medium tracking-wide text-[#123D40] bg-white hover:bg-[#DCE8E2]/30 border border-[#123D40]/20 transition-all rounded-md cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-[#123D40] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Key Clinical Indicators Strip */}
            <div className="pt-6 border-t border-[#252C2D]/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-2xl font-light text-[#123D40] tracking-tight">45+</div>
                <div className="text-xs font-medium text-[#252C2D]/70 uppercase tracking-wide mt-0.5">
                  Sub-Specialties
                </div>
              </div>
              <div className="border-l border-[#252C2D]/10 pl-4">
                <div className="text-2xl font-light text-[#123D40] tracking-tight">280+</div>
                <div className="text-xs font-medium text-[#252C2D]/70 uppercase tracking-wide mt-0.5">
                  Senior Clinicians
                </div>
              </div>
              <div className="border-l border-[#252C2D]/10 pl-4">
                <div className="text-2xl font-light text-[#123D40] tracking-tight">99.4%</div>
                <div className="text-xs font-medium text-[#252C2D]/70 uppercase tracking-wide mt-0.5">
                  Care Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Architectural Photography & Floating Panel */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/60 bg-[#DCE8E2]/20 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={IMAGES.hero}
                alt="Aurelia Medical Center grand sunlit atrium and patient welcome lobby"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'
                }`}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#123D40]/40 via-transparent to-transparent pointer-events-none" />

              {/* Outpatient Status Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded text-xs font-medium text-[#123D40] shadow-sm border border-[#252C2D]/10">
                Outpatient Clinics Open Today
              </div>
            </div>

            {/* Subtle Appointment Information Card Overlap */}
            <div className="mt-4 sm:-mt-10 sm:ml-6 relative z-10 bg-white/95 backdrop-blur-md p-5 rounded-lg border border-[#C6A66B]/30 shadow-xl max-w-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded bg-[#FAF9F6] border border-[#DCE8E2] text-[#123D40] shrink-0">
                  <Clock className="w-5 h-5 text-[#C6A66B]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#123D40]">Rapid Consultation Access</h4>
                  <p className="text-xs text-[#252C2D]/75 mt-0.5 leading-relaxed">
                    Same-day outpatient slots available for urgent non-emergency medical evaluations.
                  </p>
                  <div className="flex items-center gap-4 mt-2.5 text-[11px] font-medium text-[#123D40]">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C6A66B]" />
                      Direct Specialist Triage
                    </span>
                    <span className="text-[#C6A66B] font-semibold">24/7 ER on standby</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
