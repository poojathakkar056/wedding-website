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
    fullName: "Pooja",
    initial: "P",
  },
  groom: {
    firstName: "Mayank",
    lastName: "Nagrecha",
    fullName: "Mayank",
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
      name: "Chunari ane Ashirwaad",
      date: "03 September 2026",
      day: "Thursday",
      time: "04:00 PM",
      //icon: "🪔",
      icon: "✨ ",
      description: "Where blessings are bestowed, traditions are cherished and the celebrations gracefully begin.",
    },
    {
      id: "sangeet",
      name: "Shaam Shandaar",
      date: "03 September 2026",
      day: "Thursday",
      time: "07:00 PM",
      icon: "🎶",
      description: "A night of melodies, laughter, dazzling performances and unforgettable memories.",
    },
    {
      id: "mandapmuhurat",
      name: "Mandap Muhurat",
      date: "04 September 2026",
      day: "Friday",
      time: "07:00 AM",
      icon: "🌸",
      description: "A sacred beginning, seeking divine blessings for a lifetime of love and togetherness.",
    },
    {
      id: "haldi",
      name: "Rang-e-Mehfil",
      date: "04 September 2026",
      day: "Friday",
      time: "11:00 AM",
      icon: "💛",
      description: "A celebration painted with colors, games, laughter and the joy of togetherness.",
    },
    
    {
      id: "wedding",
      name: "Shubh Vivaah",
      date: "04 September 2026",
      day: "Friday",
      time: "05:15 PM",
      icon: "💍",
      description: "Two hearts, two families, one beautiful promise—forever begins here.",
      highlight: true,
    },
  ],

  // ── VENUE ──────────────────────────────────────────────────
  venue: {
    name: "Sachita  Lawns",
    area: "Thekwa, Chhattisgarh",
    fullAddress: "Sachita Lawns, Thekwa, Chhattisgarh, India",
    mapsUrl: "https://maps.google.com/?q=Sachita+Lawns+Thekwa+Chhattisgarh",
    // Replace with actual Google Maps embed link if available
    embedUrl: "",
  },

  // ── PHOTO GALLERY ──────────────────────────────────────────
  // Add photo paths here (relative to /public folder).
  // Leave empty to hide the gallery section entirely.
  photos: [
    //{
      //enabled: true,
      // Example:
      //image: `${BASE_URL}images/bg-floral-palace.png`,
      //thumbnails: [
        `${BASE_URL}photos/Pic1.jpg`,
        `${BASE_URL}photos/Pic2.jpg`,
        `${BASE_URL}photos/Pic4.jpeg`,
        `${BASE_URL}photos/Pic5.jpeg`,
        //`${BASE_URL}photos/Pic3.jpg`,
      ],
    //},
  //],

  // ── MUSIC ──────────────────────────────────────────────────
  music: {
    enabled: true,
    src: `${BASE_URL}music/Vakratunda-Mahakaya.mp3`,
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
  ganesha: { image: `${BASE_URL}images/ganesha.jpg` },

  // ── FOOTER ─────────────────────────────────────────────────
  footer: {
    thankYouMessage: "Thank you for being part of our special day.",
    hashtag: "#MayankKiPoojaSafal",
    coupleNames: "Pooja ❤️ Mayank",
  },
};

export default weddingData;
