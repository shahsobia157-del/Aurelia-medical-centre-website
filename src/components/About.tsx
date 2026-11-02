import React, { useState } from 'react';
import { IMAGES, STATS } from '../data/hospitalData';
import { HeartHandshake, UserCheck, Building2, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const highlights = [
    {
      title: 'Patient-First Approach',
      description:
        'Every clinical pathway is built around personal dignity, emotional comfort, transparent communication, and individualized family care planning.',
      icon: HeartHandshake,
    },
    {
      title: 'Experienced Medical Professionals',
      description:
        'Over 280 board-certified physicians, fellowship-trained surgeons, and specialized clinical nurse practitioners leading evidence-based care.',
      icon: UserCheck,
    },
    {
      title: 'Modern Medical Facilities',
      description:
        'Equipped with 3T MRI systems, robotic surgical theaters, zero-latency emergency conduits, and private restorative recovery suites.',
      icon: Building2,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Kicker */}
        <div className="flex items-center gap-2 mb-3 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase">
          <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
          <span>About Aurelia Medical Center</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight leading-snug">
            Care That Goes Beyond Medicine
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A66B] mt-3" aria-hidden="true" />
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column 1: Editorial Photography with Subtle Decorative Accent */}
          <div className="lg:col-span-6 relative">
            {/* Subtle decorative gold framing accent */}
            <div
              className="absolute -top-3 -left-3 w-32 h-32 border-t-2 border-l-2 border-[#C6A66B]/50 rounded-tl-xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-3 -right-3 w-32 h-32 border-b-2 border-r-2 border-[#123D40]/30 rounded-br-xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3] bg-[#FAF9F6]">
              <img
                src={IMAGES.about}
                alt="Aurelia senior medical faculty conferring on patient treatment protocols"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'scale-100 blur-0' : 'scale-105 blur-sm'
                }`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />

              {/* Quiet caption badge */}
              <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded border border-[#252C2D]/10 text-xs text-[#252C2D] flex items-center justify-between">
                <span className="font-medium text-[#123D40]">Clinical Excellence Council</span>
                <span className="text-[#252C2D]/60 text-[11px]">Est. 2004</span>
              </div>
            </div>
          </div>

          {/* Column 2: Editorial Prose & Three Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-[17px] text-[#252C2D]/85 leading-relaxed font-normal">
              At Aurelia Medical Center, our foundation is built upon an enduring principle: superior
              healthcare flourishes when advanced clinical science is delivered with genuine human
              warmth.
            </p>
            <p className="text-base text-[#252C2D]/75 leading-relaxed">
              From our accredited quaternary care units to our restorative private suites, every detail
              is engineered to eliminate anxiety and foster recovery. We unite leading medical minds
              across 45 disciplines, ensuring that your care is collaborative, continuous, and focused
              entirely on your well-being.
            </p>

            {/* Three Elegant Highlights */}
            <div className="space-y-4 pt-3">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-lg bg-[#FAF9F6] border border-[#252C2D]/5 hover:border-[#C6A66B]/50 transition-colors"
                  >
                    <div className="p-2.5 rounded bg-white text-[#123D40] shadow-xs border border-[#DCE8E2] shrink-0">
                      <IconComponent className="w-5 h-5 text-[#123D40]" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#123D40]">{item.title}</h3>
                      <p className="text-sm text-[#252C2D]/75 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Animated Statistics Strip */}
        <div className="mt-20 pt-10 border-t border-[#252C2D]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-light text-[#123D40] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#252C2D]">{stat.label}</div>
                <div className="text-xs text-[#252C2D]/60">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
