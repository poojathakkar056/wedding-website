// ============================================================
//  WEDDING CONFIGURATION FILE
//  Edit everything here — the website reads from this file.
// ============================================================

const BASE_URL = import.meta.env.BASE_URL || "/";

export const weddingData = {
  // ── COUPLE ─────────────────────────────────────────────────
  bride: {
    firstName: "Pooja",
    lastName: "Thakkar",
    fullName: "Pooja Thakkar",
    initial: "P",
  },
  groom: {
    firstName: "Mayank",
    lastName: "Nagrecha",
    fullName: "Mayank Nagrecha",
    initial: "M",
  },

  // ── DATES ──────────────────────────────────────────────────
  weddingDate: "2026-09-04T00:00:00", // ISO format — used for countdown
  weddingDateDisplay: "04 September 2026",
  weddingDayDisplay: "Friday",

  // ── HERO SECTION ───────────────────────────────────────────
  hero: {
    blessing: "|| श्री गणेशाय नमः ||",
    tagline: "With the blessings of Lord Ganesha & our beloved families,",
    subTagline: "we joyfully invite you to celebrate the wedding of",
    ctaButton: "Open Invitation",
    brideDetails: "D/O Kirti Ben & Jayanta Bhai Thakkar",
    groomDetails: "S/O Pooja Ben & Girish Bhai Nagrecha",
  },

  // ── PERSONAL MESSAGE ───────────────────────────────────────
  personalMessage: {
    greeting: "Dear Family and Friends,",
    body: "Your presence and blessings mean the world to us. We would be honoured to celebrate this beautiful chapter of our lives with you.",
    closing: "Awaiting your presence,",
    signoff: "Thakkar Family",
  },


  // ── EVENT TIMELINE ─────────────────────────────────────────
  events: [
    {
      id: "chunri",
      name: "Chunari ne Ashirwaad",
      date: "03 September 2026",
      day: "Thursday",
      time: "11:00 AM",
      //icon: "🪔",
      icon: "✨ ",
      description: "A sacred ritual marking the beginning of the wedding festivities.",
    },
    {
      id: "sangeet",
      name: "Shaam Shandaar",
      date: "03 September 2026",
      day: "Thursday",
      time: "07:00 PM",
      icon: "🎶",
      description: "An evening of music, dance, and joyful celebrations.",
    },
    {
      id: "haldi",
      name: "Rang-E-Shagun",
      date: "04 September 2026",
      day: "Friday",
      time: "10:00 AM",
      icon: "🌼",
      description: "Turmeric blessings for radiance and good fortune.",
    },
    
    {
      id: "wedding",
      name: "Shubh Vivaah",
      date: "04 September 2026",
      day: "Friday",
      time: "4:00 PM",
      icon: "💍",
      description: "The sacred union of Pooja and Mayank.",
      highlight: true,
    },
  ],

  // ── VENUE ──────────────────────────────────────────────────
  venue: {
    name: "Sanchita Lawns",
    area: "Thekwa, Chhattisgarh",
    fullAddress: "Sanchita Lawns, Thekwa, Chhattisgarh, India",
    mapsUrl: "https://maps.google.com/?q=Sanchita+Lawns+Thekwa+Chhattisgarh",
    // Replace with actual Google Maps embed link if available
    embedUrl: "",
  },

  // ── PHOTO GALLERY ──────────────────────────────────────────
  // Add photo paths here (relative to /public folder).
  // Leave empty to hide the gallery section entirely.
  photos: [
    // Example:
    // "/photos/photo1.jpg",
    // "/photos/photo2.jpg",
  ],

  // ── MUSIC ──────────────────────────────────────────────────
  music: {
    enabled: true,
    src: `${BASE_URL}music/forever-starts-today.mp3`,
    label: "Wedding Song",
  },

  // ── BACKGROUND ARTWORK ─────────────────────────────────────
  // Full illustration — used as the showcase backdrop on Loading Screen & Hero.
  // Subtle  — a softened, faded corner-only crop tiled behind every other
  //           section so the motif repeats cleanly without visible seams.
  background: {
    image: `${BASE_URL}images/bg-floral-palace.png`,
    subtleImage: `${BASE_URL}images/bg-floral-subtle.png`,
  },

  // ── LOGO / MONOGRAM ────────────────────────────────────────
  // Circular P&M monogram badge shown on the Loading Screen.
  logo: {
    image: `${BASE_URL}images/logo-monogram.png`,
  },

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    thankYouMessage: "Thank you for being part of our special day.",
    hashtag: "#MayankNiPoojaSaphal",
    coupleNames: "Pooja ❤️ Mayank",
  },
};

export default weddingData;
