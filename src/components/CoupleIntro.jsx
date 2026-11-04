import React from 'react';
import { GoldFlourishDivider, FloralCorner } from './DecorativeElements';
import { Heart } from 'lucide-react';

export const CoupleIntro = ({ weddingData }) => {
  return (
    <section className="py-20 px-4 ivory-texture-bg relative border-b border-[#D4AF37]/30">
      
      {/* Background floral flourishes */}
      <FloralCorner className="absolute top-4 left-4" rotate={0} />
      <FloralCorner className="absolute top-4 right-4" rotate={90} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#654123] font-medium">
          Soulmates for Life
        </p>
        <h2 className="font-script text-4xl sm:text-6xl text-[#962632] mt-1 mb-2">
          The Bride & Groom
        </h2>
        <GoldFlourishDivider text="TWO HEARTS ONE SOUL" />

        {/* Couple Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 mt-12 items-stretch">
          
          {/* Groom Card */}
          <div className="relative group bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#D4AF37]/50 flex flex-col items-center transition-transform hover:-translate-y-1 duration-300">
            
            {/* Top Tag */}
            <div className="absolute -top-4 bg-[#962632] text-[#F3E5AB] px-5 py-1 rounded-full text-xs font-serif tracking-[0.2em] uppercase border border-[#D4AF37] shadow">
              The Groom
            </div>

            {/* Groom Arch Photo Frame */}
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 mt-4 mughal-arch p-2 bg-gradient-to-b from-[#D4AF37] via-[#962632] to-[#721B24] shadow-lg overflow-hidden">
              <div className="w-full h-full mughal-arch overflow-hidden bg-white">
                <img 
                  src={weddingData.groom.image} 
                  alt={weddingData.groom.fullName}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized illustration placeholder if image file missing
                    e.target.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>
            </div>

            {/* Groom Details */}
            <div className="mt-6 text-center">
              <h3 className="font-script text-4xl text-[#962632]">
                {weddingData.groom.firstName}
              </h3>
              <p className="font-serif text-sm tracking-widest uppercase text-[#AA8822] font-semibold mt-1">
                {weddingData.groom.fullName}
              </p>

              <div className="my-3 px-4 py-2 bg-[#F1EDE4] rounded-lg border border-[#D4AF37]/30 text-xs sm:text-sm text-[#4D453D]">
                <p className="text-[#654123] font-medium">Son of</p>
                <p className="font-semibold text-[#962632] mt-0.5">{weddingData.groom.parents}</p>
              </div>

              <p className="font-serif text-xs sm:text-sm text-[#4D453D] italic mt-3 max-w-xs leading-relaxed">
                "{weddingData.groom.bio}"
              </p>
            </div>

          </div>

          {/* Bride Card */}
          <div className="relative group bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#D4AF37]/50 flex flex-col items-center transition-transform hover:-translate-y-1 duration-300">
            
            {/* Top Tag */}
            <div className="absolute -top-4 bg-[#962632] text-[#F3E5AB] px-5 py-1 rounded-full text-xs font-serif tracking-[0.2em] uppercase border border-[#D4AF37] shadow">
              The Bride
            </div>

            {/* Bride Arch Photo Frame */}
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 mt-4 mughal-arch p-2 bg-gradient-to-b from-[#D4AF37] via-[#962632] to-[#721B24] shadow-lg overflow-hidden">
              <div className="w-full h-full mughal-arch overflow-hidden bg-white">
                <img 
                  src={weddingData.bride.image} 
                  alt={weddingData.bride.fullName}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized illustration placeholder if image file missing
                    e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80";
                  }}
                />
              </div>
            </div>

            {/* Bride Details */}
            <div className="mt-6 text-center">
              <h3 className="font-script text-4xl text-[#962632]">
                {weddingData.bride.firstName}
              </h3>
              <p className="font-serif text-sm tracking-widest uppercase text-[#AA8822] font-semibold mt-1">
                {weddingData.bride.fullName}
              </p>

              <div className="my-3 px-4 py-2 bg-[#F1EDE4] rounded-lg border border-[#D4AF37]/30 text-xs sm:text-sm text-[#4D453D]">
                <p className="text-[#654123] font-medium">Daughter of</p>
                <p className="font-semibold text-[#962632] mt-0.5">{weddingData.bride.parents}</p>
              </div>

              <p className="font-serif text-xs sm:text-sm text-[#4D453D] italic mt-3 max-w-xs leading-relaxed">
                "{weddingData.bride.bio}"
              </p>
            </div>

          </div>

        </div>

        {/* Central Loving Banner */}
        <div className="mt-12 flex items-center justify-center space-x-3 text-[#962632]">
          <Heart className="w-4 h-4 fill-current text-[#962632]" />
          <span className="font-script text-2xl text-[#962632]">
            Two lives, two hearts, joined together in friendship, united forever in love.
          </span>
          <Heart className="w-4 h-4 fill-current text-[#962632]" />
        </div>

      </div>
    </section>
  );
};
