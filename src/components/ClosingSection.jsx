import React from 'react';
import { GaneshaIcon, GoldFlourishDivider } from './DecorativeElements';
import { ArrowUp, Heart } from 'lucide-react';

export const ClosingSection = ({ weddingData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#721B24] text-white pt-16 pb-12 px-4 overflow-hidden border-t-4 border-[#D4AF37]">
      
      {/* Background Subtle Shimmer */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Lord Ganesha Motif */}
        <div className="flex justify-center mb-4">
          <GaneshaIcon className="w-14 h-14 text-[#D4AF37] filter drop-shadow" />
        </div>

        <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#F3E5AB] font-semibold">
          Warm Regards & Best Compliments
        </p>

        {/* Final Auspicious Blessings Quote */}
        <div className="my-6 space-y-3">
          <h2 className="font-script text-4xl sm:text-6xl text-[#FAF8F5] gold-shimmer">
            We Look Forward To Welcoming You!
          </h2>
          <p className="font-serif text-sm sm:text-base text-[#F1EDE4] max-w-lg mx-auto italic leading-relaxed">
            "Your presence, prayers, and heartfelt blessings will illuminate our new journey of love, friendship, and togetherness."
          </p>
        </div>

        <GoldFlourishDivider dark={true} text="THE FAMILIES" />

        {/* Family and Couple Credits */}
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center max-w-xl mx-auto font-serif">
          
          <div className="bg-black/20 p-4 rounded-2xl border border-[#D4AF37]/30">
            <p className="text-xs uppercase tracking-widest text-[#F3E5AB] font-semibold">
              Groom's Parents
            </p>
            <p className="text-sm sm:text-base text-white font-medium mt-1">
              {weddingData.groom.parents}
            </p>
          </div>

          <div className="bg-black/20 p-4 rounded-2xl border border-[#D4AF37]/30">
            <p className="text-xs uppercase tracking-widest text-[#F3E5AB] font-semibold">
              Bride's Parents
            </p>
            <p className="text-sm sm:text-base text-white font-medium mt-1">
              {weddingData.bride.parents}
            </p>
          </div>

        </div>

        {/* Couple Signatures */}
        <div className="pt-4 pb-2">
          <p className="font-script text-4xl sm:text-5xl text-[#F3E5AB]">
            {weddingData.groom.firstName} & {weddingData.bride.firstName}
          </p>
          <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#F1EDE4] mt-2">
            24 November 2026 • New Delhi
          </p>
        </div>

        {/* Return to top */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#D4AF37]/50 text-xs font-serif uppercase tracking-widest text-[#F3E5AB] transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-[11px] font-sans text-[#F1EDE4]/60">
          <p>
            Made with love for {weddingData.groom.firstName} & {weddingData.bride.firstName} • Inspired by Aamantran Theme 5
          </p>
        </div>

      </div>
    </footer>
  );
};
