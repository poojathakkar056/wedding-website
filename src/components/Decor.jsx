// Reusable decorative SVG elements matching the
// watercolor floral + Mughal palace invitation aesthetic.

/* ── Floral corner spray (used top-left & top-right, flipped via CSS) ── */
export function FloralCorner({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Thin gold frame lines */}
      <path d="M14 8 H140" stroke="#D9B36C" strokeWidth="0.8" opacity="0.6" />
      <path d="M8 14 V140" stroke="#D9B36C" strokeWidth="0.8" opacity="0.6" />
      <circle cx="14" cy="8" r="1.6" fill="#B8862E" opacity="0.7" />

      {/* Branch */}
      <path
        d="M10 10 Q35 28 48 55 Q58 76 50 95"
        stroke="#C9A56B"
        strokeWidth="1.1"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M22 18 Q30 30 26 42"
        stroke="#C9A56B"
        strokeWidth="0.8"
        fill="none"
        opacity="0.45"
      />

      {/* Petal clusters (stylised roses) */}
      <g opacity="0.92">
        <ellipse cx="20" cy="16" rx="9" ry="7" fill="#EBB7AE" />
        <ellipse cx="14" cy="22" rx="7" ry="5.5" fill="#E2A299" />
        <ellipse cx="28" cy="24" rx="6.5" ry="5" fill="#F0C7C0" />
      </g>
      <g opacity="0.85">
        <ellipse cx="42" cy="40" rx="7" ry="5.5" fill="#EFC9C2" />
        <ellipse cx="38" cy="48" rx="5.5" ry="4.4" fill="#E2A299" />
      </g>
      <g opacity="0.8">
        <ellipse cx="48" cy="64" rx="6" ry="4.6" fill="#F0C7C0" />
      </g>

      {/* Small leaves */}
      <path d="M16 30 Q10 36 16 42" stroke="#A8B98A" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M34 50 Q28 54 32 60" stroke="#A8B98A" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M44 70 Q38 74 42 80" stroke="#A8B98A" strokeWidth="1.2" fill="none" opacity="0.5" />

      {/* Gold accent dots */}
      <circle cx="32" cy="14" r="1" fill="#B8862E" opacity="0.6" />
      <circle cx="44" cy="58" r="1" fill="#B8862E" opacity="0.5" />
    </svg>
  );
}

/* ── Ornamental divider: line — diamond — line ── */
export function OrnateDivider({ className = "" }) {
  return (
    <div className={`ornate-divider ${className}`} aria-hidden="true">
      <svg width="100%" height="14" viewBox="0 0 220 14" preserveAspectRatio="none">
        <line x1="0" y1="7" x2="92" y2="7" stroke="#D9B36C" strokeWidth="0.8" />
        <path d="M110 1 L116 7 L110 13 L104 7 Z" fill="#B8862E" opacity="0.8" />
        <line x1="128" y1="7" x2="220" y2="7" stroke="#D9B36C" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/* ── Circular monogram frame (used by LoadingScreen + Hero) ── */
export function MonogramFrame({ size = 200, children }) {
  return (
    <div className="monogram-frame" style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" width="100%" height="100%" aria-hidden="true">
        <circle cx="100" cy="100" r="86" stroke="#D9B36C" strokeWidth="0.9" fill="none" />
        <circle cx="100" cy="100" r="80" stroke="#B8862E" strokeWidth="0.5" fill="none" opacity="0.6" />
        {/* top flourish */}
        <path d="M85 16 Q100 8 115 16" stroke="#C97B6E" strokeWidth="1" fill="none" opacity="0.7" />
        <circle cx="100" cy="12" r="2" fill="#C97B6E" opacity="0.7" />
        {/* bottom flourish */}
        <path d="M85 184 Q100 192 115 184" stroke="#C97B6E" strokeWidth="1" fill="none" opacity="0.5" />

        {/* floral spray left */}
        <g opacity="0.9">
          <ellipse cx="34" cy="70" rx="10" ry="7.5" fill="#EBB7AE" transform="rotate(-20 34 70)" />
          <ellipse cx="28" cy="86" rx="8" ry="6" fill="#E2A299" transform="rotate(-10 28 86)" />
          <ellipse cx="40" cy="100" rx="7" ry="5.5" fill="#F0C7C0" />
          <path d="M30 60 Q22 80 30 110" stroke="#A8B98A" strokeWidth="1" fill="none" opacity="0.5" />
        </g>
        {/* floral spray right */}
        <g opacity="0.9">
          <ellipse cx="166" cy="70" rx="10" ry="7.5" fill="#EBB7AE" transform="rotate(20 166 70)" />
          <ellipse cx="172" cy="86" rx="8" ry="6" fill="#E2A299" transform="rotate(10 172 86)" />
          <ellipse cx="160" cy="100" rx="7" ry="5.5" fill="#F0C7C0" />
          <path d="M170 60 Q178 80 170 110" stroke="#A8B98A" strokeWidth="1" fill="none" opacity="0.5" />
        </g>
        {/* bottom floral spray */}
        <g opacity="0.85">
          <ellipse cx="80" cy="172" rx="8" ry="6" fill="#F0C7C0" />
          <ellipse cx="100" cy="178" rx="9" ry="6.5" fill="#EBB7AE" />
          <ellipse cx="122" cy="172" rx="8" ry="6" fill="#E2A299" />
        </g>
      </svg>
      <div className="monogram-frame-content">{children}</div>
    </div>
  );
}

/* ── Distant Mughal palace silhouette with water reflection ── */
export function PalaceSilhouette({ className = "" }) {
  return (
    <svg
      className={`palace-silhouette ${className}`}
      viewBox="0 0 1200 260"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="palaceFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D9A87E" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#D9A87E" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="waterFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D9A87E" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#D9A87E" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Left palace cluster */}
      <g fill="url(#palaceFade)">
        <rect x="20" y="140" width="60" height="90" />
        <path d="M20 140 Q50 100 80 140 Z" />
        <circle cx="50" cy="96" r="6" />
        <rect x="90" y="110" width="40" height="120" />
        <path d="M90 110 Q110 75 130 110 Z" />
        <circle cx="110" cy="68" r="5" />
        <rect x="0" y="170" width="22" height="60" />
        <path d="M0 170 Q11 150 22 170 Z" />
      </g>

      {/* Right palace cluster */}
      <g fill="url(#palaceFade)">
        <rect x="1040" y="120" width="50" height="110" />
        <path d="M1040 120 Q1065 82 1090 120 Z" />
        <circle cx="1065" cy="78" r="6" />
        <rect x="1100" y="150" width="55" height="80" />
        <path d="M1100 150 Q1127 112 1155 150 Z" />
        <circle cx="1127" cy="106" r="5" />
        <rect x="1170" y="175" width="24" height="55" />
        <path d="M1170 175 Q1182 156 1194 175 Z" />
      </g>

      {/* Distant low hills */}
      <path
        d="M0 200 Q200 170 400 195 Q600 215 800 190 Q1000 168 1200 198 L1200 260 L0 260 Z"
        fill="url(#palaceFade)"
        opacity="0.4"
      />

      {/* Water reflection band */}
      <rect x="0" y="200" width="1200" height="60" fill="url(#waterFade)" />
      <line x1="0" y1="202" x2="1200" y2="202" stroke="#C9956B" strokeWidth="0.6" opacity="0.3" />
    </svg>
  );
}

/* ── Hanging lantern (top corners, optional decorative touch) ── */
export function HangingLantern({ className = "" }) {
  return (
    <svg
      className={`hanging-lantern ${className}`}
      viewBox="0 0 40 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="20" y1="0" x2="20" y2="20" stroke="#B8862E" strokeWidth="1" opacity="0.6" />
      <circle cx="20" cy="24" r="4" fill="none" stroke="#B8862E" strokeWidth="1" opacity="0.6" />
      <path
        d="M10 30 Q10 26 20 26 Q30 26 30 30 L28 55 Q20 60 12 55 Z"
        fill="none"
        stroke="#B8862E"
        strokeWidth="1"
        opacity="0.55"
      />
      <line x1="10" y1="40" x2="30" y2="40" stroke="#B8862E" strokeWidth="0.7" opacity="0.4" />
      <circle cx="20" cy="62" r="2" fill="#B8862E" opacity="0.5" />
      <line x1="20" y1="64" x2="20" y2="74" stroke="#B8862E" strokeWidth="0.7" opacity="0.4" />
      <circle cx="20" cy="78" r="2.5" fill="#C97B6E" opacity="0.5" />
    </svg>
  );
}
