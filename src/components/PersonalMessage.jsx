import { weddingData } from "../data/weddingData";
import useScrollReveal from "../hooks/useScrollReveal";
import { FloralCorner } from "./Decor";
import "./Decor.css";
import "./PersonalMessage.css";

export default function PersonalMessage() {
  const { personalMessage } = weddingData;
  const ref = useScrollReveal();

  return (
    <section className="section pm-section">
      <FloralCorner className="floral-corner floral-corner-tr" />
      <FloralCorner className="floral-corner floral-corner-bl" />
      <div className="section-inner" ref={ref}>
        <div className="pm-card reveal">
          {/* Quote mark */}
          <div className="pm-quote-mark" aria-hidden="true">"</div>

          <p className="pm-greeting reveal reveal-delay-1">{personalMessage.greeting}</p>

          <p className="pm-body reveal reveal-delay-2">{personalMessage.body}</p>

          <div className="divider reveal reveal-delay-3">
            <div className="divider-line" />
            <span className="divider-ornament">♡</span>
            <div className="divider-line" />
          </div>

          <div className="pm-closing reveal reveal-delay-4">
            <p className="pm-closing-text">{personalMessage.closing}</p>
            <p className="pm-signoff">{personalMessage.signoff}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
