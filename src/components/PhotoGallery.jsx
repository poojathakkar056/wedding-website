import { useState } from "react";
import { weddingData } from "../data/weddingData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./PhotoGallery.css";

export default function PhotoGallery() {
  const { photos } = weddingData;
  const [lightbox, setLightbox] = useState(null); // index or null
  const ref = useScrollReveal();

  // Hide section entirely if no photos
  if (!photos || photos.length === 0) return null;

  const prev = () => setLightbox((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setLightbox((i) => (i + 1) % photos.length);

  return (
    <section className="section gallery-section">
      <div className="section-inner" ref={ref}>

        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">Captured Moments</span>
          <h2 className="section-title">Our Gallery</h2>
        </div>

        <div className="divider reveal reveal-delay-1">
          <div className="divider-line" />
          <span className="divider-ornament">✦</span>
          <div className="divider-line" />
        </div>

        <div className="gallery-grid reveal reveal-delay-2">
          {photos.map((src, i) => (
            <button
              key={i}
              className="gallery-thumb"
              onClick={() => setLightbox(i)}
              aria-label={`View photo ${i + 1}`}
            >
              <img src={src} alt={`Wedding photo ${i + 1}`} loading="lazy" />
              <div className="gallery-thumb-overlay" aria-hidden="true">
                <span>⊕</span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-label="Photo lightbox"
          onClick={() => setLightbox(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <div
            className="lightbox-img-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[lightbox]}
              alt={`Wedding photo ${lightbox + 1}`}
              className="lightbox-img"
            />
            <p className="lightbox-count">{lightbox + 1} / {photos.length}</p>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
