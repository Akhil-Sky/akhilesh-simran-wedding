import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const MusicPlayer = ({ audioSrc, autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current && !hasInteracted) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(err => {
          console.warn("Autoplay blocked by browser policy, waiting for user tap", err);
        });
    }
  }, [autoPlayTrigger, hasInteracted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(e => console.warn(e));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      
      <button
        onClick={togglePlay}
        className="flex items-center space-x-2 bg-[#962632] hover:bg-[#721B24] text-[#FAF8F5] px-3.5 py-2.5 rounded-full shadow-royal border border-[#D4AF37]/60 transition-all duration-300 transform hover:scale-105 active:scale-95 group"
        title={isPlaying ? "Pause Wedding Shehnai" : "Play Wedding Shehnai"}
        aria-label="Toggle Wedding Music"
      >
        {isPlaying ? (
          <div className="flex items-center space-x-1.5">
            <Volume2 className="w-4 h-4 text-[#D4AF37]" />
            <div className="flex items-end space-x-[2px] h-3">
              <span className="w-[3px] bg-[#D4AF37] rounded-full sound-bar"></span>
              <span className="w-[3px] bg-[#D4AF37] rounded-full sound-bar"></span>
              <span className="w-[3px] bg-[#D4AF37] rounded-full sound-bar"></span>
            </div>
            <span className="text-xs font-serif tracking-wider hidden sm:inline text-[#FAF8F5]">
              Music Playing
            </span>
          </div>
        ) : (
          <div className="flex items-center space-x-1.5">
            <VolumeX className="w-4 h-4 text-[#FAF8F5]/80" />
            <span className="text-xs font-serif tracking-wider hidden sm:inline text-[#FAF8F5]">
              Play Music
            </span>
          </div>
        )}
      </button>
    </div>
  );
};
