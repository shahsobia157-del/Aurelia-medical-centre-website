import React, { useState } from 'react';
import { Doctor } from '../types';
import { DOCTORS } from '../data/hospitalData';
import { Calendar, User, Clock, CheckCircle } from 'lucide-react';

interface SpecialistsProps {
  onSelectDoctor: (doctor: Doctor) => void;
  onBookDoctor: (doctor: Doctor) => void;
}

export const Specialists: React.FC<SpecialistsProps> = ({
  onSelectDoctor,
  onBookDoctor,
}) => {
  const [selectedDeptFilter, setSelectedDeptFilter] = useState<string>('all');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const filteredDoctors =
    selectedDeptFilter === 'all'
      ? DOCTORS
      : DOCTORS.filter((d) => d.departmentId === selectedDeptFilter);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white border-t border-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase mb-2">
              <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
              <span>Medical Faculty & Leaders</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight">
              Our Medical Specialists
            </h2>
            <div className="w-12 h-0.5 bg-[#C6A66B] mt-3" aria-hidden="true" />
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'all', label: 'All Specialists' },
              { id: 'cardiology', label: 'Cardiology' },
              { id: 'neurology', label: 'Neurology' },
              { id: 'orthopedics', label: 'Orthopedics' },
              { id: 'pediatrics', label: 'Pediatrics' },
              { id: 'dermatology', label: 'Dermatology' },
              { id: 'oncology', label: 'Oncology' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDeptFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer ${
                  selectedDeptFilter === tab.id
                    ? 'bg-[#123D40] text-white shadow-xs'
                    : 'bg-[#FAF9F6] text-[#252C2D]/70 hover:text-[#123D40] border border-[#252C2D]/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => {
            const hasError = imageErrors[doc.id];

            return (
              <div
                key={doc.id}
                className="bg-[#FAF9F6] rounded-lg overflow-hidden border border-[#252C2D]/8 hover:border-[#C6A66B]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Doctor Portrait with Resilient Fallback */}
                  <div className="relative aspect-[3/4] bg-[#DCE8E2]/30 overflow-hidden">
                    {!hasError ? (
                      <img
                        src={doc.image}
                        alt={doc.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                        onError={() => handleImageError(doc.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAF9F6] to-[#DCE8E2]/60">
                        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 text-[#123D40]">
                          <User className="w-8 h-8" />
                        </div>
                        <h4 className="text-sm font-semibold text-[#123D40]">{doc.name}</h4>
                        <p className="text-xs text-[#252C2D]/70 mt-1">{doc.specialty}</p>
                      </div>
                    )}
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6 pb-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#C6A66B] mb-1">
                      {doc.specialty}
                    </div>
                    <h3 className="text-lg font-semibold text-[#123D40] tracking-tight">
                      {doc.name}
                    </h3>
                    <div className="text-xs text-[#252C2D]/70 mt-0.5 font-normal">
                      {doc.designation}
                    </div>

                    <p className="text-xs text-[#252C2D]/75 leading-relaxed mt-3 line-clamp-3">
                      {doc.biography}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#252C2D]/60 mt-4 pt-3 border-t border-[#252C2D]/5">
                      <Clock className="w-3.5 h-3.5 text-[#C6A66B]" />
                      <span>{doc.clinicHours}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onSelectDoctor(doc)}
                    className="w-full py-2 px-3 text-xs font-semibold text-[#123D40] bg-white hover:bg-[#DCE8E2]/30 border border-[#123D40]/20 rounded transition-colors text-center cursor-pointer"
                  >
                    View Profile
                  </button>

                  <button
                    onClick={() => onBookDoctor(doc)}
                    className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#123D40] hover:bg-[#123D40]/90 rounded transition-colors text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#C6A66B]" />
                    <span>Book Consult</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Profile Disclosure */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#252C2D]/50 italic">
            * Sample clinician profiles displayed for demonstration of hospital faculty credentials, clinical schedule, and online triage routing.
          </p>
        </div>
      </div>
    </section>
  );
};
