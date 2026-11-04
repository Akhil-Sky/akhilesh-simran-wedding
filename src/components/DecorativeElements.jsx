import React from 'react';

// Lord Ganesha Auspicious Icon SVG
export const GaneshaIcon = ({ className = "w-16 h-16 text-[#D4AF37]" }) => (
  <svg viewBox="0 0 100 100" fill="currentColor" className={className} aria-label="Lord Ganesha Motif">
    <path d="M50 8 C40 8 32 16 32 26 C32 30 34 34 37 37 C34 40 32 45 32 50 C32 54 34 58 37 60 C32 64 28 70 28 78 C28 85 34 91 42 91 L58 91 C66 91 72 85 72 78 C72 70 68 64 63 60 C66 58 68 54 68 50 C68 45 66 40 63 37 C66 34 68 30 68 26 C68 16 60 8 50 8 Z M50 14 C56 14 62 19 62 26 C62 31 58 35 53 36 L53 38 C56 39 59 42 60 45 C58 45 56 46 54 47 C52 44 49 42 46 42 C43 42 40 44 38 47 C37 46 35 45 33 45 C34 42 37 39 40 38 L40 36 C35 35 31 31 31 26 C31 19 37 14 50 14 Z M50 20 C48 20 46 22 46 24 C46 26 48 28 50 28 C52 28 54 26 54 24 C54 22 52 20 50 20 Z M46 45 C48 45 50 46 51 48 C51 51 49 53 47 54 C46 57 46 61 47 64 C49 69 53 73 57 73 C60 73 62 70 62 67 C62 65 61 64 59 64 C58 64 57 65 57 66 C57 67 58 68 58 68 C58 69 57 70 56 70 C53 70 50 67 49 63 C48 59 48 55 49 52 C51 51 52 50 52 48 C52 47 51 46 50 46 C48 46 47 47 46 48 L44 47 C44 46 45 45 46 45 Z" />
  </svg>
);

// Ornate Indian Floral Corner Motif
export const FloralCorner = ({ className = "", rotate = 0 }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={`w-14 h-14 text-[#D4AF37] opacity-80 pointer-events-none ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M0,0 Q30,5 50,25 Q65,40 70,70 Q75,40 100,0" />
    <path d="M0,0 Q5,30 25,50 Q40,65 70,70" />
    <circle cx="28" cy="28" r="4" fill="currentColor" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <path d="M12,12 Q30,18 40,40" strokeWidth="1" strokeDasharray="2,2" />
    <path d="M5,40 Q20,30 40,40 Q30,20 40,5" strokeWidth="1" />
  </svg>
);

// Elegant Gold Divider with Central Flower / Mandala
export const GoldFlourishDivider = ({ text = "", dark = false }) => (
  <div className="flex items-center justify-center my-6 space-x-3 w-full max-w-md mx-auto select-none">
    <div className={`h-[1px] flex-1 ${dark ? 'bg-gradient-to-r from-transparent to-[#D4AF37]' : 'bg-gradient-to-r from-transparent to-[#962632]'}`}></div>
    <div className="flex items-center space-x-2">
      <span className="text-[#D4AF37] text-xs">◆</span>
      {text ? (
        <span className={`font-serif text-sm tracking-[0.25em] uppercase px-2 font-medium ${dark ? 'text-[#FAF8F5]' : 'text-[#654123]'}`}>
          {text}
        </span>
      ) : (
        <span className="text-[#D4AF37] text-lg">🪷</span>
      )}
      <span className="text-[#D4AF37] text-xs">◆</span>
    </div>
    <div className={`h-[1px] flex-1 ${dark ? 'bg-gradient-to-l from-transparent to-[#D4AF37]' : 'bg-gradient-to-l from-transparent to-[#962632]'}`}></div>
  </div>
);

// Auspicious Kalash SVG Icon
export const KalashIcon = ({ className = "w-10 h-10 text-[#D4AF37]" }) => (
  <svg viewBox="0 0 64 64" fill="currentColor" className={className}>
    <path d="M32 6 C28 6 26 10 26 14 C26 18 32 24 32 24 C32 24 38 18 38 14 C38 10 36 6 32 6 Z" opacity="0.9" />
    <path d="M22 18 C18 18 16 22 16 25 C16 28 22 32 22 32 C22 32 26 28 26 25 C26 22 24 18 22 18 Z" opacity="0.7" />
    <path d="M42 18 C46 18 48 22 48 25 C48 28 42 32 42 32 C42 32 38 28 38 25 C38 22 40 18 42 18 Z" opacity="0.7" />
    <path d="M20 28 L44 28 C46 28 48 30 47 32 L44 38 C48 42 50 48 48 54 C46 58 40 60 32 60 C24 60 18 58 16 54 C14 48 16 42 20 38 L17 32 C16 30 18 28 20 28 Z" />
    <ellipse cx="32" cy="46" rx="8" ry="4" fill="#962632" />
  </svg>
);
