import React from 'react';
import pirateLogo from '../../../assets/pirate_ram.svg';
import { RAPID_BUILD_PAGE } from '../data/rapidBuildContent.js';
import CtaButtonGroup from './CtaButtonGroup.jsx';

const Hero = () => {
  const { hero } = RAPID_BUILD_PAGE;

  return (
    <section className="rb-hero">
      <div className="rb-hero-art">
        <div className="rb-pirate-logo-wrap">
          <img src={pirateLogo} alt="Hack@URI Pirate Logo" className="rb-pirate-logo" />
        </div>
      </div>
      <div className="rb-hero-copy panel-card">
        <p className="rb-hero-eyebrow">Hack@URI Presents</p>
        <h1 className="rb-hero-title">{hero.title}</h1>
        <p className="rb-hero-description">{hero.description}</p>
        <CtaButtonGroup className="rb-hero-ctas" />
      </div>
    </section>
  );
};

export default Hero;
