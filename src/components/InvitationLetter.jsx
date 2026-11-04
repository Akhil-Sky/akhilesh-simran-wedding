import React from 'react';
import { GoldFlourishDivider } from './DecorativeElements';

export const InvitationLetter = ({ weddingData }) => {
  return (
    <section id="invitation-section" className="py-16 px-4 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#962632_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Main Invitation Parchment Card */}
        <div className="bg-[#F1EDE4] rounded-2xl shadow-xl border-2 border-[#D4AF37]/50 p-6 sm:p-12 text-center relative">
          
          {/* Inner Golden Inset Border */}
          <div className="absolute inset-3 border border-[#962632]/20 rounded-xl pointer-events-none" />

          {/* Sacred Sanskrit Shloka */}
          <div className="mb-6">
            <p className="font-serif text-sm sm:text-base text-[#962632] font-semibold leading-relaxed">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।<br />
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥
            </p>
            <p className="font-serif text-xs text-[#654123] tracking-widest uppercase mt-2">
              ॐ श्री गणेशाय नमः
            </p>
          </div>

          <GoldFlourishDivider text="INVITATION" />

          {/* Invitation Text */}
          <div className="my-6 space-y-4 text-[#4D453D] font-serif text-base sm:text-lg leading-relaxed">
            <p className="italic text-[#654123]">
              With the divine blessings of our ancestors and the almighty,
            </p>

            <p className="text-sm uppercase tracking-widest text-[#962632] font-semibold">
              The Yadav Families
            </p>

            <p>
              cordially invite you and your family to celebrate the auspicious wedding ceremony of their beloved children
            </p>

            {/* Groom and Bride Highlight with Parents */}
            <div className="py-4 space-y-6">
              
              {/* Groom */}
              <div className="bg-white/60 p-4 rounded-xl border border-[#D4AF37]/40 shadow-sm">
                <h3 className="font-script text-3xl sm:text-4xl text-[#962632]">
                  {weddingData.groom.fullName}
                </h3>
                <p className="text-xs sm:text-sm text-[#654123] font-medium tracking-wide mt-1">
                  Son of <span className="font-semibold text-[#4D453D]">{weddingData.groom.parents}</span>
                </p>
              </div>

              <div className="font-script text-2xl text-[#D4AF37]">
                with
              </div>

              {/* Bride */}
              <div className="bg-white/60 p-4 rounded-xl border border-[#D4AF37]/40 shadow-sm">
                <h3 className="font-script text-3xl sm:text-4xl text-[#962632]">
                  {weddingData.bride.fullName}
                </h3>
                <p className="text-xs sm:text-sm text-[#654123] font-medium tracking-wide mt-1">
                  Daughter of <span className="font-semibold text-[#4D453D]">{weddingData.bride.parents}</span>
                </p>
              </div>

            </div>

            <p className="pt-2 text-sm sm:text-base">
              Please join us to bestow your hearty blessings and auspicious wishes upon the newlyweds as they begin their sacred journey together.
            </p>
          </div>

          <GoldFlourishDivider />

          {/* Family Sign-off */}
          <div className="mt-6 text-center">
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-[#654123]">
              Awaiting your gracious presence
            </p>
            <p className="font-serif text-base font-bold text-[#962632] mt-1">
              Yadav Family & Relatives
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
