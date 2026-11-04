export const weddingData = {
  groom: {
    firstName: "Akhilesh",
    fullName: "Akhilesh Yadav",
    title: "Groom",
    parentsPrefix: "Son of",
    parents: "Mr. Shyam Sundar Yadav & Mrs. Madhuri Devi",
    image: "/images/groom.jpg",
    bio: "Blessed to embark on this beautiful journey of love and togetherness with his soulmate, Simran."
  },
  bride: {
    firstName: "Simran",
    fullName: "Simran Yadav",
    title: "Bride",
    parentsPrefix: "Daughter of",
    parents: "Mr. Dinesh Kumar Yadav & Mrs. Madhuri Yadav",
    image: "/images/bride.jpg",
    bio: "Ready to step into a new chapter filled with laughter, love, and sacred promises with Akhilesh."
  },
  weddingDate: "2026-11-24T19:00:00+05:30",
  formattedDate: "Tuesday, 24 November 2026",
  weddingTime: "7:00 PM IST",
  hashtag: "#AkhileshWedsSimran",

  mainVenue: {
    name: "Valentine Motel & Resort",
    address: "Grand Trunk Rd, opposite Siraspur Gurudwara, Nangli Puna, New Delhi, Delhi 110036",
    mapsUrl: "https://www.google.com/maps/place/Valentine+Hotel+%26+Resorts/@28.7650767,77.1460906,17z/",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.643336712349!2d77.1460906!3d28.7650767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01ee3daaaaa9%3A0xe67cb566cf2c7eb7!2sValentine%20Hotel%20%26%20Resorts!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  events: [
    {
      id: "haldi",
      title: "Haldi Ceremony",
      hindiTitle: "हल्दी रस्म",
      date: "Monday, 23 November 2026",
      time: "3:00 PM IST",
      venueName: "Home",
      address: "Home town, Madya, Khalilabad, Sant Kabir Nagar, UP 272175",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Madya+Khalilabad+Sant+Kabir+Nagar+UP+272175",
      description: "A splash of turmeric, laughter, and sunshine as we bless the couple in auspicious yellow hues.",
      attire: "Traditional Yellow / Ochre Festive",
      icon: "sun"
    },
    {
      id: "mehendi",
      title: "Mehendi Ceremony",
      hindiTitle: "मेहंदी उत्सव",
      date: "Monday, 23 November 2026",
      time: "6:30 PM IST",
      venueName: "Home",
      address: "Home town, Madya, Khalilabad, Sant Kabir Nagar, UP 272175",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Madya+Khalilabad+Sant+Kabir+Nagar+UP+272175",
      description: "Intricate henna designs, soulful music, and joyous beats of dholak welcoming love.",
      attire: "Vibrant Ethnic / Floral Green",
      icon: "sparkles"
    },
    {
      id: "wedding",
      title: "Wedding Ceremony (Shubh Vivah)",
      hindiTitle: "शुभ विवाह",
      date: "Tuesday, 24 November 2026",
      time: "7:00 PM IST onwards",
      venueName: "Valentine Motel & Resort",
      address: "Grand Trunk Rd, opposite Siraspur Gurudwara, Nangli Puna, New Delhi, Delhi 110036",
      mapsUrl: "https://www.google.com/maps/place/Valentine+Hotel+%26+Resorts/@28.7650767,77.1460906,17z/",
      description: "The sacred saat phere around the holy fire, uniting two souls and families forever in divine harmony.",
      attire: "Royal Traditional Indian / Festive Grandeur",
      icon: "heart"
    }
  ],

  galleryImages: [
    { src: "/images/couple-hero.jpg", caption: "Akhilesh & Simran — Bound by Love", tag: "Couple" },
    { src: "/images/gallery-1.jpg", caption: "Cherished Moments", tag: "Memories" },
    { src: "/images/gallery-2.jpg", caption: "Together Forever", tag: "Couple" },
    { src: "/images/gallery-3.jpg", caption: "Smiles & Celebrations", tag: "Candid" },
    { src: "/images/gallery-4.jpg", caption: "The Journey Begins", tag: "Love" },
    { src: "/images/gallery-5.jpg", caption: "Everlasting Harmony", tag: "Couple" },
    { src: "/images/groom.jpg", caption: "The Groom — Akhilesh", tag: "Groom" },
    { src: "/images/bride.jpg", caption: "The Bride — Simran", tag: "Bride" }
  ],

  audioTrack: {
    src: "/audio/wedding-melody.mp3",
    title: "Indian Wedding Shehnai & Flute Harmony"
  },

  whatsappContact: "+919876543210", // Default phone for WhatsApp RSVP

  // Supabase settings (can also be read from import.meta.env)
  supabase: {
    url: import.meta.env?.VITE_SUPABASE_URL || "",
    anonKey: import.meta.env?.VITE_SUPABASE_ANON_KEY || ""
  }
};
