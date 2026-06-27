import { useEffect, useState } from "react";
import { weddingData } from "../data/weddingData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./SaveTheDate.css";

function pad(n) {
  return String(n).padStart(2, "0");
}

function getTimeLeft(targetDate) {
  const now = new Date();
  const target = new Date(targetDate);
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, past: true };
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, past: false };
}

export default function SaveTheDate() {
  const { weddingDate, weddingDateDisplay, weddingDayDisplay, bride, groom } = weddingData;
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(weddingDate));
  const ref = useScrollReveal();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section id="save-the-date" className="section std-section">
      <div className="section-inner" ref={ref}>

        <div className="reveal">
          <span className="section-label">Mark Your Calendar</span>
          <h2 className="section-title">Save the Date</h2>
        </div>

        <div className="divider reveal reveal-delay-1">
          <div className="divider-line" />
          <span className="divider-ornament">✦</span>
          <div className="divider-line" />
        </div>

        <div className="std-card reveal reveal-delay-2">
          <div className="std-card-top">
            <p className="std-label">The Wedding of</p>
            <p className="std-couple">
              {bride.firstName} <span>&</span> {groom.firstName}
            </p>
          </div>

          <div className="std-date-display">
            <div className="std-date-part">
              <span className="std-date-num">04</span>
              <span className="std-date-unit">September</span>
            </div>
            <div className="std-date-divider" aria-hidden="true">·</div>
            <div className="std-date-part">
              <span className="std-date-num">2026</span>
              <span className="std-date-unit">{weddingDayDisplay}</span>
            </div>
          </div>
        </div>

        {/* Countdown */}
        <div className="countdown reveal reveal-delay-3">
          {timeLeft.past ? (
            <p className="countdown-past">
              The celebration has begun! 🎉
            </p>
          ) : (
            <>
              <p className="countdown-label">Counting down to</p>
              <div className="countdown-grid">
                <CountUnit value={pad(timeLeft.days)}    label="Days"    />
                <span className="countdown-sep" aria-hidden="true">:</span>
                <CountUnit value={pad(timeLeft.hours)}   label="Hours"   />
                <span className="countdown-sep" aria-hidden="true">:</span>
                <CountUnit value={pad(timeLeft.minutes)} label="Minutes" />
                <span className="countdown-sep" aria-hidden="true">:</span>
                <CountUnit value={pad(timeLeft.seconds)} label="Seconds" />
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}

function CountUnit({ value, label }) {
  return (
    <div className="count-unit">
      <span className="count-num">{value}</span>
      <span className="count-label">{label}</span>
    </div>
  );
}
