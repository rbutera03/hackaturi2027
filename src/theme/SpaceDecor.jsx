// src/theme/SpaceDecor.jsx
// Planets, a moon, a satellite and a rocket drawn behind the page (in front of
// the star canvas). Positions and motion live in Starfield.css. Purely
// decorative — the parent has aria-hidden.

const RingedPlanet = () => (
  <svg className="space-decor__item space-decor__saturn" viewBox="0 0 220 160" fill="none">
    <defs>
      <radialGradient id="sd-saturn" cx="32%" cy="28%" r="70%">
        <stop offset="0%" stopColor="#fff6c8" />
        <stop offset="38%" stopColor="#f0c14d" />
        <stop offset="72%" stopColor="#d4891a" />
        <stop offset="100%" stopColor="#7a430c" />
      </radialGradient>
      <linearGradient id="sd-ring" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#ffe566" stopOpacity="0" />
        <stop offset="18%" stopColor="#ffe566" stopOpacity="0.75" />
        <stop offset="50%" stopColor="#fff4a3" stopOpacity="0.95" />
        <stop offset="82%" stopColor="#c9a03a" stopOpacity="0.75" />
        <stop offset="100%" stopColor="#ffe566" stopOpacity="0" />
      </linearGradient>
      <clipPath id="sd-saturn-front">
        <rect x="0" y="84" width="220" height="76" />
      </clipPath>
    </defs>
    {/* Back of the rings, then the body, then the front — so the rings tuck behind. */}
    <ellipse cx="110" cy="84" rx="104" ry="28" stroke="url(#sd-ring)" strokeWidth="10" transform="rotate(-18 110 84)" />
    <ellipse cx="110" cy="84" rx="88" ry="20" stroke="rgba(255, 229, 102, 0.35)" strokeWidth="4" transform="rotate(-18 110 84)" />
    <circle cx="110" cy="82" r="52" fill="url(#sd-saturn)" />
    <ellipse cx="96" cy="64" rx="22" ry="10" fill="rgba(255, 255, 255, 0.18)" />
    <g clipPath="url(#sd-saturn-front)">
      <ellipse cx="110" cy="84" rx="104" ry="28" stroke="url(#sd-ring)" strokeWidth="10" transform="rotate(-18 110 84)" />
      <ellipse cx="110" cy="84" rx="88" ry="20" stroke="rgba(255, 244, 163, 0.45)" strokeWidth="4" transform="rotate(-18 110 84)" />
    </g>
  </svg>
);

const PinkPlanet = () => (
  <svg className="space-decor__item space-decor__pink" viewBox="0 0 120 120" fill="none">
    <defs>
      <radialGradient id="sd-pink" cx="34%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#ffd1f2" />
        <stop offset="42%" stopColor="#ff4ecd" />
        <stop offset="78%" stopColor="#a01b7f" />
        <stop offset="100%" stopColor="#4a0a3c" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="52" fill="url(#sd-pink)" />
    <ellipse cx="44" cy="42" rx="18" ry="10" fill="rgba(255, 255, 255, 0.22)" />
    <ellipse cx="78" cy="70" rx="16" ry="8" fill="rgba(80, 8, 60, 0.28)" />
    <circle cx="38" cy="68" r="8" fill="rgba(160, 27, 127, 0.45)" />
  </svg>
);

const IceMoon = () => (
  <svg className="space-decor__item space-decor__moon" viewBox="0 0 80 80" fill="none">
    <defs>
      <radialGradient id="sd-moon" cx="36%" cy="30%" r="68%">
        <stop offset="0%" stopColor="#f4f7ff" />
        <stop offset="45%" stopColor="#c5d0f5" />
        <stop offset="100%" stopColor="#6d7ab8" />
      </radialGradient>
    </defs>
    <circle cx="40" cy="40" r="28" fill="url(#sd-moon)" />
    <circle cx="28" cy="34" r="6" fill="rgba(90, 100, 160, 0.28)" />
    <circle cx="48" cy="50" r="9" fill="rgba(90, 100, 160, 0.22)" />
    <circle cx="52" cy="28" r="4" fill="rgba(90, 100, 160, 0.25)" />
  </svg>
);

const MintPlanet = () => (
  <svg className="space-decor__item space-decor__mint" viewBox="0 0 72 72" fill="none">
    <defs>
      <radialGradient id="sd-mint" cx="32%" cy="28%" r="70%">
        <stop offset="0%" stopColor="#e9fff6" />
        <stop offset="40%" stopColor="#6ef3b1" />
        <stop offset="100%" stopColor="#0f6b4e" />
      </radialGradient>
    </defs>
    <circle cx="36" cy="36" r="28" fill="url(#sd-mint)" />
    <ellipse cx="28" cy="26" rx="10" ry="5" fill="rgba(255, 255, 255, 0.28)" />
  </svg>
);

const CyanPlanet = () => (
  <svg className="space-decor__item space-decor__cyan" viewBox="0 0 56 56" fill="none">
    <defs>
      <radialGradient id="sd-cyan" cx="34%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#d9ffff" />
        <stop offset="50%" stopColor="#00ffff" />
        <stop offset="100%" stopColor="#0a6f78" />
      </radialGradient>
    </defs>
    <circle cx="28" cy="28" r="22" fill="url(#sd-cyan)" />
    <ellipse cx="22" cy="20" rx="7" ry="4" fill="rgba(255, 255, 255, 0.35)" />
  </svg>
);

// Drawn nose-up, then turned to point right. The climb angle of its flight is
// added in Starfield.css (rocket-cruise), next to the path it follows.
const Rocket = () => (
  <svg className="space-decor__item space-decor__rocket" viewBox="0 0 72 72" fill="none">
    <g transform="rotate(90 36 36)">
      <ellipse className="space-decor__flame" cx="36" cy="62" rx="7" ry="12" fill="#ff4ecd" />
      <ellipse className="space-decor__flame-core" cx="36" cy="60" rx="4" ry="8" fill="#ffe566" />
      <path d="M36 6c8 0 14 22 14 40H22C22 28 28 6 36 6Z" fill="#f4f7ff" />
      <path d="M36 6c8 0 14 22 14 40H36V6Z" fill="#d7defc" />
      <rect x="26" y="38" width="20" height="5" rx="1.5" fill="#00ffff" />
      <circle cx="36" cy="24" r="6.5" fill="#0b0d4a" stroke="#00ffff" strokeWidth="2" />
      <circle cx="36" cy="24" r="3" fill="#7fefff" />
      <path d="M22 42 8 58l14-6Z" fill="#ff4ecd" />
      <path d="M50 42l14 16-14-6Z" fill="#ff4ecd" />
      <path d="M30 46h12l-2 8H32Z" fill="#3d85ff" />
    </g>
  </svg>
);

const Satellite = () => (
  <svg className="space-decor__item space-decor__satellite" viewBox="0 0 96 64" fill="none">
    <rect x="2" y="22" width="26" height="18" rx="2" fill="#3d85ff" stroke="#7fb0ff" strokeWidth="1.5" />
    <rect x="68" y="22" width="26" height="18" rx="2" fill="#3d85ff" stroke="#7fb0ff" strokeWidth="1.5" />
    <line x1="28" y1="31" x2="38" y2="31" stroke="#d7defc" strokeWidth="2" />
    <line x1="58" y1="31" x2="68" y2="31" stroke="#d7defc" strokeWidth="2" />
    <rect x="38" y="20" width="20" height="22" rx="4" fill="#e8edff" stroke="#00ffff" strokeWidth="1.5" />
    <circle cx="48" cy="31" r="5" fill="#0b0d4a" stroke="#00ffff" strokeWidth="1.5" />
    <path d="M48 20v-10" stroke="#d7defc" strokeWidth="2" />
    <circle cx="48" cy="6" r="5" fill="none" stroke="#ffe566" strokeWidth="2" />
    <rect x="6" y="26" width="18" height="2" fill="rgba(255,255,255,0.35)" />
    <rect x="6" y="32" width="18" height="2" fill="rgba(255,255,255,0.35)" />
    <rect x="72" y="26" width="18" height="2" fill="rgba(255,255,255,0.35)" />
    <rect x="72" y="32" width="18" height="2" fill="rgba(255,255,255,0.35)" />
  </svg>
);

const Sparkle = ({ className }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0 9.4 6.6 16 8l-6.6 1.4L8 16l-1.4-6.6L0 8l6.6-1.4Z" />
  </svg>
);

const Asteroids = () => (
  <svg className="space-decor__item space-decor__asteroids" viewBox="0 0 90 50" fill="none">
    <ellipse cx="18" cy="22" rx="10" ry="7" fill="#8b93c4" transform="rotate(-20 18 22)" />
    <ellipse cx="44" cy="14" rx="6" ry="4" fill="#a9b4e6" transform="rotate(18 44 14)" />
    <ellipse cx="70" cy="28" rx="8" ry="5" fill="#6d76a8" transform="rotate(-8 70 28)" />
    <ellipse cx="16" cy="20" rx="3" ry="1.6" fill="rgba(255,255,255,0.25)" transform="rotate(-20 16 20)" />
  </svg>
);

const SpaceDecor = () => (
  <div className="space-decor">
    <div className="space-decor__orbit" />
    {/* First, so it passes behind any planet it crosses. */}
    <Rocket />
    <RingedPlanet />
    <PinkPlanet />
    <IceMoon />
    <MintPlanet />
    <CyanPlanet />
    <Satellite />
    <Asteroids />
    <Sparkle className="space-decor__item space-decor__sparkle space-decor__sparkle--a" />
    <Sparkle className="space-decor__item space-decor__sparkle space-decor__sparkle--b" />
    <Sparkle className="space-decor__item space-decor__sparkle space-decor__sparkle--c" />
    <Sparkle className="space-decor__item space-decor__sparkle space-decor__sparkle--d" />
  </div>
);

export default SpaceDecor;
