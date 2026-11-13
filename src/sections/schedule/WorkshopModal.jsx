// src/sections/schedule/WorkshopModal.jsx
// Popup with a session's speaker (photo, role, bio) and description. Opened by
// selecting a session in the calendar or the Up Next card.
// Speaker details are SPEAKERS in content/schedule.js.
//
// Props:
//   event    the selected schedule event (with .day added)
//   onClose  called to close the popup

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaClock, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import { getEventTypeColor, getEventTypeLabel, getSpeakerByTitle } from './scheduleUtils.js';
import './WorkshopModal.css';

const getInitials = (name) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2);

const WorkshopModal = ({ event, onClose }) => {
  const speaker = getSpeakerByTitle(event.event);
  const [photoFailed, setPhotoFailed] = useState(false);
  const closeButtonRef = useRef(null);

  // Always call the latest onClose without re-running the effect below.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  // While open: focus the popup, close on Escape, stop the page behind scrolling,
  // and hand focus back to the session that opened it afterwards.
  useEffect(() => {
    const opener = document.activeElement;
    closeButtonRef.current?.focus();
    const onKeyDown = (keyEvent) => {
      if (keyEvent.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', onKeyDown);
    document.documentElement.classList.add('has-modal');
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.documentElement.classList.remove('has-modal');
      opener?.focus?.();
    };
  }, []);

  return createPortal(
    <div
      className="wm-backdrop"
      onClick={(clickEvent) => {
        if (clickEvent.target === clickEvent.currentTarget) onClose();
      }}
    >
      <div
        className="wm-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="wm-title"
        style={{ '--event-color': getEventTypeColor(event.type) }}
      >
        <header className="wm-header">
          <span className="wm-type">{getEventTypeLabel(event.type)}</span>
          <h2 id="wm-title">{event.event}</h2>
          <p className="wm-meta">
            <span>
              <FaClock aria-hidden="true" /> {event.day} · {event.time}
            </span>
            {event.location && (
              <span>
                <FaMapMarkerAlt aria-hidden="true" /> {event.location}
              </span>
            )}
          </p>
          <button ref={closeButtonRef} type="button" className="wm-close" onClick={onClose} aria-label="Close">
            <FaTimes aria-hidden="true" />
          </button>
        </header>

        <div className="wm-body">
          {speaker ? (
            <>
              <section className="wm-speaker">
                {speaker.image && !photoFailed ? (
                  <img className="wm-photo" src={speaker.image} alt="" loading="lazy" onError={() => setPhotoFailed(true)} />
                ) : (
                  <span className="wm-photo wm-photo--initials" aria-hidden="true">
                    {getInitials(speaker.name)}
                  </span>
                )}
                <div>
                  <h3>{speaker.name}</h3>
                  {speaker.role && <p className="wm-role">{speaker.role}</p>}
                  {speaker.company && <p className="wm-company">{speaker.company}</p>}
                </div>
                {speaker.bio && <p className="wm-bio">{speaker.bio}</p>}
              </section>

              {speaker.description && (
                <section>
                  <h3 className="wm-section-title">About this session</h3>
                  <p>{speaker.description}</p>
                </section>
              )}
            </>
          ) : (
            <p>Details for this session will be posted soon. Check back before the event!</p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default WorkshopModal;
