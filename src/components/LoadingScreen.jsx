import { useEffect, useState } from "react";
import { weddingData } from "../data/weddingData";
import "./LoadingScreen.css";

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState("in"); // "in" | "hold" | "out"
  const { background, logo } = weddingData;

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("out"), 2800);
    const t3 = setTimeout(() => onComplete(), 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`loading-screen loading-${phase}`}
      style={{ backgroundImage: `url(${background.image})` }}
    >
      <div className="loading-content">
        <div className="loading-logo-wrap">
          <img
            src={logo.image}
            alt="Pooja & Mayank"
            className="loading-logo"
          />
        </div>

        <div className="loading-dots-wrap">
          <div className="loading-dots" aria-label="Loading">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
