import React from 'react';
import { Department } from '../types';
import { DEPARTMENTS } from '../data/hospitalData';
import {
  HeartPulse,
  Brain,
  Activity,
  Baby,
  Sparkles,
  Users,
  ShieldCheck,
  Ambulance,
  ArrowRight,
} from 'lucide-react';

interface DepartmentsProps {
  onSelectDepartment: (department: Department) => void;
  onBookDepartment: (departmentId: string) => void;
}

export const Departments: React.FC<DepartmentsProps> = ({
  onSelectDepartment,
  onBookDepartment,
}) => {
  // Map icon names to Lucide icon components
  const renderIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-[#123D40] group-hover:text-[#C6A66B] transition-colors' };
    switch (name) {
      case 'HeartPulse':
        return <HeartPulse {...props} />;
      case 'Brain':
        return <Brain {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Baby':
        return <Baby {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Users':
        return <Users {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Ambulance':
        return <Ambulance {...props} />;
      default:
        return <Activity {...props} />;
    }
  };

  return (
    <section id="departments" className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C6A66B] uppercase mb-2">
            <span className="w-4 h-px bg-[#C6A66B] inline-block" aria-hidden="true" />
            <span>Centers of Clinical Excellence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-light text-[#123D40] tracking-tight">
            Specialized Medical Departments
          </h2>
          <div className="w-12 h-0.5 bg-[#C6A66B] mx-auto mt-3 mb-4" aria-hidden="true" />
          <p className="text-base text-[#252C2D]/75 leading-relaxed">
            Our multidisciplinary clinics integrate precision diagnostics, certified medical leadership,
            and compassionate bedside care across all core specialties.
          </p>
        </div>

        {/* 8 Department Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              className="group bg-white rounded-lg p-6 border border-[#252C2D]/8 hover:border-[#C6A66B]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Department Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#FAF9F6] border border-[#DCE8E2] flex items-center justify-center mb-5 group-hover:bg-[#123D40]/5 transition-colors">
                  {renderIcon(dept.iconName)}
                </div>

                {/* Department Name */}
                <h3 className="text-lg font-semibold text-[#123D40] tracking-tight mb-2.5">
                  {dept.name}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#252C2D]/75 leading-relaxed mb-4">
                  {dept.shortDescription}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#252C2D]/5 flex items-center justify-between">
                <button
                  onClick={() => onSelectDepartment(dept)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123D40] group-hover:text-[#C6A66B] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onBookDepartment(dept.id)}
                  className="text-[11px] font-medium text-[#252C2D]/60 hover:text-[#123D40] underline underline-offset-4 cursor-pointer"
                >
                  Book Clinic
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
