// src/features/home/pages/LandingPage.jsx
// Pre-launch landing experience shown while the main site is hidden in App-level config.

import React from 'react';
import pirateLogo from '../../../assets/pirate_ram.svg';
import starsSvg from '../../../assets/stars-bg.svg';
import { ARCHIVE_NAV_ITEMS } from '../../archive/data/events/index.js';
import './LandingPage.css';

// ─── Landing Page Content ─────────────────────────────────────────────────────
// Update these values each year before switching SITE_HIDDEN back to true.
const LANDING_CONFIG = {
  eventName:    'Hack@URI 2027',
  tagline:      'Hack@URI Rapid Build!',
  description:  'We are excited to announce our second ever Mini Hack Event: Hack@URI Rapid Build!',
  eventDates:   'Learn more about Hack@URI Rapid Build below!',

  topLinkLabel: 'Hack@URI Rapid Build →',
  topLinkUrl:   '#rapid-build',

  bottomCtaCopy:  'While we prepare for Hack@URI 2027, take a look back at Hack@URI 2026 photos, winners, and projects.',
  bottomLinkLabel: 'Hack@URI 2026 Photos, Winners, and Projects →',
  bottomLinkUrl: ARCHIVE_NAV_ITEMS.find(item => item.id === '#archive-2026')?.id || '#archive-2026',

  followUsText: 'Follow us for updates:',
  socialLinks: [
    { label: 'Instagram', url: 'https://www.instagram.com/hack.at.uri/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/company/hack-uri/posts/?feedView=all' },
  ],
};

// MLH Trust Badge — update the season year and utm_campaign each year
const MLH_BADGE = {
  href:     'https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white',
  imageUrl: 'https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg',
  alt:      'Major League Hacking 2026 Hackathon Season',
};
// ─────────────────────────────────────────────────────────────────────────────

// Props:
//   onRevealSite — called by the admin preview button to trigger the reveal flow.
const LandingPage = ({ onRevealSite }) => {
  return (
    <div className="landing-app">

      {/* ── MLH Trust Badge ──────────────────────────────────────────────── */}
      <a
        id="mlh-trust-badge"
        href={MLH_BADGE.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          maxWidth: '100px',
          minWidth: '60px',
          position: 'fixed',
          right: '50px',
          top: '0',
          width: '10%',
          zIndex: '10000',
        }}
      >
        <img src={MLH_BADGE.imageUrl} alt={MLH_BADGE.alt} style={{ width: '100%' }} />
      </a>

      <div className="landing-page">
        <div className="landing-content">

          {/* ── Left Hero Art ───────────────────────────────────────────── */}
          <div className="landing-left">
            <div className="pirate-logo-wrap">
              <img src={pirateLogo} alt="Hack@URI Pirate Logo" className="pirate-logo" />
            </div>
          </div>

          {/* ── Right Event Content ────────────────────────────────────── */}
          <div className="landing-right">
            <div className="landing-info panel-card">
              <h1 className="landing-title">{LANDING_CONFIG.eventName}</h1>
              <p className="landing-subtitle">{LANDING_CONFIG.tagline}</p>

              <div className="landing-description">
                <p>{LANDING_CONFIG.description}</p>
                <p className="landing-dates">{LANDING_CONFIG.eventDates}</p>
              </div>

              <div className="preregistration-section">
                <a
                  href={LANDING_CONFIG.topLinkUrl}
                  className="btn-primary preregistration-button"
                >
                  {LANDING_CONFIG.topLinkLabel}
                </a>
              </div>

              <div className="organizer-cta-section">
                <p className="organizer-cta-copy">
                  {LANDING_CONFIG.bottomCtaCopy}
                </p>
                <a
                  href={LANDING_CONFIG.bottomLinkUrl}
                  className="btn-primary organizer-cta-button"
                >
                  {LANDING_CONFIG.bottomLinkLabel}
                </a>
              </div>

              {/* ── Social Links ─────────────────────────────────────────── */}
              <div className="landing-footer">
                <p>{LANDING_CONFIG.followUsText}</p>
                <div className="social-links">
                  {LANDING_CONFIG.socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {[1, 2, 3, 4, 5].map((n) => (
          <img key={n} src={starsSvg} alt="" className={`decor-star star-${n}`} />
        ))}

        {/* ── Admin Controls ─────────────────────────────────────────────
            Intentionally subtle — lets organizers preview the full site
            without revealing the button to casual visitors.
            Clicking this triggers the access code prompt in App.jsx. */}
        <div className="admin-controls">
          <button className="admin-button subtle" onClick={onRevealSite}>
            Preview
          </button>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
