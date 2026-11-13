// src/pages/LandingPage.jsx
// The "coming soon" page visitors see while SITE_FLAGS.siteHidden is true
// (content/site.js). It shows the event name, date and countdown, links to past
// events, and, when the fall mini-event is switched on (content/miniEvent.js),
// a card featuring it.
//
// The wording is LANDING in content/site.js.
//
// Props:
//   onRevealSite  called by the small Preview button; App.jsx then asks for the
//                 access code and shows the full site to organizers.

import React from 'react';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Countdown from '../components/Countdown.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { EVENT, LANDING } from '../content/site.js';
import { MINI_EVENT, MINI_EVENT_HASH } from '../content/miniEvent.js';
import spaceRam from '../assets/space-ram.webp';
import './LandingPage.css';

const LandingPage = ({ onRevealSite }) => (
  <main className="landing">
    <div className="landing-inner">
      <div className="landing-art">
        <div className="landing-glow" aria-hidden="true" />
        <img
          className="landing-ram"
          src={spaceRam}
          alt="The Hack@URI mascot: a ram in an astronaut helmet"
          width="671"
          height="816"
          fetchPriority="high"
        />
      </div>

      <div className="card landing-card">
        <h1 className="landing-title">
          {EVENT.name} <span className="text-gradient">{EVENT.year}</span>
        </h1>
        <p className="landing-tagline">{EVENT.tagline}</p>

        <ul className="landing-facts">
          <li>
            <FaCalendarAlt aria-hidden="true" /> {EVENT.dateDisplay}
          </li>
          <li>
            <FaMapMarkerAlt aria-hidden="true" /> {EVENT.venue}
          </li>
        </ul>

        <Countdown />

        <p className="landing-message">{LANDING.message}</p>

        {/* Featured while the fall mini-event is switched on. */}
        {MINI_EVENT.enabled && (
          <div className="landing-mini">
            <p className="pill">{LANDING.miniEventLabel}</p>
            <h2 className="landing-mini-name">{MINI_EVENT.name}</h2>
            <p className="landing-mini-when">{[MINI_EVENT.date, MINI_EVENT.time].filter(Boolean).join(' · ')}</p>
            {MINI_EVENT.location && <p className="landing-mini-where">{MINI_EVENT.location}</p>}
            <a className="btn btn--primary" href={MINI_EVENT_HASH}>
              Event details <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        )}

        {LANDING.links.length > 0 && (
          <ul className="landing-links">
            {LANDING.links.map((link) => (
              <li key={link.href}>
                <a className="btn btn--secondary" href={link.href}>
                  {link.label} <FaArrowRight aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="landing-follow">
          <p>{LANDING.followText}</p>
          <SocialLinks />
        </div>
      </div>
    </div>

    {/* Deliberately low-key: lets organizers preview the full site. */}
    <button type="button" className="landing-preview" onClick={onRevealSite}>
      Preview
    </button>
  </main>
);

export default LandingPage;
