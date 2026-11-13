// src/components/Accordion.jsx
// A list of questions that expand to show their answers, one open at a time.
// Used by the FAQ section and the mini-event page.
//
// Props:
//   idPrefix  unique text used to build element ids (e.g. "faq-general")
//   items     [{ question, answer, bullets }]
//               answer   a string, or a list mixing strings and links:
//                        ['See the ', { text: 'parking map', href: 'https://…' }, '.']
//                        Links starting with # jump to a section of this site.
//               bullets  optional list of strings shown under the answer

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import './Accordion.css';

const renderAnswer = (answer) =>
  (Array.isArray(answer) ? answer : [answer]).map((part, index) => {
    if (typeof part === 'string') return part;
    const isExternal = /^https?:/.test(part.href);
    return (
      <a
        key={index}
        href={part.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {part.text}
      </a>
    );
  });

const Accordion = ({ idPrefix, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ul className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${idPrefix}-${index}`;
        return (
          <li key={item.question} className={`accordion-item${isOpen ? ' is-open' : ''}`}>
            <h3 className="accordion-question">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <FaChevronDown className="accordion-chevron" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} className="accordion-panel">
              <div className="accordion-panel-inner">
                {item.answer && <p>{renderAnswer(item.answer)}</p>}
                {item.bullets?.length > 0 && (
                  <ul className="accordion-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
