// src/pages/SchedulePage.jsx
// Full-page schedule, opened with #full-schedule (App.jsx). It reuses the same
// Up Next card and calendar as the home page section.
// Only reachable while SCHEDULE_CONFIG.published is true (content/schedule.js).

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import PageOverlay from '../components/PageOverlay.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ScheduleCalendar from '../sections/schedule/ScheduleCalendar.jsx';
import UpNext from '../sections/schedule/UpNext.jsx';
import { SCHEDULE_CONFIG } from '../content/schedule.js';
import { EVENT } from '../content/site.js';

const SchedulePage = ({ onClose }) => (
  <PageOverlay label="Full schedule">
    <div className="page-overlay-inner">
      <button type="button" className="back-btn" onClick={onClose}>
        <FaArrowLeft aria-hidden="true" /> Back to the main site
      </button>

      <SectionHeading as="h1" eyebrow={EVENT.title} title={SCHEDULE_CONFIG.title} lead={EVENT.dateDisplay} />
      <UpNext />
      <ScheduleCalendar />
    </div>
  </PageOverlay>
);

export default SchedulePage;
