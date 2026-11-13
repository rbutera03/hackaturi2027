// src/sections/WhyJoin.jsx
// "Why Join Hack@URI?": a grid of reasons and a strip of numbers from last year.
// The text is in content/whyJoin.js.

import React from 'react';
import {
  FaChalkboardTeacher,
  FaHandshake,
  FaHeart,
  FaLaptopCode,
  FaLightbulb,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { REASONS, STATS, WHY_JOIN_INTRO } from '../content/whyJoin.js';
import './WhyJoin.css';

// The `icon` keys used in content/whyJoin.js. Add a line here to offer another icon.
const REASON_ICONS = {
  build: FaLaptopCode,
  people: FaUsers,
  learn: FaLightbulb,
  network: FaHandshake,
  workshop: FaChalkboardTeacher,
  prize: FaTrophy,
  community: FaHeart,
};

const WhyJoin = ({ eyebrow }) => (
  <>
    <SectionHeading eyebrow={eyebrow} title={WHY_JOIN_INTRO.title} lead={WHY_JOIN_INTRO.lead} />

    <ul className="why-grid">
      {REASONS.map((reason, index) => {
        const Icon = REASON_ICONS[reason.icon] ?? FaLightbulb;
        return (
          <Reveal
            as="li"
            key={reason.title}
            className={`why-card card card--interactive${reason.featured ? ' why-card--featured' : ''}`}
            // Each row of cards fades in left to right.
            delay={(index % 3) * 90}
          >
            <span className="why-icon" aria-hidden="true">
              <Icon />
            </span>
            <div>
              <h3>{reason.title}</h3>
              <p>{reason.body}</p>
            </div>
          </Reveal>
        );
      })}
    </ul>

    {STATS.items.length > 0 && (
      <Reveal className="why-stats">
        <h3 className="why-stats-heading">{STATS.heading}</h3>
        <dl className="why-stats-list">
          {STATS.items.map((stat) => (
            <div key={stat.label} className="why-stat">
              {/* dt/dd are swapped visually so the number reads first. */}
              <dt>{stat.label}</dt>
              <dd className="text-gradient">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    )}
  </>
);

export default WhyJoin;
