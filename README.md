# 💍 Pooja & Mayank — Wedding Website

A production-ready, mobile-first wedding invitation website built with **React + Vite**.

---

## ✨ Features

- Elegant loading screen with couple initials
- Hero section with blessing & invitation
- Live countdown timer to the wedding day
- Personal message from the couple
- Family details for both sides
- Event timeline (Tilak, Haldi, Sangeet, Wedding)
- Venue card with Google Maps link
- Photo gallery with lightbox (auto-hidden if no photos)
- Floating music player (disabled by default)
- WhatsApp-optimised Open Graph meta tags
- Mobile-first, fully responsive
- Smooth scroll reveal animations
- No backend, no database — pure static site

---

## 🗂 Project Structure

```
wedding-website/
├── public/
│   └── music/
│       └── wedding-song.mp3   ← Place your MP3 here
│
├── src/
│   ├── components/            ← All UI components
│   ├── data/
│   │   └── weddingData.js     ← ✏️ EDIT THIS FILE
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
└── package.json
```

---

## ✏️ Customisation

**All wedding details live in one file:**

```
src/data/weddingData.js
```

Edit names, dates, venues, events, family members, music, hashtag, and more — all from this single config file. No other files need to be touched for content changes.

### Adding Photos

Add your photo files to the `public/photos/` folder, then list them in `weddingData.js`:

```js
photos: [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
],
```

The gallery section will appear automatically. Leave the array empty to hide the gallery.

### Adding Music

1. Place your MP3 file at: `public/music/wedding-song.mp3`
2. The music player button will appear in the bottom-right corner.
3. Music is **muted by default** — guests tap the button to play.

To change the file path, update `weddingData.js`:
```js
music: {
  enabled: true,
  src: "/music/your-song.mp3",
},
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Clone or download the project
cd wedding-website

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

---

## 🌐 Deployment

### Option A — GitHub Pages (Recommended, Free)

**Method 1: Automatic (GitHub Actions)**

1. Push the project to a GitHub repository
2. Go to repo **Settings → Pages**
3. Under "Source", select **GitHub Actions**
4. Push any commit to the `main` branch
5. GitHub Actions will build and deploy automatically
6. Your site will be live at: `https://your-username.github.io/wedding-website/`

**Method 2: Manual**

```bash
# Build and deploy in one command
npm run deploy
```

This uses `gh-pages` to push the `dist/` folder to a `gh-pages` branch.

### Option B — Netlify (Easiest)

1. Go to [netlify.com](https://www.netlify.com) and sign in
2. Click **Add new site → Import an existing project**
3. Connect your GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy** — done!

### Option C — Vercel

```bash
npx vercel --prod
```

---

## 📱 WhatsApp Sharing Tip

When you share the website URL on WhatsApp, it will show a preview card (Open Graph) with:
- **Title:** "You're Invited 💍 Pooja & Mayank"
- **Description:** Wedding details

To add a custom preview image, add this to `index.html`:
```html
<meta property="og:image" content="https://your-domain.com/preview.jpg" />
```

Place a 1200×630px image at `public/preview.jpg`.

---

## 🎨 Design Tokens

All colours are defined as CSS variables in `src/styles/global.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--ivory` | `#FAF7F2` | Page background |
| `--gold` | `#B8922A` | Primary accent |
| `--gold-light` | `#D4A843` | Hover / lighter gold |
| `--rose` | `#C9897B` | Dusty rose highlight |
| `--text-dark` | `#2C2416` | Body text |

---

## 📄 License

Created for personal use. Customise freely for your wedding.
