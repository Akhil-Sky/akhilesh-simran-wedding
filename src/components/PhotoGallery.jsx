import React, { useState } from 'react';
import { GoldFlourishDivider } from './DecorativeElements';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

export const PhotoGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Couple', 'Memories', 'Candid'];

  const filteredImages = activeFilter === 'All'
    ? images
    : images.filter(img => img.tag === activeFilter || img.tag === 'Couple');

  return (
    <section id="gallery-section" className="py-20 px-4 bg-[#F1EDE4] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#654123] font-medium">
          Cherished Moments
        </p>
        <h2 className="font-script text-4xl sm:text-6xl text-[#962632] mt-1 mb-2">
          Photo Gallery
        </h2>
        <GoldFlourishDivider text="MEMORIES OF LOVE" />

        <p className="font-serif text-sm sm:text-base text-[#654123] max-w-xl mx-auto mb-8">
          A glimpse into the beautiful smiles, shared adventures, and joyful memories of Akhilesh & Simran.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-1.5 rounded-full text-xs font-serif uppercase tracking-[0.2em] font-semibold transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-[#962632] text-[#F3E5AB] border-[#D4AF37] shadow-md'
                  : 'bg-white/80 text-[#654123] border-[#D4AF37]/40 hover:bg-[#F3E5AB]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(img)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md border-2 border-[#D4AF37]/40 aspect-[4/5] transition-all duration-500 hover:shadow-2xl hover:border-[#962632]"
            >
              <img
                src={img.src}
                alt={img.caption || `Gallery photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80";
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#721B24]/90 via-[#962632]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#F3E5AB] font-semibold">
                  {img.tag}
                </span>
                <p className="font-serif text-sm text-white font-medium line-clamp-2 mt-0.5">
                  {img.caption}
                </p>
                <div className="flex items-center space-x-1 text-[#D4AF37] text-xs mt-2">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful note on replacing images */}
        <div className="mt-10 p-3 bg-white/60 rounded-xl border border-[#D4AF37]/30 max-w-lg mx-auto text-center">
          <p className="text-xs font-serif text-[#654123]">
            💡 <span className="font-semibold text-[#962632]">Easy Photo Customization:</span> Place your photos into the <code className="bg-[#FAF8F5] px-1.5 py-0.5 rounded border text-[#962632]">public/images/</code> folder or update <code className="bg-[#FAF8F5] px-1.5 py-0.5 rounded border text-[#962632]">src/weddingData.js</code> to replace any image instantly.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-3xl max-h-[90vh] bg-[#FAF8F5] rounded-2xl p-3 sm:p-4 shadow-2xl border-2 border-[#D4AF37] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#962632] text-white hover:bg-[#721B24] transition-colors shadow-lg"
              aria-label="Close photo"
            >
              <X className="w-5 h-5 text-[#F3E5AB]" />
            </button>

            {/* Photo */}
            <div className="max-h-[75vh] overflow-hidden rounded-xl bg-black/10 flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Caption */}
            <div className="pt-3 text-center">
              <p className="font-script text-2xl text-[#962632]">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
