import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  size = 'md',
  showSubtitle = true 
}) => {
  const isLight = variant === 'light'; // Light text for dark background
  const textColor = isLight ? 'text-[#F4F0E6]' : 'text-[#111110]';
  const subColor = isLight ? 'text-[#B7A47A]' : 'text-[#8C7B54]';
  const dividerColor = isLight ? 'bg-[#B7A47A]' : 'bg-[#B7A47A]';

  const scale = {
    sm: {
      monogram: 'text-2xl',
      divider: 'h-6',
      title: 'text-sm tracking-[0.25em]',
      subtitle: 'text-[9px] tracking-[0.35em]',
      spacing: 'space-x-1.5'
    },
    md: {
      monogram: 'text-3xl',
      divider: 'h-8',
      title: 'text-base sm:text-lg tracking-[0.28em]',
      subtitle: 'text-[10px] tracking-[0.4em]',
      spacing: 'space-x-2'
    },
    lg: {
      monogram: 'text-5xl',
      divider: 'h-12',
      title: 'text-2xl sm:text-3xl tracking-[0.3em]',
      subtitle: 'text-xs sm:text-sm tracking-[0.45em]',
      spacing: 'space-x-3'
    }
  }[size];

  return (
    <Link to="/" className="inline-flex items-center gap-3.5 group transition-transform duration-200 hover:opacity-95">
      {/* Official B | S Serif Monogram */}
      <div className="flex items-center justify-center font-serif font-bold select-none">
        <span className={`${scale.monogram} font-serif ${textColor} transition-colors group-hover:text-[#B7A47A]`}>
          B
        </span>
        <span className={`w-[1.5px] ${scale.divider} ${dividerColor} mx-1.5 opacity-80`} />
        <span className={`${scale.monogram} font-serif ${textColor} transition-colors group-hover:text-[#B7A47A]`}>
          S
        </span>
      </div>

      {/* Brand Tracked Wordmark */}
      <div className="flex flex-col select-none">
        <span className={`font-serif font-semibold uppercase ${scale.title} ${textColor} leading-tight`}>
          BLACK STONE
        </span>
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="h-[0.75px] flex-grow bg-[#B7A47A]/40" />
            <span className={`font-sans font-medium uppercase ${scale.subtitle} ${subColor}`}>
              SERVICES
            </span>
            <div className="h-[0.75px] flex-grow bg-[#B7A47A]/40" />
          </div>
        )}
      </div>
    </Link>
  );
};
