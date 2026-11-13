// src/sections/schedule/UpNext.jsx
// Live "Happening now / Up next" card. It reads the schedule and the visitor's
// clock, so it only appears while there is something on now or still to come.
// Sessions with a speaker entry open the speaker popup (WorkshopModal).

import React, { useEffect, useMemo, useState } from 'react';
import { FaClock, FaHourglassHalf, FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa';
import { SCHEDULE } from '../../content/schedule.js';
import {
  formatCountdown,
  formatEndTime,
  getEventTypeColor,
  getEventTypeLabel,
  hasSpeakerDetails,
  parseEventDateTime,
} from './scheduleUtils.js';
import WorkshopModal from './WorkshopModal.jsx';
import './UpNext.css';

// Every event with real start and end times, in schedule order.
const ALL_EVENTS = Object.entries(SCHEDULE).flatMap(([dayKey, day]) =>
  day.events.map((event) => {
    const start = parseEventDateTime(day.date, event.time, dayKey);
    const end = event.duration ? new Date(start.getTime() + event.duration * 60 * 1000) : start;
    return { ...event, day: day.date, start, end };
  })
);

const EventRow = ({ event, onSelect }) => {
  const isClickable = hasSpeakerDetails(event);
  const Tag = isClickable ? 'button' : 'div';
  const endTime = formatEndTime(event.start, event.duration);
  return (
    <li>
      <Tag
        className={`upnext-event${isClickable ? ' is-clickable' : ''}`}
        {...(isClickable ? { type: 'button', onClick: () => onSelect(event) } : {})}
      >
        <span className="upnext-event-info">
          <span className="upnext-event-title">
            {event.event}
            {isClickable && <FaUserCircle aria-label="(speaker details available)" />}
          </span>
          <span className="upnext-event-meta">
            <span>
              <FaClock aria-hidden="true" /> {event.time}
              {endTime ? ` – ${endTime}` : ''}
            </span>
            {event.location && (
              <span>
                <FaMapMarkerAlt aria-hidden="true" /> {event.location}
              </span>
            )}
          </span>
        </span>
        <span className="upnext-event-type" style={{ background: getEventTypeColor(event.type) }}>
          {getEventTypeLabel(event.type)}
        </span>
      </Tag>
    </li>
  );
};

const UpNext = () => {
  const [now, setNow] = useState(() => new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Rounded to the minute so the lists are not rebuilt every second.
  const minute = Math.floor(now.getTime() / 60000);
  const { nowEvents, nextEvents } = useMemo(() => {
    const time = minute * 60000;
    const upcoming = ALL_EVENTS.filter((event) => event.start.getTime() > time);
    const nextStart = upcoming.length > 0 ? Math.min(...upcoming.map((event) => event.start.getTime())) : null;
    return {
      nowEvents: ALL_EVENTS.filter((event) => event.duration > 0 && event.start.getTime() <= time && event.end.getTime() > time),
      // Everything that starts at the next start time (several sessions can share a slot).
      nextEvents: upcoming.filter((event) => event.start.getTime() === nextStart),
    };
  }, [minute]);

  if (nowEvents.length === 0 && nextEvents.length === 0) return null;

  return (
    <>
      <div className="upnext card">
        {nowEvents.length > 0 && (
          <section>
            <h3 className="upnext-label upnext-label--now">
              <span className="upnext-dot" aria-hidden="true" />
              Happening now
            </h3>
            <ul className="upnext-list">
              {nowEvents.map((event) => (
                <EventRow key={`${event.day}-${event.time}-${event.event}`} event={event} onSelect={setSelectedEvent} />
              ))}
            </ul>
          </section>
        )}

        {nextEvents.length > 0 && (
          <section>
            <h3 className="upnext-label">
              <span className="upnext-dot" aria-hidden="true" />
              Up next
              <span className="upnext-countdown">
                <FaHourglassHalf aria-hidden="true" /> starts in {formatCountdown(nextEvents[0].start - now)}
              </span>
            </h3>
            <ul className="upnext-list">
              {nextEvents.map((event) => (
                <EventRow key={`${event.day}-${event.time}-${event.event}`} event={event} onSelect={setSelectedEvent} />
              ))}
            </ul>
          </section>
        )}
      </div>

      {selectedEvent && <WorkshopModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </>
  );
};

export default UpNext;
