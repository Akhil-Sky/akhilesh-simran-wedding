import React, { useState, useEffect } from 'react';
import { GoldFlourishDivider } from './DecorativeElements';
import { CalendarPlus, Clock } from 'lucide-react';

export const CountdownSection = ({ targetDate, weddingData }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTime = () => {
      // 24 November 2026, 7:00 PM IST (UTC+5:30)
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Google Calendar event URL
  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Akhilesh & Simran Wedding (Shubh Vivah)");
    const details = encodeURIComponent("You are cordially invited to celebrate the wedding ceremony of Akhilesh and Simran at Valentine Motel & Resort, New Delhi.");
    const location = encodeURIComponent("Valentine Motel & Resort, Grand Trunk Rd, Nangli Puna, New Delhi, Delhi 110036");
    // 24 Nov 2026 19:00 IST = 24 Nov 2026 13:30 UTC
    const dates = "20261124T133000Z/20261125T023000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section className="py-16 px-4 bg-[#962632] text-white relative overflow-hidden">
      
      {/* Decorative Golden Corner Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1.5px,transparent_1.5px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-center space-x-2 text-[#D4AF37] mb-2">
          <Clock className="w-5 h-5" />
          <span className="font-serif text-xs uppercase tracking-[0.3em] font-semibold text-[#F3E5AB]">
            Counting Down To The Big Day
          </span>
        </div>

        <h2 className="font-script text-4xl sm:text-6xl text-[#FAF8F5] gold-shimmer mb-3">
          The Auspicious Moment
        </h2>
        
        <p className="font-serif text-sm sm:text-base text-[#F1EDE4] max-w-md mx-auto">
          24 November 2026 • 7:00 PM IST • New Delhi
        </p>

        {/* Countdown Timer Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-6 max-w-xl mx-auto my-10">
          
          {/* Days */}
          <div className="flex flex-col items-center p-3 sm:p-5 bg-[#FAF8F5] text-[#962632] rounded-2xl shadow-xl border-2 border-[#D4AF37]">
            <span className="font-serif text-2xl sm:text-5xl font-bold tracking-tight">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#654123] font-semibold mt-1">
              Days
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center p-3 sm:p-5 bg-[#FAF8F5] text-[#962632] rounded-2xl shadow-xl border-2 border-[#D4AF37]">
            <span className="font-serif text-2xl sm:text-5xl font-bold tracking-tight">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#654123] font-semibold mt-1">
              Hours
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center p-3 sm:p-5 bg-[#FAF8F5] text-[#962632] rounded-2xl shadow-xl border-2 border-[#D4AF37]">
            <span className="font-serif text-2xl sm:text-5xl font-bold tracking-tight">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#654123] font-semibold mt-1">
              Mins
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center p-3 sm:p-5 bg-[#FAF8F5] text-[#962632] rounded-2xl shadow-xl border-2 border-[#D4AF37]">
            <span className="font-serif text-2xl sm:text-5xl font-bold tracking-tight text-[#B02C3B]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#654123] font-semibold mt-1">
              Secs
            </span>
          </div>

        </div>

        {/* Add to Calendar Action */}
        <div className="flex justify-center">
          <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#962632] hover:bg-[#F3E5AB] transition-colors font-serif text-sm tracking-wider font-semibold border border-[#D4AF37] shadow-lg transform hover:scale-105"
          >
            <CalendarPlus className="w-4 h-4 text-[#962632]" />
            <span>Add To Google Calendar</span>
          </a>
        </div>

      </div>
    </section>
  );
};
