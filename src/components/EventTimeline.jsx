import { weddingData } from "../data/weddingData";
import useScrollReveal from "../hooks/useScrollReveal";
import { FloralCorner } from "./Decor";
import "./Decor.css";
import "./EventTimeline.css";

export default function EventTimeline() {
  const { events } = weddingData;
  const ref = useScrollReveal();

  return (
    
    <section className="section timeline-section">
      <FloralCorner className="floral-corner floral-corner-tr" />
      <FloralCorner className="floral-corner floral-corner-bl" />
      <div className="section-inner" ref={ref}>

        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">The Celebrations</span>
          <h2 className="section-title">Wedding Festivities</h2>
        </div>

        <div className="divider reveal reveal-delay-1">
          <div className="divider-line" />
          <span className="divider-ornament">✦</span>
          <div className="divider-line" />
        </div>

        <div className="timeline">
          {events.map((event, i) => (
            <div
              key={event.id}
              className={`timeline-item reveal reveal-delay-${Math.min(i + 2, 5)} ${event.highlight ? "timeline-item-highlight" : ""}`}
            >
              <div className="timeline-icon">{event.icon}</div>

              <div className="timeline-card">
                
                <h3 className="timeline-name">{event.name}</h3>
                <div className="timeline-meta">
                  <span className="timeline-day">{event.day}, {event.date}</span>
                  <span className="timeline-sep" aria-hidden="true">·</span>
                  <span className="timeline-time">{event.time}</span>
                </div>
                <p className="timeline-desc">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
