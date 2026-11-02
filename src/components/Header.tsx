import React, { useState, useEffect } from 'react';
import { AureliaLogo } from './AureliaLogo';
import { Menu, X, PhoneCall, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Departments', href: '#departments' },
    { label: 'Specialists', href: '#doctors' },
    { label: 'Services', href: '#services' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#252C2D]/10 py-3.5 shadow-sm'
            : 'bg-[#FAF9F6]/90 backdrop-blur-sm border-b border-[#252C2D]/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark & Custom Logo */}
            <a
              href="#"
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123D40] rounded-sm shrink-0"
              aria-label="Aurelia Medical Center Home"
            >
              <AureliaLogo variant="dark" />
            </a>

            {/* Zone 2: Navigation Links (Single-line, quiet hover underline) */}
            <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#252C2D]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="whitespace-nowrap shrink-0 transition-colors duration-200 text-[#252C2D]/80 hover:text-[#123D40] hover:underline underline-offset-8 decoration-[#C6A66B] decoration-2"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden sm:flex items-center gap-4 shrink-0">
              <a
                href="tel:+18004587200"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold tracking-wider text-[#123D40] hover:text-[#C6A66B] transition-colors"
                title="24/7 Clinical Emergency Line"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>24/7 HELP: (800) 458-7200</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide text-white bg-[#123D40] hover:bg-[#123D40]/90 active:scale-[0.98] transition-all rounded-md shadow-sm border border-[#123D40]/20 whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C6A66B]" />
                <span>Book an Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3 py-1.5 text-xs font-medium text-white bg-[#123D40] rounded hover:bg-[#123D40]/90"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#252C2D] hover:text-[#123D40] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#123D40]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#252C2D]/50 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FAF9F6] shadow-2xl p-6 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#252C2D]/10">
                <AureliaLogo variant="dark" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#252C2D] hover:text-[#123D40] rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-medium text-[#252C2D] hover:text-[#123D40] py-1 border-b border-[#252C2D]/5 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#252C2D]/10 space-y-4">
              <a
                href="tel:+18004587200"
                className="flex items-center gap-3 text-sm font-semibold text-[#123D40] p-3 rounded-lg bg-[#DCE8E2]/40"
              >
                <PhoneCall className="w-4 h-4 text-[#C6A66B]" />
                <div>
                  <div className="text-[11px] text-[#252C2D]/70 uppercase tracking-wider">Emergency Hotline</div>
                  <div>+1 (800) 458-7200</div>
                </div>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#123D40] rounded-md shadow hover:bg-[#123D40]/90 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#C6A66B]" />
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
