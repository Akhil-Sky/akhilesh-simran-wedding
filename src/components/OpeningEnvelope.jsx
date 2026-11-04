import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { GaneshaIcon } from './DecorativeElements';

export const OpeningEnvelope = ({ onOpen, weddingData }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);

    // Trigger celebratory flower petal / gold confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#962632', '#FFF3C4', '#F1EDE4', '#AA8822']
      });
    } catch (e) {
      console.warn('Confetti error', e);
    }

    // Call onOpen so parent starts audio and unlocks scroll
    if (onOpen) {
      onOpen();
    }

    // After animation completes, remove overlay from view
    setTimeout(() => {
      setIsDismissed(true);
    }, 1200);
  };

  if (isDismissed) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1A0A0D]/85 backdrop-blur-md transition-opacity duration-1000 ${
        isOpening ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Floating Petals in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        {[...Array(12)].map((_, i) => (
          <span 
            key={i} 
            className="petal text-[#D4AF37] text-lg select-none"
            style={{
              left: `${(i * 9) + 4}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${7 + (i % 5)}s`
            }}
          >
            🌸
          </span>
        ))}
      </div>

      {/* Main Envelope Card Container */}
      <div 
        className={`relative w-[92%] max-w-[440px] transition-all duration-1000 transform ${
          isOpening ? 'scale-110 translate-y-8 opacity-0' : 'scale-100 translate-y-0 opacity-100'
        }`}
      >
        {/* Envelope Outer Box */}
        <div className="relative bg-[#F1EDE4] rounded-2xl shadow-2xl p-6 sm:p-8 text-center border-2 border-[#D4AF37]/50 overflow-hidden">
          
          {/* Subtle Arch Texture / Ruby Card Header */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#721B24] via-[#962632] to-[#721B24]" />
          
          {/* Ganesha Invocation */}
          <div className="flex flex-col items-center justify-center pt-2">
            <GaneshaIcon className="w-14 h-14 text-[#962632]" />
            <p className="font-serif text-xs tracking-[0.25em] text-[#962632] font-semibold mt-1">
              || श्री गणेशाय नमः ||
            </p>
          </div>

          {/* Invitation Intro */}
          <div className="mt-4 mb-2">
            <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#654123]">
              The Wedding Celebration of
            </p>
          </div>

          {/* Couple Names */}
          <div className="py-2">
            <h1 className="font-script text-4xl sm:text-5xl text-[#962632] leading-tight">
              {weddingData.groom.firstName}
            </h1>
            <div className="flex items-center justify-center my-1">
              <span className="h-[1px] w-12 bg-[#D4AF37]/60"></span>
              <span className="font-script text-2xl text-[#D4AF37] px-3">&</span>
              <span className="h-[1px] w-12 bg-[#D4AF37]/60"></span>
            </div>
            <h1 className="font-script text-4xl sm:text-5xl text-[#962632] leading-tight">
              {weddingData.bride.firstName}
            </h1>
          </div>

          {/* Date & Location Snapshot */}
          <div className="mt-2 text-xs font-serif tracking-widest text-[#654123] uppercase">
            <p className="font-semibold text-[#962632] text-sm">24 November 2026</p>
            <p className="mt-1 text-[11px] text-[#4D453D]">Valentine Motel & Resort, New Delhi</p>
          </div>

          {/* Wax Seal / Tap to Open Button */}
          <div className="mt-6 flex flex-col items-center">
            <button
              onClick={handleOpenInvitation}
              className="group relative flex flex-col items-center focus:outline-none transition-transform hover:scale-105 active:scale-95"
              aria-label="Open Wedding Invitation"
            >
              {/* Wax Seal Disc */}
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#AA8822] via-[#D4AF37] to-[#7B1F2A] p-[3px] shadow-xl animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#962632] to-[#721B24] flex items-center justify-center border border-[#F3E5AB]/40 shadow-inner">
                  <div className="text-center">
                    <span className="font-script text-2xl text-[#F3E5AB] font-bold block leading-none">
                      A & S
                    </span>
                    <span className="text-[9px] tracking-widest text-[#F3E5AB] uppercase block mt-1 font-serif">
                      OPEN
                    </span>
                  </div>
                </div>
              </div>

              {/* Pulsing Label */}
              <span className="mt-3 font-serif text-xs uppercase tracking-[0.25em] text-[#962632] font-semibold group-hover:text-[#AA8822] transition-colors">
                ✨ Tap to Open Invitation ✨
              </span>
            </button>
          </div>

          {/* Decorative Bottom Flourish */}
          <div className="mt-4 pt-3 border-t border-[#D4AF37]/30 text-center">
            <p className="text-[11px] font-serif text-[#654123] italic">
              "Together with our families, we request the honor of your presence."
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
