import { useState } from "react";
import { weddingData } from "../data/weddingData";
import "./HeroSection.css";

export default function HeroSection() {
  const [revealed, setRevealed] = useState(false);
  const { bride, groom, hero, weddingDateDisplay, background } = weddingData;

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${background.image})` }}
    >
      <div className="hero-content">
        <p className="hero-blessing animate-fade-1">{hero.blessing}</p>

        <p className="hero-tagline animate-fade-2">{hero.tagline}</p>
        <p className="hero-invite animate-fade-4">{hero.subTagline}</p>
        <div className="hero-names animate-fade-3">
          <span className="hero-bride">{bride.fullName}</span>
          <p className="hero-invite">{hero.brideDetails}</p>
          <span className="hero-amp">&amp;</span>
          <span className="hero-groom">{groom.fullName}</span>
          <p className="hero-invite">{hero.groomDetails}</p>
        </div>

        

        <div className="hero-date-block animate-fade-5">
          <span className="hero-date-deco" aria-hidden="true">&#10022;</span>
          <p className="hero-date">{weddingDateDisplay.toUpperCase()}</p>
          <span className="hero-date-deco" aria-hidden="true">&#10022;</span>
        </div>

        {!revealed && (
          <button
            className="hero-cta animate-fade-6"
            onClick={() => {
              setRevealed(true);
              document.getElementById("save-the-date")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>{hero.ctaButton}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
