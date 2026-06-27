import { useEffect, useState } from "react";
import { weddingData } from "../data/weddingData";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState("in"); // "in" | "hold" | "out"
  const { bride, groom } = weddingData;

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("out"), 2600);
    const t3 = setTimeout(() => onComplete(), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen loading-${phase}`}>
      {/* Corner florals */}
      <div className="loading-floral loading-floral-tl" aria-hidden="true">❧</div>
      <div className="loading-floral loading-floral-tr" aria-hidden="true">❧</div>
      <div className="loading-floral loading-floral-bl" aria-hidden="true">❧</div>
      <div className="loading-floral loading-floral-br" aria-hidden="true">❧</div>

      <div className="loading-content">
        <div className="loading-ring" aria-hidden="true">
          <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="90" cy="90" r="80" stroke="#DEC882" strokeWidth="0.8" strokeDasharray="3 6"/>
            <circle cx="90" cy="90" r="68" stroke="#B8922A" strokeWidth="0.4"/>
          </svg>
        </div>

        <div className="loading-initials">
          <span className="loading-initial">{bride.initial}</span>
          <span className="loading-ampersand">&#38;</span>
          <span className="loading-initial">{groom.initial}</span>
        </div>

        <div className="loading-names">
          <span>{bride.firstName}</span>
          <span className="loading-names-sep">·</span>
          <span>{groom.firstName}</span>
        </div>

        <div className="loading-dots" aria-label="Loading">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
