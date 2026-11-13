// src/sections/GetInvolved.jsx
// One card per sign-up form. The forms are listed in content/getInvolved.js:
// a form with url: null shows a disabled "Opening soon" button, and pasting in
// its link turns the button on.
//
// Each card has the id "form-<id>" so the header menu can link straight to it.

import React from 'react';
import {
  FaChalkboardTeacher,
  FaExternalLinkAlt,
  FaGavel,
  FaHandshake,
  FaHandsHelping,
  FaLaptopCode,
  FaRocket,
} from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { FORMS, GET_INVOLVED_INTRO } from '../content/getInvolved.js';
import { CONTACT } from '../content/site.js';
import './GetInvolved.css';

// The `icon` keys used in content/getInvolved.js. Add a line here to offer another icon.
const FORM_ICONS = {
  hacker: FaLaptopCode,
  judge: FaGavel,
  mentor: FaHandsHelping,
  workshop: FaChalkboardTeacher,
  sponsor: FaHandshake,
};

const GetInvolved = ({ eyebrow }) => (
  <>
    <SectionHeading eyebrow={eyebrow} title={GET_INVOLVED_INTRO.title} lead={GET_INVOLVED_INTRO.lead} />

    <ul className="involve-grid">
      {FORMS.map((form, index) => {
        const Icon = FORM_ICONS[form.icon] ?? FaRocket;
        return (
          <Reveal
            as="li"
            key={form.id}
            id={`form-${form.id}`}
            className="involve-card card card--interactive"
            delay={(index % 3) * 90}
          >
            <span className="involve-icon" aria-hidden="true">
              <Icon />
            </span>
            <h3>{form.title}</h3>
            <p>{form.description}</p>

            <div className="involve-actions">
              {form.url ? (
                <a className="btn btn--primary" href={form.url} target="_blank" rel="noopener noreferrer">
                  {form.cta} <FaExternalLinkAlt aria-hidden="true" />
                </a>
              ) : (
                <button type="button" className="btn" disabled>
                  Opening soon
                </button>
              )}
              {form.showEmail && (
                <p className="involve-email">
                  {form.url ? 'Or email' : 'In the meantime, email'}{' '}
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </p>
              )}
            </div>
          </Reveal>
        );
      })}
    </ul>
  </>
);

export default GetInvolved;
