# 🌸 Akhilesh & Simran — Royal Wedding Invitation Website 🌸

An elegant, fully responsive Indian wedding invitation website closely inspired by **Aamantran Theme 5 (Ruby Garden)**, customized specifically for **Akhilesh & Simran**.

---

## 🌹 Wedding Information

- **Groom:** Akhilesh (Son of Mr. Shyam Sundar Yadav & Mrs. Madhuri Devi)
- **Bride:** Simran (Daughter of Mr. Dinesh Kumar Yadav & Mrs. Madhuri Yadav)
- **Wedding Date:** 24 November 2026, 7:00 PM IST
- **Main Wedding Venue:** Valentine Motel & Resort, Grand Trunk Rd, opposite Siraspur Gurudwara, Nangli Puna, New Delhi, Delhi 110036
- **Events:**
  - **Haldi Ceremony:** 23 November 2026, 3:00 PM at Home (Madya, Khalilabad, Sant Kabir Nagar, UP 272175)
  - **Mehendi Ceremony:** 23 November 2026, 6:30 PM at Home (Madya, Khalilabad, Sant Kabir Nagar, UP 272175)
  - **Wedding Ceremony (Shubh Vivah):** 24 November 2026, 7:00 PM at Valentine Motel & Resort, New Delhi

---

## 📁 What Has Been Created in `C:\Akhil\mylove\Wedding Card`

1. **`wedding-card.html` (Instant Standalone HTML Page)**
   - Double-click and open directly in any web browser (Chrome, Edge, Safari, Firefox).
   - Zero installation or setup required.
   - Includes opening envelope animation with wax seal, live countdown to 24 Nov 2026 7:00 PM, audio player, events cards with Google Maps, photo gallery with lightbox, and working RSVP with WhatsApp!

2. **React + Tailwind CSS Project (Production & Vercel Ready)**
   - `src/` — Clean, reusable React components (`OpeningEnvelope`, `HeroSection`, `InvitationLetter`, `CoupleIntro`, `CountdownSection`, `EventsTimeline`, `VenueSection`, `PhotoGallery`, `RSVPSection`, `ClosingSection`, `MusicPlayer`, `DecorativeElements`).
   - `src/weddingData.js` — Single source of truth for names, dates, parents, venues, Google Maps links, and gallery images.
   - `src/lib/supabase.js` — Supabase database integration with automatic local storage fallback.
   - `public/images/` — Couple photographs already imported and ready.
   - `public/audio/` — Traditional Indian wedding shehnai & flute melody.
   - `dist/` — Built and optimized production distribution.
   - `vercel.json` — 1-click deployment configuration for Vercel.

---

## 🚀 How to Run the React App Locally

Open a terminal (PowerShell or Command Prompt) in `C:\Akhil\mylove\Wedding Card` and run:

```bash
# Start local development server
npm run dev
```

Then open `http://localhost:3000` in your browser.

---

## 🌐 Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. (Optional) In **Environment Variables**, set:
   - `VITE_SUPABASE_URL` = your Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = your Supabase Anon Key
5. Click **Deploy**!

---

## 📷 How to Change Photos

All images are located in `public/images/`:
- `couple-hero.jpg` — Hero section couple photo
- `groom.jpg` — Akhilesh portrait
- `bride.jpg` — Simran portrait
- `gallery-1.jpg` through `gallery-5.jpg` — Gallery pictures

To update any photo, simply replace the file with the same name, or add your new photo and edit `src/weddingData.js`.

---

## 💌 RSVP & Guest Responses

- **Guest Submissions:** When guests fill the RSVP form, their response is stored in the database (or browser storage) and celebratory confetti triggers.
- **WhatsApp Option:** Guests can also click **"Quick RSVP via WhatsApp"** to send their confirmation directly to the couple.
- **Couple Admin View:** Click **"Couple Access: View RSVP Responses"** at the bottom of the RSVP section to view all guest entries and download them as an Excel/CSV file!
