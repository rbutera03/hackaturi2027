// src/sections/schedule/ScheduleCalendar.jsx
// The schedule as one column per day, with a colour legend. Sessions that have
// a speaker entry open the speaker popup (WorkshopModal).
// Used by the home page section and by the full schedule page.
// The events are in content/schedule.js.

import React, { useState } from 'react';
import { FaChevronDown, FaClock, FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa';
import { EVENT_TYPES, SCHEDULE } from '../../content/schedule.js';
import { getEventTypeColor, getEventTypeLabel, hasSpeakerDetails, parseHour } from './scheduleUtils.js';
import WorkshopModal from './WorkshopModal.jsx';
import './ScheduleCalendar.css';

const DAYS = Object.entries(SCHEDULE);
const HAS_SPEAKER_SESSIONS = DAYS.some(([, day]) => day.events.some(hasSpeakerDetails));

// 13 -> "1:00 PM". Hours past 23 belong to the next morning (24 -> "12:00 AM").
const formatHourLabel = (rawHour) => {
  const hour = rawHour % 24;
  return `${hour % 12 || 12}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
};

const EventTile = ({ event, onSelect, isMilestone = false }) => {
  const isClickable = !isMilestone && hasSpeakerDetails(event);
  const Tag = isClickable ? 'button' : 'div';
  return (
    <Tag
      className={`cal-event${isMilestone ? ' cal-event--milestone' : ''}${isClickable ? ' is-clickable' : ''}`}
      style={{ '--event-color': getEventTypeColor(event.type) }}
      {...(isClickable ? { type: 'button', onClick: () => onSelect(event) } : {})}
    >
      <span className="cal-event-title">
        {event.event}
        {isClickable && <FaUserCircle className="cal-event-speaker" aria-label="(speaker details available)" />}
      </span>
      <span className="cal-event-meta">
        <span>
          <FaClock aria-hidden="true" /> {event.time}
        </span>
        {event.location && (
          <span>
            <FaMapMarkerAlt aria-hidden="true" /> {event.location}
          </span>
        )}
      </span>
      {!isMilestone && <span className="cal-event-type">{getEventTypeLabel(event.type)}</span>}
    </Tag>
  );
};

const DayColumn = ({ dayKey, day, onSelect }) => {
  const [isOpen, setIsOpen] = useState(true);
  const gridId = `calendar-${dayKey}`;

  // One row per hour, from the day's first event to its last.
  const eventHours = day.events.map((event) => parseHour(event.time, dayKey));
  const firstHour = Math.min(...eventHours);
  const lastHour = Math.max(...eventHours);
  const hours = Array.from({ length: lastHour - firstHour + 1 }, (_, index) => firstHour + index);

  return (
    <div className="cal-day">
      <h3 className="cal-day-heading">
        <button type="button" aria-expanded={isOpen} aria-controls={gridId} onClick={() => setIsOpen((open) => !open)}>
          {day.date}
          <FaChevronDown className={`cal-day-chevron${isOpen ? ' is-open' : ''}`} aria-hidden="true" />
        </button>
      </h3>

      <div id={gridId} className="cal-grid" hidden={!isOpen}>
        {hours.map((hour) => {
          const eventsThisHour = day.events.filter((event) => parseHour(event.time, dayKey) === hour);
          const milestones = eventsThisHour.filter((event) => event.hero);
          const regular = eventsThisHour.filter((event) => !event.hero);
          return (
            <React.Fragment key={hour}>
              {/* hero: true events are full-width milestone banners */}
              {milestones.map((event) => (
                <EventTile key={`${event.time}-${event.event}`} event={event} isMilestone />
              ))}
              <div className="cal-slot">
                <div className="cal-time">{formatHourLabel(hour)}</div>
                <div className="cal-events">
                  {regular.map((event) => (
                    <EventTile
                      key={`${event.time}-${event.event}`}
                      event={event}
                      onSelect={(selected) => onSelect({ ...selected, day: day.date })}
                    />
                  ))}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const ScheduleCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      {HAS_SPEAKER_SESSIONS && (
        <p className="cal-tip">
          Select any session marked with <FaUserCircle aria-label="the speaker icon" /> to learn more about the
          speaker.
        </p>
      )}

      <div className="cal-legend">
        <h3 className="visually-hidden">Event types</h3>
        <ul>
          {Object.entries(EVENT_TYPES).map(([type, { label, color }]) => (
            <li key={type}>
              <span className="cal-legend-swatch" style={{ background: color }} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="cal-days">
        {DAYS.map(([dayKey, day]) => (
          <DayColumn key={dayKey} dayKey={dayKey} day={day} onSelect={setSelectedEvent} />
        ))}
      </div>

      {selectedEvent && <WorkshopModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </>
  );
};

export default ScheduleCalendar;
