import React from 'react';
import { GaneshaIcon, FloralCorner } from './DecorativeElements';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

export const HeroSection = ({ weddingData }) => {
  const scrollToNext = () => {
    const el = document.getElementById('invitation-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-between pt-8 pb-10 px-4 ivory-texture-bg overflow-hidden border-b border-[#D4AF37]/30">
      
      {/* Decorative Floral Corners */}
      <FloralCorner className="absolute top-2 left-2" rotate={0} />
      <FloralCorner className="absolute top-2 right-2" rotate={90} />
      <FloralCorner className="absolute bottom-2 left-2" rotate={270} />
      <FloralCorner className="absolute bottom-2 right-2" rotate={180} />

      {/* Auspicious Ganesha Header */}
      <div className="flex flex-col items-center text-center mt-2 z-10">
        <GaneshaIcon className="w-16 h-16 text-[#962632] filter drop-shadow" />
        <p className="font-serif text-sm tracking-[0.3em] text-[#962632] font-semibold mt-1">
          || श्री गणेशाय नमः ||
        </p>
        <p className="font-serif text-xs text-[#654123] tracking-widest uppercase mt-0.5">
          Shubh Vivah Invitation
        </p>
      </div>

      {/* Main Arch Frame - Aamantran Theme 5 Signature Ruby Arch */}
      <div className="relative my-6 w-full max-w-lg z-10">
        <div className="relative bg-[#962632] text-white mughal-arch p-8 sm:p-12 shadow-2xl border-4 border-[#D4AF37] text-center overflow-hidden">
          
          {/* Inner Golden Border */}
          <div className="absolute inset-2 border border-[#D4AF37]/40 mughal-arch pointer-events-none" />

          {/* Background subtle mandala pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#D4AF37_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

          {/* Save the Date badge */}
          <div className="inline-block px-4 py-1 rounded-full bg-[#721B24] border border-[#D4AF37]/50 mb-3 shadow">
            <span className="font-serif text-[11px] uppercase tracking-[0.25em] text-[#F3E5AB]">
              Save Our Date
            </span>
          </div>

          {/* Invitation Intro */}
          <p className="font-serif text-sm text-[#F1EDE4] tracking-widest uppercase mb-2">
            We are getting married
          </p>

          {/* Couple Names */}
          <div className="py-2">
            <h1 className="font-script text-5xl sm:text-7xl text-[#FAF8F5] gold-shimmer leading-tight tracking-wide">
              {weddingData.groom.firstName}
            </h1>

            <div className="flex items-center justify-center my-2">
              <span className="h-[1px] w-16 bg-[#D4AF37]/70"></span>
              <span className="font-script text-3xl sm:text-4xl text-[#F3E5AB] px-4 font-normal">
                &
              </span>
              <span className="h-[1px] w-16 bg-[#D4AF37]/70"></span>
            </div>

            <h1 className="font-script text-5xl sm:text-7xl text-[#FAF8F5] gold-shimmer leading-tight tracking-wide">
              {weddingData.bride.firstName}
            </h1>
          </div>

          {/* Wedding Date Details */}
          <div className="mt-5 pt-4 border-t border-[#D4AF37]/40 flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-2 text-[#FAF8F5]">
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span className="font-serif text-base sm:text-lg tracking-wider font-medium text-[#F3E5AB]">
                {weddingData.formattedDate}
              </span>
            </div>
            
            <div className="flex items-center space-x-2 text-[#FAF8F5]/90 text-xs sm:text-sm">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-serif tracking-wide text-center">
                {weddingData.mainVenue.name}, New Delhi
              </span>
            </div>
          </div>

          {/* Hashtag */}
          <div className="mt-4">
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-[#F3E5AB]/90 font-medium">
              {weddingData.hashtag}
            </span>
          </div>

        </div>
      </div>

      {/* Scroll Down Cue */}
      <div className="flex flex-col items-center z-10 cursor-pointer group" onClick={scrollToNext}>
        <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#654123] group-hover:text-[#962632] transition-colors">
          Scroll to Explore
        </span>
        <ChevronDown className="w-5 h-5 text-[#962632] animate-bounce mt-1" />
      </div>

    </section>
  );
};
