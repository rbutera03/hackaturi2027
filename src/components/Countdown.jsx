// src/components/Countdown.jsx
// Countdown to the event. The dates come from EVENT in content/site.js; there
// is nothing to edit here from year to year.
//
// It moves through these phases on its own:
//   "calm"    more than 24 hours before EVENT.start: days / hours / minutes / seconds
//   "active"  the last 24 hours before the start, then the hacking period until
//             EVENT.submissionsDue. The colour shifts as time runs out:
//               cyan (11+ hours left), yellow (2 to 11 hours), red (under 2 hours)
//   "done"    after EVENT.submissionsDue: a closing message

import React, { useEffect, useState } from 'react';
import { EVENT } from '../content/site.js';
import './Countdown.css';

const START = new Date(EVENT.start).getTime();
const DUE = new Date(EVENT.submissionsDue).getTime();
const HOUR = 60 * 60 * 1000;

// The venue's time zone, so "Sunday at 9:00 AM" reads the same for everyone.
const EVENT_TIME_ZONE = 'America/New_York';
const dueDate = new Date(DUE);
const DUE_TEXT = `${dueDate.toLocaleDateString('en-US', { weekday: 'long', timeZone: EVENT_TIME_ZONE })} at ${dueDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: EVENT_TIME_ZONE })} ET`;

const getState = (now) => {
  if (START - now > 24 * HOUR) return { phase: 'calm', remaining: START - now };
  if (START > now) {
    return { phase: 'active', remaining: START - now, label: 'Final countdown!', sublabel: `${EVENT.name} starts soon` };
  }
  if (DUE > now) {
    return { phase: 'active', remaining: DUE - now, label: 'Hacking in progress!', sublabel: `Submissions due ${DUE_TEXT}` };
  }
  return { phase: 'done', remaining: 0 };
};

const breakdown = (ms) => {
  const totalSeconds = Math.floor(ms / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  return {
    days: Math.floor(totalHours / 24),
    hours: totalHours % 24,
    totalHours,
    minutes: totalMinutes % 60,
    seconds: totalSeconds % 60,
  };
};

const pad = (value) => String(value).padStart(2, '0');

const urgencyClass = (totalHours) => {
  if (totalHours >= 11) return 'countdown--steady';
  if (totalHours >= 2) return 'countdown--soon';
  return 'countdown--urgent';
};

const Segment = ({ value, label }) => (
  <div className="cd-seg">
    <span className="cd-num">{value}</span>
    <span className="cd-label">{label}</span>
  </div>
);

const Countdown = () => {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const state = getState(now);

  if (state.phase === 'done') {
    return (
      <div className="countdown countdown--done">
        <span aria-hidden="true">🏆</span> Submissions are closed. Amazing work, hackers!
      </div>
    );
  }

  const { days, hours, totalHours, minutes, seconds } = breakdown(state.remaining);

  if (state.phase === 'calm') {
    return (
      <div
        className="countdown"
        role="timer"
        aria-label={`${days} days, ${hours} hours and ${minutes} minutes until ${EVENT.title}`}
      >
        <p className="cd-caption">Countdown to liftoff</p>
        <div className="cd-segs" aria-hidden="true">
          <Segment value={days} label="Days" />
          <Segment value={pad(hours)} label="Hours" />
          <Segment value={pad(minutes)} label="Minutes" />
          <Segment value={pad(seconds)} label="Seconds" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`countdown countdown--active ${urgencyClass(totalHours)}`}
      role="timer"
      aria-label={`${state.label} ${state.sublabel}. ${totalHours} hours and ${minutes} minutes left.`}
    >
      <p className="cd-caption">
        <span aria-hidden="true">🚀</span> {state.label}
      </p>
      <p className="cd-sublabel">{state.sublabel}</p>
      <div className="cd-segs" aria-hidden="true">
        {totalHours >= 1 && <Segment value={pad(totalHours)} label="Hours" />}
        <Segment value={pad(minutes)} label="Minutes" />
        <Segment value={pad(seconds)} label="Seconds" />
      </div>
    </div>
  );
};

export default Countdown;
