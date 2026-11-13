// src/sections/schedule/scheduleUtils.js
// Helpers shared by UpNext, ScheduleCalendar and WorkshopModal.
// The data they read lives in src/content/schedule.js.

import { EVENT_TYPES, SPEAKERS, SPEAKER_EVENT_TYPES } from '../../content/schedule.js';

const FALLBACK_TYPE_COLOR = '#33407a';

export const getEventTypeColor = (type) => EVENT_TYPES[type]?.color || FALLBACK_TYPE_COLOR;
export const getEventTypeLabel = (type) => EVENT_TYPES[type]?.label || type;

// Finds the speaker entry for an event title (exact match first, then fuzzy).
export const getSpeakerByTitle = (title) => {
  if (!title) return null;
  const key = title.toLowerCase().trim();
  if (SPEAKERS[key]) return SPEAKERS[key];
  for (const [storedKey, data] of Object.entries(SPEAKERS)) {
    if (key.includes(storedKey) || storedKey.includes(key)) return data;
    const keyWords = key.split(/\W+/).filter((w) => w.length > 3);
    const storedWords = storedKey.split(/\W+/).filter((w) => w.length > 3);
    const overlap = keyWords.filter((w) => storedWords.includes(w));
    if (overlap.length >= 3) return data;
  }
  return null;
};

// True when an event tile should open the speaker details popup.
export const hasSpeakerDetails = (event) =>
  SPEAKER_EVENT_TYPES.includes(event.type) && Boolean(getSpeakerByTitle(event.event));

// Hour of day (0-24) for a '9:00 AM' style time. Midnight on day one counts as
// hour 24 so late-night events stay at the bottom of the first day's column.
export const parseHour = (timeStr, dayKey) => {
  const [timePart, modifier] = timeStr.split(' ');
  let hour = parseInt(timePart.split(':')[0], 10);
  if (modifier === 'PM' && hour !== 12) hour += 12;
  if (modifier === 'AM' && hour === 12) hour = dayKey === 'day1' ? 24 : 0;
  return hour;
};

export const parseEventDateTime = (dateStr, timeStr, dayKey) => {
  const minutes = parseInt(timeStr.split(' ')[0].split(':')[1], 10);
  const base = new Date(dateStr);
  base.setHours(parseHour(timeStr, dayKey), minutes, 0, 0);
  return base;
};

export const formatCountdown = (diff) => {
  if (diff <= 0) return '00:00:00';
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);
  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  parts.push(`${hours.toString().padStart(2, '0')}h`);
  parts.push(`${mins.toString().padStart(2, '0')}m`);
  parts.push(`${secs.toString().padStart(2, '0')}s`);
  return parts.join(' ');
};

// Returns a human-readable end time like "2:30 PM" for a start Date and a duration in minutes.
export const formatEndTime = (startDate, durationMinutes) => {
  if (!durationMinutes) return null;
  const end = new Date(startDate.getTime() + durationMinutes * 60 * 1000);
  const h = end.getHours();
  const m = end.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  const mm = m.toString().padStart(2, '0');
  return `${h12}:${mm} ${ampm}`;
};
