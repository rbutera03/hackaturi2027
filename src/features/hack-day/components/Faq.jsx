import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { RAPID_BUILD_PAGE } from '../data/rapidBuildContent.js';

const Faq = () => {
  const { faqs } = RAPID_BUILD_PAGE;
  const [openItems, setOpenItems] = useState({});
  const answerRefs = useRef({});

  const toggleItem = (index) => {
    const key = `faq-${index}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const calculateHeight = (element) => {
      if (!element) return 0;
      const clone = element.cloneNode(true);
      Object.assign(clone.style, {
        position: 'absolute',
        visibility: 'hidden',
        height: 'auto',
        maxHeight: 'none',
        padding: '0 22px 20px',
        opacity: '1',
        overflow: 'visible',
        width: `${element.offsetWidth}px`,
        boxSizing: 'border-box',
        margin: '0',
      });
      document.body.appendChild(clone);
      const height = clone.scrollHeight;
      document.body.removeChild(clone);
      return height;
    };

    Object.values(answerRefs.current).forEach((el) => {
      if (el) el.style.maxHeight = '0px';
    });

    requestAnimationFrame(() => {
      Object.keys(answerRefs.current).forEach((key) => {
        const el = answerRefs.current[key];
        if (el && openItems[key]) {
          el.style.maxHeight = `${calculateHeight(el)}px`;
        }
      });
    });
  }, [openItems]);

  return (
    <section className="rb-section rb-faq">
      <h2 className="rb-section-title">{faqs.sectionTitle}</h2>
      <div className="rb-faq-list">
        {faqs.items.map((item, index) => {
          const key = `faq-${index}`;
          const isOpen = !!openItems[key];

          return (
            <div key={item.question} className={`rb-faq-item panel-card ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="rb-faq-question"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <FaChevronDown className={`rb-faq-arrow ${isOpen ? 'open' : ''}`} aria-hidden="true" />
              </button>
              <div
                ref={(el) => { answerRefs.current[key] = el; }}
                className={`rb-faq-answer ${isOpen ? 'open' : ''}`}
              >
                {item.answer && <p>{item.answer}</p>}
                {item.bullets && (
                  <ul className="rb-faq-bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
