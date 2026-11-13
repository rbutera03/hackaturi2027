// src/sections/schedule/ScheduleSection.jsx
// The Schedule section on the home page.
//
// What it shows is controlled by SCHEDULE_CONFIG in content/schedule.js:
//   published: false           a "coming soon" card
//   published: true            the live "Up Next" widget, the calendar, and a
//                              button to the full-page schedule
//   showInlineCalendar: false  just the button (useful after the event)

import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import UpNext from './UpNext.jsx';
import ScheduleCalendar from './ScheduleCalendar.jsx';
import { SCHEDULE_CONFIG } from '../../content/schedule.js';
import { EVENT } from '../../content/site.js';
import './ScheduleSection.css';

const ScheduleSection = ({ eyebrow }) => {
  if (!SCHEDULE_CONFIG.published) {
    return (
      <>
        <SectionHeading eyebrow={eyebrow} title={SCHEDULE_CONFIG.title} />
        <Reveal className="schedule-soon card">
          <FaCalendarAlt className="schedule-soon-icon" aria-hidden="true" />
          <h3>Schedule coming soon</h3>
          <p className="schedule-soon-date">{EVENT.dateDisplay}</p>
          <p>{SCHEDULE_CONFIG.comingSoon}</p>
        </Reveal>
      </>
    );
  }

  return (
    <>
      <SectionHeading eyebrow={eyebrow} title={SCHEDULE_CONFIG.title} lead={EVENT.dateDisplay} />

      {SCHEDULE_CONFIG.showInlineCalendar && (
        <Reveal>
          <UpNext />
          <ScheduleCalendar />
        </Reveal>
      )}

      <Reveal className="schedule-open-full">
        <a className={`btn ${SCHEDULE_CONFIG.showInlineCalendar ? 'btn--secondary' : 'btn--primary'}`} href="#full-schedule">
          <FaCalendarAlt aria-hidden="true" /> Open the full schedule page
        </a>
      </Reveal>
    </>
  );
};

export default ScheduleSection;
