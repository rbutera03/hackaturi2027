// src/sections/Tracks.jsx
// The hackathon tracks, shown as a grid of "planet" cards. Selecting a card
// opens its mission brief (description and example project ideas).
// The tracks themselves are in content/tracks.js.

import React, { useState } from 'react';
import { FaAtom, FaBrain, FaChevronDown, FaCoins, FaGamepad, FaGlobeAmericas, FaRocket } from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { TRACKS, TRACKS_INTRO } from '../content/tracks.js';
import './Tracks.css';

// The `icon` keys used in content/tracks.js. Add a line here to offer another icon.
const TRACK_ICONS = {
  brain: FaBrain,
  atom: FaAtom,
  coins: FaCoins,
  globe: FaGlobeAmericas,
  gamepad: FaGamepad,
  rocket: FaRocket,
};

const Tracks = ({ eyebrow }) => {
  // Ids of the cards whose mission brief is open (several can be open at once).
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) =>
    setOpenIds((ids) => (ids.includes(id) ? ids.filter((openId) => openId !== id) : [...ids, id]));

  return (
    <>
      <SectionHeading eyebrow={eyebrow} title={TRACKS_INTRO.title} lead={TRACKS_INTRO.lead} />

      <ul className="tracks-grid">
        {TRACKS.map((track, index) => {
          const Icon = TRACK_ICONS[track.icon] ?? FaRocket;
          const isOpen = openIds.includes(track.id);
          const briefId = `track-brief-${track.id}`;
          return (
            <Reveal
              as="li"
              key={track.id}
              className={`card track-card${isOpen ? ' is-open' : ''}`}
              style={{ '--track-accent': `var(--accent-${track.accent})` }}
              delay={(index % 3) * 90}
            >
              <span className={`track-planet track-planet--${track.motion}`} aria-hidden="true">
                <span className="track-planet-body">
                  <Icon />
                </span>
              </span>

              <h3 className="track-name">{track.name}</h3>
              <p className="track-tagline">{track.tagline}</p>

              {/* The button's hit area is stretched over the whole card in Tracks.css. */}
              <button
                type="button"
                className="track-toggle"
                aria-expanded={isOpen}
                aria-controls={briefId}
                onClick={() => toggle(track.id)}
              >
                {isOpen ? 'Close mission brief' : 'Open mission brief'}
                <span className="visually-hidden">: {track.name}</span>
                <FaChevronDown className="track-chevron" aria-hidden="true" />
              </button>

              <div id={briefId} className="track-brief">
                <div className="track-brief-inner">
                  <p>{track.description}</p>
                  {track.ideas?.length > 0 && (
                    <>
                      <h4>Ideas to get you started</h4>
                      <ul className="track-ideas">
                        {track.ideas.map((idea) => (
                          <li key={idea}>{idea}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </>
  );
};

export default Tracks;
