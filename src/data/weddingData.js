// ============================================================
//  WEDDING CONFIGURATION FILE
//  Edit everything here — the website reads from this file.
// ============================================================

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
    blessing: "🪔 Shri Ganeshaya Namah  🪔",
    tagline: "Together with their families",
    subTagline: "cordially invite you to celebrate their wedding",
    ctaButton: "Open Invitation",
  },

  // ── PERSONAL MESSAGE ───────────────────────────────────────
  personalMessage: {
    greeting: "Dear Family and Friends,",
    body: "Your presence and blessings mean the world to us. We would be honoured to celebrate this beautiful chapter of our lives with you.",
    closing: "With love,",
    signoff: "Pooja & Mayank",
  },

  // ── FAMILIES ───────────────────────────────────────────────
  brideFamily: {
    title: "Bride's Family",
    father: "Jayanta Bhai Thakkar",
    mother: "Kirti Ben Thakkar",
    // Optional: add siblings or other relatives
    // others: ["Name Here"]
  },
  groomFamily: {
    title: "Groom's Family",
    father: "Girish Bhai Nagrecha",
    mother: "Pooja Ben Nagrecha",
  },

  // ── EVENT TIMELINE ─────────────────────────────────────────
  events: [
    {
      id: "tilak",
      name: "Tilak",
      date: "02 September 2026",
      day: "Wednesday",
      time: "11:00 AM",
      venue: "Nagrecha Residence",
      icon: "🪔",
      description: "A sacred ritual marking the beginning of the wedding festivities.",
    },
    {
      id: "haldi",
      name: "Haldi",
      date: "03 September 2026",
      day: "Thursday",
      time: "10:00 AM",
      venue: "Thakkar Residence",
      icon: "🌼",
      description: "Turmeric blessings for radiance and good fortune.",
    },
    {
      id: "sangeet",
      name: "Sangeet",
      date: "03 September 2026",
      day: "Thursday",
      time: "07:00 PM",
      venue: "Sanchita Lawns, Thekwa",
      icon: "🎶",
      description: "An evening of music, dance, and joyful celebrations.",
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      date: "04 September 2026",
      day: "Friday",
      time: "11:00 AM",
      venue: "Sanchita Lawns, Thekwa",
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
    "/photos/pic1.avif"
    // Example:
    // "/photos/photo1.jpg",
    // "/photos/photo2.jpg",
  ],

  // ── MUSIC ──────────────────────────────────────────────────
  music: {
    enabled: true,
    src: "/music/wedding-song.mp3", // Place your MP3 in public/music/
    label: "Wedding Song",
  },

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    thankYouMessage: "Thank you for being part of our special day.",
    hashtag: "#MayankNiPoojaSaphal",
    coupleNames: "Pooja ❤️ Mayank",
  },
};

export default weddingData;
