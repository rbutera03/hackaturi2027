// src/components/RegistrationPrompts.jsx
// Two nudges to register: a popup shown once per browser session, and a small
// card that floats in the corner until dismissed.
//
// Nothing to edit here. They are controlled by REGISTRATION_PROMPTS in
// content/getInvolved.js and only appear when ALL of these are true:
//   - REGISTRATION_PROMPTS.enabled is true
//   - the registration form has a url
//   - the deadline (if one is set) has not passed

import React, { useEffect, useRef, useState } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import { REGISTRATION_PROMPTS, REGISTRATION_URL } from '../content/getInvolved.js';
import './RegistrationPrompts.css';

// Remembers that the popup was closed, for this browser session only.
const SESSION_KEY = 'hackaturi-reg-popup-seen';
const DAY = 24 * 60 * 60 * 1000;

const getDaysLeft = () =>
  REGISTRATION_PROMPTS.deadline ? Math.ceil((new Date(REGISTRATION_PROMPTS.deadline).getTime() - Date.now()) / DAY) : null;

const wasPopupSeen = () => {
  try {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch {
    return false;
  }
};

const RegistrationPrompts = () => {
  const [daysLeft] = useState(getDaysLeft);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(true);
  const closeButtonRef = useRef(null);

  const isActive =
    REGISTRATION_PROMPTS.enabled && Boolean(REGISTRATION_URL) && (daysLeft === null || daysLeft >= 0);

  // Show the popup shortly after the page loads, once per session.
  useEffect(() => {
    if (!isActive || wasPopupSeen()) return undefined;
    const timer = setTimeout(() => setIsPopupOpen(true), 800);
    return () => clearTimeout(timer);
  }, [isActive]);

  const closePopup = () => {
    setIsPopupOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch {
      // Storage blocked: the popup may show again on the next page load.
    }
  };

  // While the popup is open: focus it, close on Escape, stop the page scrolling.
  useEffect(() => {
    if (!isPopupOpen) return undefined;
    closeButtonRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsPopupOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.documentElement.classList.add('has-modal');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.documentElement.classList.remove('has-modal');
    };
  }, [isPopupOpen]);

  if (!isActive) return null;

  const daysText = daysLeft === null ? null : daysLeft === 0 ? 'Last day to register!' : `${daysLeft} day${daysLeft === 1 ? '' : 's'} left to register`;

  return (
    <>
      {isPopupOpen && (
        <div
          className="reg-popup-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) closePopup();
          }}
        >
          <div className="reg-popup card" role="dialog" aria-modal="true" aria-labelledby="reg-popup-title">
            <button ref={closeButtonRef} type="button" className="reg-close" onClick={closePopup} aria-label="Close">
              <FaTimes aria-hidden="true" />
            </button>
            <h2 id="reg-popup-title">{REGISTRATION_PROMPTS.popupTitle}</h2>
            <p>{REGISTRATION_PROMPTS.popupBody}</p>
            {daysText && <p className="reg-days">{daysText}</p>}
            <a
              className="btn btn--primary"
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closePopup}
            >
              {REGISTRATION_PROMPTS.cta} <FaArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      {isCardOpen && !isPopupOpen && (
        <aside className="reg-card" aria-label="Registration">
          <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
            <strong>{REGISTRATION_PROMPTS.floatingHeadline}</strong>
            {daysText && <span className="reg-days">{daysText}</span>}
            <span className="reg-card-cta">
              {REGISTRATION_PROMPTS.cta} <FaArrowRight aria-hidden="true" />
            </span>
          </a>
          <button type="button" className="reg-close" onClick={() => setIsCardOpen(false)} aria-label="Dismiss">
            <FaTimes aria-hidden="true" />
          </button>
        </aside>
      )}
    </>
  );
};

export default RegistrationPrompts;
