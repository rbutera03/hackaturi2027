// src/sections/About.jsx
// "About Hack@URI": a few paragraphs beside a quick-facts card.
// The text is ABOUT in content/site.js.

import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt, FaUserAstronaut } from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { ABOUT } from '../content/site.js';
import './About.css';

// Icon for each fact, matched by its label. Facts with other labels get no icon.
const FACT_ICONS = {
  When: FaCalendarAlt,
  Where: FaMapMarkerAlt,
  Who: FaUserAstronaut,
  Cost: FaTicketAlt,
};

const About = ({ eyebrow }) => (
  <>
    <SectionHeading eyebrow={eyebrow} title={ABOUT.title} />

    <div className="about-layout">
      <Reveal className="about-text">
        {ABOUT.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </Reveal>

      <Reveal as="dl" className="about-facts card" delay={120}>
        {ABOUT.facts.map(({ label, value }) => {
          const Icon = FACT_ICONS[label];
          return (
            <div key={label} className="about-fact">
              <dt>
                {Icon && <Icon aria-hidden="true" />}
                {label}
              </dt>
              <dd>{value}</dd>
            </div>
          );
        })}
      </Reveal>
    </div>
  </>
);

export default About;
