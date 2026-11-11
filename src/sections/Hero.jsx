// src/features/home/HomeSection.jsx
// Main homepage hero section with event branding, sponsor highlights, and CTA/countdown.

import React from 'react';
import pirateLogo from '../../assets/pirate_ram.svg';
import starsSvg from '../../assets/stars-bg.svg';
import CountdownTimer from './components/Countdown';
import { ARCHIVE_NAV_ITEMS } from '../archive/data/events/index.js';
import { RAPID_BUILD_HASH } from '../hack-day';
import '../../shared/styles/shared.css';
import './HomeSection.css';
// Sponsor logos live in /public/images/sponsors (served from site root).
const yconicLogo = '/images/sponsors/yconic-transparent.png';
const monsterLogo = '/images/sponsors/monster.png';
const themoveappLogo = '/images/sponsors/themoveapp.png';

// ─── Home Hero Config ──────────────────────────────────────────────────────────
const EVENT_DATE_DISPLAY = 'February 21-22, 2026';
const EVENT_TITLE = 'Set Sail for Innovation: Hack@URI 2026';

// Toggle between registration button and live countdown card.
const SHOW_REGISTRATION_BUTTON = false;
const REGISTRATION_LINK = 'https://forms.gle/7q3LSHYr7gqQ2CaZ9';

// Toggle between archive/projects CTA and live countdown card.
const SHOW_PROJECT_GALLERY = true;
const PROJECT_GALLERY_HREF = ARCHIVE_NAV_ITEMS.find(item => item.id === `#archive-${2026}`).id;

// Hack Day / Rapid Build overlay (opened via hash in App.jsx).
const SHOW_HACK_DAY_BUTTON = true;
const HACK_DAY_BUTTON_LABEL = 'Explore Hack Day →';

// Hero sponsors shown directly below the event title.
const HERO_SPONSORS = [
  { label: 'Powered by', name: 'Yconic', logo: yconicLogo, url: 'https://yconic.ai/', className: 'yconic-logo' },
  { label: 'Fueled by', name: 'Monster Energy', logo: monsterLogo, url: 'https://www.monsterenergy.com/en-us/', className: 'monster-logo' },
  { label: 'Catered by', name: 'The Move App', logo: themoveappLogo, url: 'https://www.themoveapp.io/', className: 'themoveapp-logo' },
];
// ─────────────────────────────────────────────────────────────────────────────

const HomeSection = () => {
  return (
    <div className="pirate-hero">
      <div className="hero-container">
        {/* ── Left Hero Art ──────────────────────────────────────────────── */}
        <div className="hero-left">
          <div className="pirate-logo-wrap">
            <img src={pirateLogo} alt="Hack@URI Pirate Logo" className="pirate-logo" />
          </div>
        </div>

        {/* ── Right Hero Content ─────────────────────────────────────────── */}
        <div className="hero-right">
          <header className="hero-copy">
            <h1 className="hero-title">{EVENT_TITLE}</h1>
            {HERO_SPONSORS.map((sponsor) => (
              <div key={sponsor.name} className="powered-by">
                <h4>{sponsor.label}</h4>
                {sponsor.url ? (
                  <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                    <img src={sponsor.logo} alt={sponsor.name} className={sponsor.className} />
                  </a>
                ) : (
                  <img src={sponsor.logo} alt={sponsor.name} className={sponsor.className} />
                )}
              </div>
            ))}
          </header>

          {/* ── Hero CTA Card (archive OR countdown) ─────────────────────── */}
          {SHOW_PROJECT_GALLERY ? (
            <div className="hero-gallery-card">
              <p className="gallery-sub">
              🎉 Check out the amazing projects from Hack@URI 2026! 🎉
              </p>
              <a href={PROJECT_GALLERY_HREF} className="btn view-projects">
                Hack@URI 2026 Archive & Projects →
              </a>
            </div>
          ) : (
            <div className="hero-countdown">
              <div className="countdown-date">{EVENT_DATE_DISPLAY}</div>
              <CountdownTimer />
            </div>
          )}

          {/* ── Hack Day / Rapid Build CTA ────────────────────────────────── */}
          {SHOW_HACK_DAY_BUTTON && (
            <div className="hero-cta hero-cta--hack-day">
              <a href={RAPID_BUILD_HASH} className="btn hack-day">
                {HACK_DAY_BUTTON_LABEL}
              </a>
            </div>
          )}

          {/* ── Optional Registration CTA ─────────────────────────────────── */}
          {SHOW_REGISTRATION_BUTTON && (
            <div className="hero-cta">
              <a href={REGISTRATION_LINK} target="_blank" 
              rel="noopener noreferrer" 
              className="btn register"
            >
            Register Now!
            </a>
            </div>
          )}
        </div>
      </div>

      {/* ── Decorative Star Field ─────────────────────────────────────────── */}
      {[1, 2, 3, 4, 5].map((n) => (
        <img key={n} src={starsSvg} alt="" className={`decor-star star-${n}`} />
      ))}
    </div>
  );
};

export default HomeSection;

