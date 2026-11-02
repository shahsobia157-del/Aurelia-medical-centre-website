import React, { useState } from 'react';
import { IMAGES } from '../data/hospitalData';
import { Heart, Home, MessageSquare, CalendarClock, Shield, Sparkles } from 'lucide-react';

interface PatientExperienceProps {
  onScheduleTour?: () => void;
  onBookAppointment: () => void;
}

export const PatientExperience: React.FC<PatientExperienceProps> = ({
  onScheduleTour,
  onBookAppointment,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const pillars = [
    {
      title: 'Patient-Focused Care',
      desc: 'Clinical protocols honoring personal preferences, individual privacy, and supportive emotional well-being from arrival through discharge.',
      icon: Heart,
    },
    {
      title: 'Comfortable Facilities',
      desc: 'Serene single-occupancy suites with panoramic natural garden vistas, acoustic dampening, and comfortable accommodations for loved ones.',
      icon: Home,
    },
    {
      title: 'Clear Communication',
      desc: 'Dedicated patient navigators, unhurried specialist consultations, and clear digital care summaries ensuring complete clarity at each milestone.',
      icon: MessageSquare,
    },
    {
      title: 'Convenient Scheduling',
      desc: 'Streamlined appointment booking, rapid diagnostic turnaround, and coordinated multidisciplinary visits scheduled in a single day.',
      icon: CalendarClock,
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      {/* Subtle gold decorative flourish */}
      <div
        className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-[#C6A66B]/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Authentic Inpatient Suite Photograph */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src={IMAGES.patientExperience}
                alt="Comfortable private inpatient recovery room overlooking tranquility garden at Aurelia"
                className={`w-full aspect-[4/3] object-cover transition-all duration-700 ${
                  imageLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'
                }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />

              {/* Inset ambient badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-lg border border-[#C6A66B]/30 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#DCE8E2]/50 flex items-center justify-center text-[#123D40] shrink-0">
                    <Sparkles className="w-5 h-5 text-[#C6A66B]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#123D40] uppercase tracking-wider">
                      Executive Inpatient Suite
                    </h4>
                    <p className="text-xs text-[#252C2D]/75 mt-0.5">
                      Private garden terrace, acoustic insulation, circadian lighting, and dedicated family daybed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Four Core Pillars */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase">
              <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
              <span>Dignity & Comfort</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight leading-snug">
              A Healing Environment Crafted for Calm and Dignity
            </h2>
            <div className="w-12 h-0.5 bg-[#C6A66B]" aria-hidden="true" />

            <p className="text-base text-[#252C2D]/80 leading-relaxed font-normal">
              Hospitalization should never feel sterile or impersonal. At Aurelia Medical Center, we
              harmonize hospital-grade safety with hospitality-grade attentiveness, ensuring every
              patient and their family feels deeply supported throughout their recovery journey.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-lg bg-white border border-[#252C2D]/6 shadow-xs hover:border-[#C6A66B]/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded bg-[#FAF9F6] text-[#123D40]">
                        <IconComp className="w-4 h-4 text-[#C6A66B]" />
                      </div>
                      <h3 className="text-sm font-semibold text-[#123D40]">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-[#252C2D]/75 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 flex items-center gap-4">
              <button
                onClick={onBookAppointment}
                className="px-6 py-3 text-xs font-semibold text-white bg-[#123D40] hover:bg-[#123D40]/90 rounded transition-all shadow-sm cursor-pointer"
              >
                Plan Your Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
