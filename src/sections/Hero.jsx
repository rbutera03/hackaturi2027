// src/sections/Hero.jsx
// The top of the home page: event name, date, tagline, countdown and main buttons,
// beside the astronaut ram. All text comes from EVENT in content/site.js.
//
// - The Register button turns on by itself once the registration form has a
//   url in content/getInvolved.js.
// - Set HERO_CALLOUT in content/site.js to replace the countdown with a message
//   (used after the event).

import React, { useEffect, useRef } from 'react';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import Countdown from '../components/Countdown.jsx';
import { EVENT, HERO_CALLOUT } from '../content/site.js';
import { REGISTRATION_URL } from '../content/getInvolved.js';
import { MINI_EVENT, MINI_EVENT_HASH } from '../content/miniEvent.js';
import spaceRam from '../assets/space-ram.webp';
import './Hero.css';

const Hero = () => {
  const artRef = useRef(null);

  // The art leans a little toward the mouse. Skipped on touch screens and for
  // visitors who prefer reduced motion.
  useEffect(() => {
    const art = artRef.current;
    const canTilt =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!art || !canTilt) return undefined;

    let frame = 0;
    const onPointerMove = (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        art.style.setProperty('--tilt-x', (event.clientX / window.innerWidth - 0.5).toFixed(3));
        art.style.setProperty('--tilt-y', (event.clientY / window.innerHeight - 0.5).toFixed(3));
      });
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-copy">
        <p className="hero-eyebrow">
          <span>{EVENT.dateDisplay}</span>
          <span>{EVENT.venue}</span>
        </p>

        <h1 className="hero-title">
          {EVENT.name} <span className="text-gradient">{EVENT.year}</span>
        </h1>
        <p className="hero-tagline">{EVENT.tagline}</p>
        <p className="hero-description">{EVENT.description}</p>

        {HERO_CALLOUT ? (
          <div className="hero-callout card">
            <p>{HERO_CALLOUT.text}</p>
            {HERO_CALLOUT.href && (
              <a className="btn btn--secondary" href={HERO_CALLOUT.href}>
                {HERO_CALLOUT.linkLabel} <FaArrowRight aria-hidden="true" />
              </a>
            )}
          </div>
        ) : (
          <Countdown />
        )}

        <div className="hero-actions">
          {REGISTRATION_URL ? (
            <a className="btn btn--primary" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
              Register now <FaArrowRight aria-hidden="true" />
            </a>
          ) : (
            <button type="button" className="btn" disabled>
              Registration opening soon
            </button>
          )}
          <a className="btn btn--secondary" href="#tracks">
            Explore the tracks
          </a>
          {MINI_EVENT.enabled && (
            <a className="btn btn--ghost" href={MINI_EVENT_HASH}>
              {MINI_EVENT.name} <FaArrowRight aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <div className="hero-art" ref={artRef}>
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-orbit hero-orbit--outer" aria-hidden="true">
          <span className="hero-planet hero-planet--pink" />
          <span className="hero-planet hero-planet--cyan" />
        </div>
        <div className="hero-orbit hero-orbit--inner" aria-hidden="true">
          <span className="hero-planet hero-planet--yellow" />
        </div>
        <div className="hero-ram-wrap">
          <img
            className="hero-ram"
            src={spaceRam}
            alt="The Hack@URI mascot: a ram in an astronaut helmet"
            width="671"
            height="816"
            fetchPriority="high"
          />
        </div>
      </div>

      <a className="hero-scroll" href="#about">
        <span className="visually-hidden">Scroll to learn more</span>
        <FaChevronDown aria-hidden="true" />
      </a>
    </div>
  );
};

export default Hero;
