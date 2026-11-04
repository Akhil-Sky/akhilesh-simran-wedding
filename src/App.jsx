import React, { useState } from 'react';
import { weddingData } from './weddingData';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { MusicPlayer } from './components/MusicPlayer';
import { HeroSection } from './components/HeroSection';
import { InvitationLetter } from './components/InvitationLetter';
import { CoupleIntro } from './components/CoupleIntro';
import { CountdownSection } from './components/CountdownSection';
import { EventsTimeline } from './components/EventsTimeline';
import { VenueSection } from './components/VenueSection';
import { ClosingSection } from './components/ClosingSection';

export default function App() {
  const [hasOpenedInvite, setHasOpenedInvite] = useState(false);

  const handleInviteOpen = () => {
    setHasOpenedInvite(true);
  };

  return (
    <div className="min-h-screen bg-[#F1EDE4] text-[#4D453D] relative overflow-x-hidden selection:bg-[#962632] selection:text-white">
      
      {/* Signature Aamantran Theme 5 Opening Envelope Screen */}
      <OpeningEnvelope 
        weddingData={weddingData} 
        onOpen={handleInviteOpen} 
      />

      {/* Floating Indian Wedding Background Shehnai Music Player */}
      <MusicPlayer 
        audioSrc={weddingData.audioTrack.src} 
        autoPlayTrigger={hasOpenedInvite} 
      />

      {/* Main Wedding Invitation Website Content */}
      <main className="relative z-10">
        
        {/* 1. Hero Section */}
        <HeroSection weddingData={weddingData} />

        {/* 2. Traditional Indian Wedding Invitation Letter */}
        <InvitationLetter weddingData={weddingData} />

        {/* 3. Couple Introduction */}
        <CoupleIntro weddingData={weddingData} />

        {/* 4. Auspicious Live Countdown */}
        <CountdownSection 
          targetDate={weddingData.weddingDate} 
          weddingData={weddingData} 
        />

        {/* 5. Wedding Events (Haldi, Mehendi, Wedding) */}
        <EventsTimeline events={weddingData.events} />

        {/* 6. Venue Section with Working Google Maps */}
        <VenueSection mainVenue={weddingData.mainVenue} />

        {/* 7. Closing Section */}
        <ClosingSection weddingData={weddingData} />

      </main>

    </div>
  );
}
