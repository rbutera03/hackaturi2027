// src/components/SectionHeading.jsx
// The heading block at the top of every section: optional small eyebrow line,
// the title, and an optional lead sentence. Styles: .section-heading in base.css.

import React from 'react';
import Reveal from './Reveal.jsx';

// Props:
//   eyebrow, title, lead  the text (eyebrow and lead are optional)
//   as                    heading tag for the title: 'h2' (default) or 'h1' on a page of its own
const SectionHeading = ({ eyebrow, title, lead, as = 'h2' }) => {
  const TitleTag = as;
  return (
    <Reveal as="header" className="section-heading">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <TitleTag className="section-title">{title}</TitleTag>
      {lead && <p className="section-lead">{lead}</p>}
    </Reveal>
  );
};

export default SectionHeading;
