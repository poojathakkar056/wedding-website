import { weddingData } from "../data/weddingData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./FamilyDetails.css";

function FamilyCard({ family, side }) {
  return (
    <div className={`family-card family-card-${side}`}>
      <div className="family-card-header">
        <div className="family-icon" aria-hidden="true">
          {side === "bride" ? "🌸" : "🌿"}
        </div>
        <h3 className="family-title">{family.title}</h3>
      </div>

      <div className="family-members">
        <div className="family-member">
          <span className="family-role">Father</span>
          <span className="family-name">{family.father}</span>
        </div>
        <div className="family-member-divider" aria-hidden="true" />
        <div className="family-member">
          <span className="family-role">Mother</span>
          <span className="family-name">{family.mother}</span>
        </div>
        {family.others?.map((name, i) => (
          <div key={i} className="family-member">
            <span className="family-name family-name-other">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FamilyDetails() {
  const { brideFamily, groomFamily } = weddingData;
  const ref = useScrollReveal();

  return (
    <section className="section family-section">
      <div className="section-inner" ref={ref}>

        <div className="reveal" style={{ textAlign: "center" }}>
          <span className="section-label">With Blessings Of</span>
          <h2 className="section-title">Our Families</h2>
        </div>

        <div className="divider reveal reveal-delay-1">
          <div className="divider-line" />
          <span className="divider-ornament">✦</span>
          <div className="divider-line" />
        </div>

        <div className="family-grid">
          <div className="reveal reveal-delay-2">
            <FamilyCard family={brideFamily} side="bride" />
          </div>

          <div className="family-separator reveal reveal-delay-3" aria-hidden="true">
            <div className="family-sep-line" />
            <span className="family-sep-icon">❧</span>
            <div className="family-sep-line" />
          </div>

          <div className="reveal reveal-delay-4">
            <FamilyCard family={groomFamily} side="groom" />
          </div>
        </div>

      </div>
    </section>
  );
}
