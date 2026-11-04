import React from 'react';
import { GoldFlourishDivider } from './DecorativeElements';
import { MapPin, Clock, Calendar, ExternalLink, Sparkles, Sun, Heart } from 'lucide-react';

export const EventsTimeline = ({ events }) => {
  const getEventIcon = (iconName) => {
    switch (iconName) {
      case 'sun':
        return <Sun className="w-6 h-6 text-[#AA8822]" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-[#2D6A4F]" />;
      case 'heart':
      default:
        return <Heart className="w-6 h-6 text-[#962632]" />;
    }
  };

  const getEventAccentColor = (id) => {
    switch (id) {
      case 'haldi':
        return {
          border: 'border-[#E0A922]',
          badge: 'bg-[#FFF8E7] text-[#9A6B00] border-[#E0A922]',
          ring: 'ring-[#E0A922]/30'
        };
      case 'mehendi':
        return {
          border: 'border-[#2D6A4F]',
          badge: 'bg-[#EBF7F0] text-[#1B4332] border-[#2D6A4F]',
          ring: 'ring-[#2D6A4F]/30'
        };
      case 'wedding':
      default:
        return {
          border: 'border-[#962632]',
          badge: 'bg-[#FDF2F3] text-[#962632] border-[#962632]',
          ring: 'ring-[#962632]/30'
        };
    }
  };

  return (
    <section id="events-section" className="py-20 px-4 bg-[#F1EDE4] relative overflow-hidden">
      
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#962632_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        
        {/* Section Header */}
        <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#654123] font-medium">
          Auspicious Celebrations
        </p>
        <h2 className="font-script text-4xl sm:text-6xl text-[#962632] mt-1 mb-2">
          Wedding Events
        </h2>
        <GoldFlourishDivider text="ITINERARY & CEREMONIES" />

        <p className="font-serif text-sm sm:text-base text-[#654123] max-w-xl mx-auto mb-14">
          Join us in the vibrant festivities and sacred rituals as two families unite with joyful celebration.
        </p>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch text-left">
          
          {events.map((event, index) => {
            const styles = getEventAccentColor(event.id);

            return (
              <div 
                key={event.id}
                className={`relative bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 shadow-xl border-2 ${styles.border} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl`}
              >
                {/* Event Order Index Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-white shadow-sm border border-[#D4AF37]/40 flex items-center justify-center`}>
                    {getEventIcon(event.icon)}
                  </div>
                  <span className={`text-[11px] font-serif uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${styles.badge} font-bold`}>
                    {event.hindiTitle}
                  </span>
                </div>

                {/* Event Title */}
                <div>
                  <h3 className="font-script text-3xl sm:text-4xl text-[#962632] leading-snug">
                    {event.title}
                  </h3>
                  
                  {/* Date & Time */}
                  <div className="mt-4 space-y-2 text-sm text-[#4D453D] font-serif">
                    <div className="flex items-center space-x-2 text-[#962632] font-semibold">
                      <Calendar className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-[#654123]">
                      <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Venue Name & Address */}
                  <div className="mt-4 pt-4 border-t border-[#D4AF37]/30 text-xs sm:text-sm text-[#4D453D]">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-[#962632] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-[#962632]">{event.venueName}</p>
                        <p className="text-xs text-[#654123] mt-0.5 leading-relaxed">{event.address}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-[#4D453D] italic leading-relaxed">
                    "{event.description}"
                  </p>

                  {/* Attire / Dress Code */}
                  <div className="mt-4 pt-3 border-t border-dashed border-[#D4AF37]/40">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#654123] block font-semibold">
                      Suggested Attire:
                    </span>
                    <span className="text-xs font-serif text-[#962632] font-medium">
                      {event.attire}
                    </span>
                  </div>
                </div>

                {/* Action: Google Maps Button */}
                <div className="mt-6 pt-2">
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-[#962632] hover:bg-[#721B24] text-white font-serif text-xs tracking-wider uppercase font-semibold transition-colors shadow"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>View On Google Maps</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                  </a>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
