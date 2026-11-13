// src/pages/mini-event/EventSchedule.jsx
// The mini-event's one-day schedule: a colour key, then the day as a timeline.
//
// Props (both from MINI_EVENT.schedule in content/miniEvent.js):
//   types  [{ id, label, accent }]   kinds of item and their colours
//   items  [{ time, title, type, emoji, location, description, highlight }]

import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Reveal from '../../components/Reveal.jsx';

// Each type's colour is one of the theme's accent tokens (tokens.css).
const accentStyle = (type) => ({ '--ev-color': `var(--accent-${type?.accent ?? 'cyan'})` });

const EventSchedule = ({ types = [], items = [] }) => {
  const typesById = Object.fromEntries(types.map((type) => [type.id, type]));
  // Only list the types that are actually used.
  const usedTypes = types.filter((type) => items.some((item) => item.type === type.id));

  return (
    <Reveal className="mini-schedule">
      {usedTypes.length > 0 && (
        <ul className="mini-schedule-key" aria-label="Schedule colour key">
          {usedTypes.map((type) => (
            <li key={type.id} style={accentStyle(type)}>
              <span className="mini-schedule-dot" aria-hidden="true" />
              {type.label}
            </li>
          ))}
        </ul>
      )}

      <ol className="mini-schedule-list">
        {items.map((item) => {
          const type = typesById[item.type];
          return (
            <li
              key={`${item.time}-${item.title}`}
              className={`mini-schedule-item${item.highlight ? ' is-highlight' : ''}`}
              style={accentStyle(type)}
            >
              <p className="mini-schedule-time">{item.time}</p>
              <div className="mini-schedule-main">
                <h3 className="mini-schedule-title">
                  {item.emoji && (
                    <span className="mini-schedule-emoji" aria-hidden="true">
                      {item.emoji}
                    </span>
                  )}
                  {item.title}
                </h3>
                <p className="mini-schedule-meta">
                  {type && <span className="mini-schedule-type">{type.label}</span>}
                  {item.location && (
                    <span className="mini-schedule-location">
                      <FaMapMarkerAlt aria-hidden="true" /> {item.location}
                    </span>
                  )}
                </p>
                {item.description && <p className="mini-schedule-description">{item.description}</p>}
              </div>
            </li>
          );
        })}
      </ol>
    </Reveal>
  );
};

export default EventSchedule;
