import React from 'react';
import { RAPID_BUILD_PAGE } from '../data/rapidBuildContent.js';
import CtaButtonGroup from './CtaButtonGroup.jsx';

const CtaSection = () => {
  const { cta } = RAPID_BUILD_PAGE;

  return (
    <section className="rb-section rb-cta">
      <div className="rb-cta-inner panel-card">
        <h2 className="rb-section-title">{cta.sectionTitle}</h2>
        <p className="rb-section-subtitle">{cta.sectionSubtitle}</p>
        <CtaButtonGroup />
      </div>
    </section>
  );
};

export default CtaSection;
