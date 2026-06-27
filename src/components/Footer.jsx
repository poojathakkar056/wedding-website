import { weddingData } from "../data/weddingData";
import "./Footer.css";

export default function Footer() {
  const { footer, bride, groom, weddingDateDisplay } = weddingData;

  return (
    <footer className="footer">
      {/* Top wave decoration */}
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 Q300 0 600 40 Q900 80 1200 40 L1200 80 L0 80 Z" fill="#2C2416" opacity="0.04"/>
          <path d="M0 60 Q300 20 600 60 Q900 100 1200 60 L1200 80 L0 80 Z" fill="#2C2416" opacity="0.03"/>
        </svg>
      </div>

      <div className="footer-inner">
        {/* Ornament */}
        <div className="footer-ornament" aria-hidden="true">✦ ✦ ✦</div>

        <div className="footer-names">
          <span>{bride.firstName}</span>
          <span className="footer-heart">❤️</span>
          <span>{groom.firstName}</span>
        </div>

        <p className="footer-date">{weddingDateDisplay}</p>

        <p className="footer-message">{footer.thankYouMessage}</p>

        <a
          href={`https://www.instagram.com/explore/tags/${footer.hashtag.replace("#", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-hashtag"
          aria-label={`Wedding hashtag ${footer.hashtag}`}
        >
          {footer.hashtag}
        </a>

        <div className="footer-ornament footer-ornament-bottom" aria-hidden="true">
          <svg width="120" height="12" viewBox="0 0 120 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="6" x2="48" y2="6" stroke="#DEC882" strokeWidth="0.5"/>
            <circle cx="60" cy="6" r="3" fill="#B8922A" opacity="0.5"/>
            <line x1="72" y1="6" x2="120" y2="6" stroke="#DEC882" strokeWidth="0.5"/>
          </svg>
        </div>

        <p className="footer-credits">
          Made with ❤️ for a lifetime of love
        </p>
      </div>
    </footer>
  );
}
