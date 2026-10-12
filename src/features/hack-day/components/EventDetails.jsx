import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { RAPID_BUILD_PAGE } from '../data/rapidBuildContent.js';

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

const formatHour = (hour) => `${hour % 12 || 12} ${hour < 12 ? 'AM' : 'PM'}`;

// Group schedule items by the hour they START in. Every hour in the day gets a
// row, even if nothing starts in it (that row is simply left blank).
const buildHours = (schedule) => {
  const items = schedule.map((item) => ({
    ...item,
    startMin: toMinutes(item.start),
    endMin: toMinutes(item.end),
  }));

  const firstHour = Math.floor(Math.min(...items.map((i) => i.startMin)) / 60);
  const lastHour = Math.floor((Math.max(...items.map((i) => i.endMin)) - 1) / 60);

  const hours = [];
  for (let hour = firstHour; hour <= lastHour; hour += 1) {
    const hourStart = hour * 60;
    const hourEnd = hourStart + 60;
    const events = items
      .filter((i) => i.startMin >= hourStart && i.startMin < hourEnd)
      .sort((a, b) => a.startMin - b.startMin);
    hours.push({ hour, events });
  }
  return hours;
};

const EventDetails = () => {
  const { eventDetails } = RAPID_BUILD_PAGE;
  const hours = buildHours(eventDetails.schedule);

  return (
    <section className="rb-section rb-event-details">
      <h2 className="rb-section-title">{eventDetails.sectionTitle}</h2>

      <div className="rb-event-board panel-card">
        <div className="rb-event-meta">
          <div className="rb-event-meta-item">
            <FaCalendarAlt aria-hidden="true" />
            <span>{eventDetails.date}</span>
          </div>
          <div className="rb-event-meta-item">
            <FaClock aria-hidden="true" />
            <span>{eventDetails.time}</span>
          </div>
          <div className="rb-event-meta-item">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>{eventDetails.location}</span>
          </div>
        </div>

        <ul className="rb-legend" aria-label="Event types">
          {eventDetails.scheduleTypes.map((type) => (
            <li key={type.id} className={`rb-legend-item rb-type--${type.id}`}>
              <span className="rb-legend-dot" aria-hidden="true" />
              {type.label}
            </li>
          ))}
        </ul>

        <ol className="rb-hours">
          {hours.map(({ hour, events }) => (
            <li key={hour} className="rb-hour">
              <span className="rb-hour-label">{formatHour(hour)}</span>
              <div className="rb-hour-events">
                {events.map((item) => (
                  <div
                    key={`${hour}-${item.start}-${item.title}`}
                    className={[
                      'rb-hour-event',
                      item.type && `rb-type--${item.type}`,
                      item.highlight && 'rb-hour-event--highlight',
                      item.description && 'rb-hour-event--has-desc',
                    ].filter(Boolean).join(' ')}
                    tabIndex={item.description ? 0 : undefined}
                  >
                    <time className="rb-hour-event-time">{item.time}</time>
                    <div className="rb-hour-event-body">
                      <span className="rb-hour-event-title">
                        {item.title}
                        {item.emoji ? (
                          <span className="rb-hour-event-emoji" aria-hidden="true"> {item.emoji}</span>
                        ) : null}
                      </span>
                      {item.hosts && (
                        <span className="rb-hour-event-hosts">{item.hosts}</span>
                      )}
                    </div>
                    {item.location && (
                      <span className="rb-hour-event-location">
                        <FaMapMarkerAlt aria-hidden="true" />
                        {item.location}
                      </span>
                    )}
                    {item.description && (
                      <p className="rb-hour-event-desc">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default EventDetails;
