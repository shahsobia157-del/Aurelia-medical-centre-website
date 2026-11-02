import React, { useState } from 'react';
import { MedicalService } from '../types';
import { SERVICES } from '../data/hospitalData';
import {
  ScanLine,
  FlaskConical,
  HeartHandshake,
  Scissors,
  Stethoscope,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle,
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: MedicalService) => void;
  onBookService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onBookService }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#C6A66B]' };
    switch (iconName) {
      case 'ScanLine':
        return <ScanLine {...props} />;
      case 'FlaskConical':
        return <FlaskConical {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Scissors':
        return <Scissors {...props} />;
      case 'Stethoscope':
        return <Stethoscope {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      default:
        return <Stethoscope {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase mb-2">
            <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
            <span>Comprehensive Clinical Care</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight">
            Advanced Medical Services
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A66B] mx-auto mt-3 mb-4" aria-hidden="true" />
          <p className="text-base text-[#252C2D]/75 leading-relaxed">
            Integrating continuous technological innovation with compassionate care across diagnostic,
            interventional, and therapeutic specialties.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => {
            const hasError = imageErrors[srv.id];

            return (
              <div
                key={srv.id}
                className="bg-white rounded-lg overflow-hidden border border-[#252C2D]/8 hover:border-[#C6A66B]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Photography or Elegant Illustrated Header */}
                  <div className="relative aspect-[16/9] bg-[#123D40]/5 overflow-hidden">
                    {srv.image && !hasError ? (
                      <img
                        src={srv.image}
                        alt={srv.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                        onError={() => setImageErrors((prev) => ({ ...prev, [srv.id]: true }))}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#123D40]/10 to-[#DCE8E2]/40">
                        {renderIcon(srv.iconName)}
                      </div>
                    )}

                    <div className="absolute top-3 right-3 bg-[#123D40]/90 backdrop-blur-sm p-2 rounded-md shadow-sm">
                      {renderIcon(srv.iconName)}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-[#123D40] tracking-tight mb-2">
                      {srv.title}
                    </h3>

                    <p className="text-xs text-[#252C2D]/75 leading-relaxed mb-4">
                      {srv.description}
                    </p>

                    {/* Key Capabilities */}
                    <div className="space-y-2 mb-4 pt-2 border-t border-[#252C2D]/5">
                      {srv.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#252C2D]/80">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C6A66B] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] text-[#252C2D]/60 pt-2">
                      <Clock className="w-3 h-3 text-[#123D40]" />
                      <span>{srv.turnaroundTime}</span>
                    </div>
                  </div>
                </div>

                {/* Clear Action Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onBookService(srv.title)}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-[#123D40] hover:text-white bg-[#FAF9F6] hover:bg-[#123D40] border border-[#123D40]/20 rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Schedule / Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
