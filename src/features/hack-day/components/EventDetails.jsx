import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { RAPID_BUILD_PAGE } from '../data/rapidBuildContent.js';

const EventDetails = () => {
  const { eventDetails } = RAPID_BUILD_PAGE;

  return (
    <section className="rb-section rb-event-details">
      <h2 className="rb-section-title">{eventDetails.sectionTitle}</h2>
      <div className="rb-event-meta panel-card">
        <div className="rb-event-meta-row">
          <FaCalendarAlt aria-hidden="true" />
          <span>{eventDetails.date}</span>
        </div>
        <div className="rb-event-meta-row">
          <FaClock aria-hidden="true" />
          <span>{eventDetails.time}</span>
        </div>
        <div className="rb-event-meta-row">
          <FaMapMarkerAlt aria-hidden="true" />
          <span>{eventDetails.location}</span>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
