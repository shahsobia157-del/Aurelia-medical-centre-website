import React from 'react';

interface AureliaLogoProps {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
  className?: string;
}

export const AureliaLogo: React.FC<AureliaLogoProps> = ({
  variant = 'dark',
  showTagline = false,
  className = '',
}) => {
  const isLight = variant === 'light';
  const primaryTextColor = isLight ? 'text-white' : 'text-[#123D40]';
  const secondaryTextColor = isLight ? 'text-[#FAF9F6]/80' : 'text-[#252C2D]/80';
  const goldColor = '#C6A66B';
  const tealColor = isLight ? '#FFFFFF' : '#123D40';

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Custom Medical Brand Icon: Cross + Heartbeat + Protective Golden Cadence */}
      <div className="relative w-10 h-10 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform transition-transform duration-300 hover:scale-105"
          aria-hidden="true"
        >
          {/* Subtle Outer Protective Ring / Golden Halo */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke={goldColor}
            strokeWidth="1.25"
            strokeDasharray="2 3"
            opacity="0.4"
          />
          
          {/* Elegant Circular Shield / Arc */}
          <path
            d="M 10 24 C 10 16.268 16.268 10 24 10 C 31.732 10 38 16.268 38 24 C 38 31.732 31.732 38 24 38"
            stroke={goldColor}
            strokeWidth="1.75"
            strokeLinecap="round"
          />

          {/* Minimalist Medical Cross Vertical Beam */}
          <rect
            x="22.25"
            y="14"
            width="3.5"
            height="20"
            rx="1.75"
            fill={tealColor}
            opacity="0.9"
          />

          {/* Minimalist Medical Cross Horizontal Beam */}
          <rect
            x="14"
            y="22.25"
            width="20"
            height="3.5"
            rx="1.75"
            fill={tealColor}
            opacity="0.9"
          />

          {/* Smooth Dynamic Heartbeat Line Intersecting with Heartbeat Pulse */}
          <path
            d="M 12 24 H 19 L 21.5 19 L 24 29 L 26.5 21 L 28.5 24 H 36"
            stroke={goldColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central Vital Sparkle Dot */}
          <circle
            cx="24"
            cy="24"
            r="1.8"
            fill={goldColor}
            className="animate-subtle-pulse"
          />
        </svg>
      </div>

      {/* Brand Wordmark & Refined Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-semibold tracking-[0.2em] text-[17px] leading-tight font-['Manrope'] ${primaryTextColor}`}
          >
            AURELIA
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full inline-block mb-0.5"
            style={{ backgroundColor: goldColor }}
            aria-hidden="true"
          />
        </div>
        <span
          className={`text-[9.5px] font-medium tracking-[0.26em] uppercase font-['Manrope'] ${secondaryTextColor}`}
        >
          MEDICAL CENTER
        </span>
        {showTagline && (
          <span className="text-[11px] italic tracking-wide text-[#C6A66B] mt-0.5 font-light font-['Manrope']">
            Exceptional Care. Extraordinary Lives.
          </span>
        )}
      </div>
    </div>
  );
};
