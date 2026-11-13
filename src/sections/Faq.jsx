// src/sections/Faq.jsx
// Frequently asked questions: category tabs above an accordion of questions.
// The questions and answers are in content/faq.js.

import React, { useState } from 'react';
import Accordion from '../components/Accordion.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Tabs from '../components/Tabs.jsx';
import { FAQ_GROUPS, FAQ_TITLE } from '../content/faq.js';
import './Faq.css';

const Faq = ({ eyebrow }) => {
  const [groupId, setGroupId] = useState(FAQ_GROUPS[0].id);
  const group = FAQ_GROUPS.find((item) => item.id === groupId) ?? FAQ_GROUPS[0];

  return (
    <>
      <SectionHeading eyebrow={eyebrow} title={FAQ_TITLE} />

      <Reveal className="faq">
        <Tabs label="FAQ categories" tabs={FAQ_GROUPS} activeId={group.id} onChange={setGroupId} />
        {/* key closes any open question when the category changes */}
        <Accordion key={group.id} idPrefix={`faq-${group.id}`} items={group.items} />
      </Reveal>
    </>
  );
};

export default Faq;
