import React, { useState } from 'react';
import { Facility } from '../types';
import { FACILITIES } from '../data/hospitalData';
import { Maximize2, Sparkles, Building } from 'lucide-react';

interface FacilitiesGalleryProps {
  onOpenLightbox: (facility: Facility) => void;
}

export const FacilitiesGallery: React.FC<FacilitiesGalleryProps> = ({ onOpenLightbox }) => {
  const [filter, setFilter] = useState<'all' | 'clinical' | 'inpatient' | 'diagnostics' | 'wellness'>(
    'all'
  );
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredFacilities =
    filter === 'all' ? FACILITIES : FACILITIES.filter((f) => f.category === filter);

  const categories = [
    { id: 'all', label: 'All Spaces' },
    { id: 'inpatient', label: 'Inpatient Suites' },
    { id: 'clinical', label: 'Surgical & Clinical' },
    { id: 'diagnostics', label: 'Diagnostic Center' },
    { id: 'wellness', label: 'Lounge & Atrium' },
  ];

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-white border-t border-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase mb-2">
              <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
              <span>Campus Architecture & Healing Spaces</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight">
              Modern Facilities Gallery
            </h2>
            <div className="w-12 h-0.5 bg-[#C6A66B] mt-3" aria-hidden="true" />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                  filter === cat.id
                    ? 'bg-[#123D40] text-white shadow-xs'
                    : 'bg-[#FAF9F6] text-[#252C2D]/70 hover:text-[#123D40] border border-[#252C2D]/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => {
            const hasError = imageErrors[fac.id];

            return (
              <div
                key={fac.id}
                onClick={() => onOpenLightbox(fac)}
                className="group relative rounded-lg overflow-hidden border border-[#252C2D]/8 bg-[#FAF9F6] aspect-[4/3] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
              >
                {!hasError ? (
                  <img
                    src={fac.image}
                    alt={fac.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={() => setImageErrors((prev) => ({ ...prev, [fac.id]: true }))}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#DCE8E2]/30 text-[#123D40]">
                    <Building className="w-10 h-10 mb-2 opacity-50" />
                    <span className="font-semibold text-sm">{fac.title}</span>
                  </div>
                )}

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#123D40]/90 via-[#123D40]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-[#C6A66B]">
                      {fac.category}
                    </span>
                    <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <h3 className="text-base font-medium tracking-tight mt-1 text-white">
                    {fac.title}
                  </h3>

                  <p className="text-xs text-white/80 mt-1 line-clamp-2 leading-relaxed font-light">
                    {fac.description}
                  </p>

                  <div className="text-[10px] text-white/60 mt-2 font-mono truncate">
                    {fac.specs}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
