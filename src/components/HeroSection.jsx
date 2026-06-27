import { useState } from "react";
import { weddingData } from "../data/weddingData";
import "./HeroSection.css";

export default function HeroSection() {
  const [revealed, setRevealed] = useState(false);
  const { bride, groom, hero, weddingDateDisplay } = weddingData;

  return (
    <section className="hero">
      {/* Petal motifs */}
      <div className="hero-petal hero-petal-1" aria-hidden="true" />
      <div className="hero-petal hero-petal-2" aria-hidden="true" />

      {/* Corner ornaments */}
      <svg className="hero-corner hero-corner-tl" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path d="M4 4 Q40 4 40 40" stroke="#DEC882" strokeWidth="0.8" fill="none"/>
        <path d="M4 4 Q4 40 40 40" stroke="#DEC882" strokeWidth="0.8" fill="none"/>
        <circle cx="4" cy="4" r="2" fill="#B8922A" opacity="0.6"/>
        <circle cx="40" cy="40" r="1.5" fill="#B8922A" opacity="0.4"/>
      </svg>
      <svg className="hero-corner hero-corner-tr" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path d="M76 4 Q40 4 40 40" stroke="#DEC882" strokeWidth="0.8" fill="none"/>
        <path d="M76 4 Q76 40 40 40" stroke="#DEC882" strokeWidth="0.8" fill="none"/>
        <circle cx="76" cy="4" r="2" fill="#B8922A" opacity="0.6"/>
      </svg>
      <svg className="hero-corner hero-corner-bl" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path d="M4 76 Q40 76 40 40" stroke="#DEC882" strokeWidth="0.8" fill="none"/>
        <path d="M4 76 Q4 40 40 40" stroke="#DEC882" strokeWidth="0.8" fill="none"/>
        <circle cx="4" cy="76" r="2" fill="#B8922A" opacity="0.6"/>
      </svg>
      <svg className="hero-corner hero-corner-br" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path d="M76 76 Q40 76 40 40" stroke="#DEC882" strokeWidth="0.8" fill="none"/>
        <path d="M76 76 Q76 40 40 40" stroke="#DEC882" strokeWidth="0.8" fill="none"/>
        <circle cx="76" cy="76" r="2" fill="#B8922A" opacity="0.6"/>
      </svg>

      <div className="hero-content">
        <p className="hero-blessing animate-fade-1">{hero.blessing}</p>

        <p className="hero-tagline animate-fade-2">{hero.tagline}</p>

        <div className="hero-names animate-fade-3">
          <span className="hero-bride">{bride.fullName}</span>
          <span className="hero-amp">&amp;</span>
          <span className="hero-groom">{groom.fullName}</span>
        </div>

        <p className="hero-invite animate-fade-4">{hero.subTagline}</p>

        <div className="hero-date-block animate-fade-5">
          <div className="hero-date-line" aria-hidden="true" />
          <p className="hero-date">{weddingDateDisplay}</p>
          <div className="hero-date-line" aria-hidden="true" />
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
