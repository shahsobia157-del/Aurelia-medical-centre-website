import React from 'react';
import { AureliaLogo } from './AureliaLogo';
import { DEPARTMENTS } from '../data/hospitalData';
import {
  MapPin,
  PhoneCall,
  Mail,
  Shield,
  Heart,
  ExternalLink,
  ChevronRight,
  ArrowUp,
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenBooking,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123D40] text-white pt-16 pb-10 border-t border-[#C6A66B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Description (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <AureliaLogo variant="light" showTagline={true} />
            <p className="text-xs text-white/75 leading-relaxed pt-2 max-w-sm font-light">
              Aurelia Medical Center is a premier international healthcare institution dedicated to
              compassionate clinical care, pioneering robotic surgery, and individualized patient wellness.
            </p>

            <div className="pt-2 text-xs text-[#C6A66B] flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>JCI Accredited & ISO 9001 Certified</span>
            </div>

            {/* Quick emergency callout */}
            <div className="pt-2">
              <div className="inline-block p-3 rounded-lg bg-white/5 border border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-[#C6A66B]">
                  24/7 Acute Emergency Triage
                </div>
                <a
                  href="tel:+18004587200"
                  className="text-sm font-bold text-white hover:text-[#C6A66B] transition-colors"
                >
                  +1 (800) 458-7200
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C6A66B]">
              Hospital Links
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <a href="#about" className="hover:text-[#C6A66B] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C6A66B]" />
                  <span>About Aurelia</span>
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-[#C6A66B] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C6A66B]" />
                  <span>Medical Specialists</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C6A66B] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C6A66B]" />
                  <span>Clinical Services</span>
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#C6A66B] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C6A66B]" />
                  <span>Campus Facilities</span>
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-[#C6A66B] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C6A66B]" />
                  <span>Patient Resources</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C6A66B] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 text-[#C6A66B]" />
                  <span>Campus Map & Visit</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Core Departments (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C6A66B]">
              Key Departments
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-white/80">
              {DEPARTMENTS.slice(0, 8).map((dept) => (
                <a
                  key={dept.id}
                  href="#departments"
                  className="hover:text-[#C6A66B] transition-colors truncate"
                >
                  {dept.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details & Hours (Col 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#C6A66B]">
              Hospital Location
            </h4>
            <ul className="space-y-2.5 text-xs text-white/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <span>450 Aurelia Way, Medical District, Metropolis</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#C6A66B] shrink-0" />
                <span>+1 (800) 458-7201 (Outpatient)</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C6A66B] shrink-0" />
                <span>concierge@aureliamedical.org</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#123D40] bg-[#C6A66B] hover:bg-[#C6A66B]/90 rounded transition-colors text-center cursor-pointer shadow"
              >
                Book Consultation Online
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal, Socials, Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Aurelia Medical Center. All rights reserved.</span>
            <span>·</span>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Privacy Policy & HIPAA
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
            >
              Terms & Patient Rights
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-white/80 hover:text-[#C6A66B] transition-colors p-1 cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
