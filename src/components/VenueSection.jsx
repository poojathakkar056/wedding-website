import { weddingData } from "../data/weddingData";
import useScrollReveal from "../hooks/useScrollReveal";
import { FloralCorner, PalaceSilhouette } from "./Decor";
import "./Decor.css";
import "./VenueSection.css";

export default function VenueSection() {
  const { venue } = weddingData;
  const ref = useScrollReveal();

  return (
    <section className="section venue-section">
      <FloralCorner className="floral-corner floral-corner-tl" />
      <FloralCorner className="floral-corner floral-corner-tr" />
      <PalaceSilhouette />
      <div className="section-inner" ref={ref}>

        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">Where We Celebrate</span>
          <h2 className="section-title">Venue</h2>
        </div>

        <div className="divider reveal reveal-delay-1">
          <div className="divider-line" />
          <span className="divider-ornament">✦</span>
          <div className="divider-line" />
        </div>

        <div className="venue-card reveal reveal-delay-2">
          <div className="venue-card-deco" aria-hidden="true">
            <svg viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 80 Q75 20 150 60 Q225 100 300 40" stroke="#DEC882" strokeWidth="0.6" fill="none" opacity="0.5"/>
              <path d="M0 100 Q75 40 150 80 Q225 120 300 60" stroke="#DEC882" strokeWidth="0.4" fill="none" opacity="0.3"/>
            </svg>
          </div>

          <div className="venue-pin" aria-hidden="true">📍</div>
          <h3 className="venue-name">{venue.name}</h3>
          <p className="venue-area">{venue.area}</p>

          <div className="venue-divider" aria-hidden="true" />

          <p className="venue-address">{venue.fullAddress}</p>

          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="venue-map-btn"
            aria-label={`Open ${venue.name} in Google Maps`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Open in Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}
