// src/pages/archive/Winners.jsx
// The winners section of an archive page.
//
// Props:
//   title, subtitle  heading text
//   winners          the event's winners.items (see content/archive/index.js)
//   announced        false shows a "not announced yet" message instead
//   showImages       false hides the project screenshots

import React from 'react';
import ProjectCard from '../../components/ProjectCard.jsx';
import './Winners.css';

const Winners = ({ title = 'Event Winners', subtitle = '', winners = [], announced = true, showImages = true }) => (
  <section className="winners">
    <header className="winners-header">
      {subtitle && <p className="winners-eyebrow">{subtitle}</p>}
      <h2 className="winners-title">{title}</h2>
    </header>

    {announced ? (
      <div className="project-grid">
        {winners.map((winner) => (
          <ProjectCard key={winner.projectName} project={winner} showImage={showImages} />
        ))}
      </div>
    ) : (
      <div className="winners-tbd">
        <span className="winners-tbd-icon" aria-hidden="true">
          🏆
        </span>
        <p>Winners have not been announced for this event yet.</p>
      </div>
    )}
  </section>
);

export default Winners;
