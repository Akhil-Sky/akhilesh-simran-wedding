import React from 'react';
import { GoldFlourishDivider } from './DecorativeElements';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';

export const VenueSection = ({ mainVenue }) => {
  return (
    <section id="venue-section" className="py-20 px-4 bg-[#FAF8F5] relative overflow-hidden border-b border-[#D4AF37]/30">
      
      {/* Background Decorative Floral */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#654123] font-medium">
          Destination & Directions
        </p>
        <h2 className="font-script text-4xl sm:text-6xl text-[#962632] mt-1 mb-2">
          The Wedding Venue
        </h2>
        <GoldFlourishDivider text="HOW TO REACH" />

        <p className="font-serif text-sm sm:text-base text-[#654123] max-w-xl mx-auto mb-10">
          We eagerly look forward to welcoming you to our wedding venue. Get ready for an evening of grandeur, feast, and celebration.
        </p>

        {/* Venue Showcase Card */}
        <div className="bg-[#F1EDE4] rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#D4AF37]/60 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-5">
              
              <div className="inline-block px-4 py-1 rounded-full bg-[#962632] text-[#F3E5AB] text-xs font-serif uppercase tracking-[0.2em] font-semibold border border-[#D4AF37]">
                Main Wedding Venue
              </div>

              <h3 className="font-script text-3xl sm:text-5xl text-[#962632] leading-tight">
                {mainVenue.name}
              </h3>

              <div className="flex items-start space-x-3 text-sm text-[#4D453D] font-serif">
                <MapPin className="w-5 h-5 text-[#962632] mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  {mainVenue.address}
                </p>
              </div>

              <div className="p-4 bg-white/70 rounded-xl border border-[#D4AF37]/40 space-y-2 text-xs sm:text-sm font-serif">
                <p className="font-semibold text-[#962632]">
                  📍 Prominent Landmarks:
                </p>
                <ul className="list-disc list-inside text-[#654123] space-y-1">
                  <li>Opposite Siraspur Gurudwara</li>
                  <li>Grand Trunk Rd, Nangli Puna</li>
                  <li>Easily accessible via NH44 (GT Karnal Road)</li>
                </ul>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href={mainVenue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#962632] hover:bg-[#721B24] text-white font-serif text-sm tracking-wider uppercase font-semibold transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4 text-[#D4AF37]" />
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
                </a>
              </div>

            </div>

            {/* Right Map Column */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-inner border-2 border-[#D4AF37]/60 bg-white">
                <iframe
                  title="Valentine Motel & Resort Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.643336712349!2d77.1460906!3d28.7650767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01ee3daaaaa9%3A0xe67cb566cf2c7eb7!2sValentine%20Hotel%20%26%20Resorts!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
