// src/pages/mini-event/MiniEventPage.jsx
// The page for the fall mini-event, opened with #mini-event (App.jsx).
// Everything on it comes from content/miniEvent.js; nothing here needs to
// change from year to year.
//
// The page is a "journey": each section is a stop on a dashed trail that runs
// down the left side. Sections with no content are left out.
//
// Props:
//   onClose  called by the Back button

import React from 'react';
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaCamera,
  FaClock,
  FaCompass,
  FaExternalLinkAlt,
  FaFlagCheckered,
  FaGem,
  FaMapMarkerAlt,
  FaRocket,
  FaScroll,
} from 'react-icons/fa';
import Accordion from '../../components/Accordion.jsx';
import PageOverlay from '../../components/PageOverlay.jsx';
import PhotoCarousel from '../../components/PhotoCarousel.jsx';
import ProjectCard from '../../components/ProjectCard.jsx';
import Reveal from '../../components/Reveal.jsx';
import SectionHeading from '../../components/SectionHeading.jsx';
import EventSchedule from './EventSchedule.jsx';
import { getPhotoKey, getPhotosFromDirectory } from '../photoDirectory.js';
import { MINI_EVENT } from '../../content/miniEvent.js';
import { EVENT } from '../../content/site.js';
import './MiniEventPage.css';

// Icons available to `stops` in content/miniEvent.js.
const STOP_ICONS = {
  rocket: FaRocket,
  compass: FaCompass,
  camera: FaCamera,
  gem: FaGem,
  scroll: FaScroll,
  flag: FaFlagCheckered,
};

// One stop on the trail: its marker, then the section's heading and content.
const JourneyStop = ({ stopId, title, lead, children }) => {
  const stop = MINI_EVENT.stops?.[stopId] ?? {};
  const Icon = STOP_ICONS[stop.icon] ?? FaRocket;

  return (
    <section className="mini-stop">
      <span className="mini-stop-pin" aria-hidden="true">
        <Icon />
      </span>
      <div className="mini-stop-body">
        {title ? (
          <SectionHeading eyebrow={stop.label} title={title} lead={lead} />
        ) : (
          stop.label && <p className="section-eyebrow">{stop.label}</p>
        )}
        {children}
      </div>
    </section>
  );
};

// The event's buttons (shown under the intro and again at the bottom).
const EventButtons = () => (
  <div className="mini-buttons">
    {(MINI_EVENT.buttons ?? []).map((button) => (
      <a
        key={button.label}
        className={`btn btn--${button.variant === 'primary' ? 'primary' : 'secondary'}`}
        href={button.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {button.label} <FaExternalLinkAlt aria-hidden="true" />
      </a>
    ))}
  </div>
);

const MiniEventPage = ({ onClose }) => {
  const { schedule, photos, projects, faq, cta } = MINI_EVENT;

  const photoList = getPhotosFromDirectory(photos?.photoDirectory, photos?.photoOrder).map((src, index) => ({
    src,
    alt: `${photos.title}, photo ${index + 1}`,
    caption: photos.captions?.[getPhotoKey(src)],
  }));

  const facts = [
    { Icon: FaCalendarAlt, label: 'Date', value: MINI_EVENT.date },
    { Icon: FaClock, label: 'Time', value: MINI_EVENT.time },
    { Icon: FaMapMarkerAlt, label: 'Location', value: MINI_EVENT.location },
  ].filter((fact) => fact.value);

  return (
    <PageOverlay label={MINI_EVENT.name}>
      <div className="page-overlay-inner mini-event">
        <button type="button" className="back-btn" onClick={onClose}>
          <FaArrowLeft aria-hidden="true" /> Back to {EVENT.title}
        </button>

        {/* ── Intro ──────────────────────────────────────────────────────── */}
        <JourneyStop stopId="hero">
          <h1 className="mini-title text-gradient">{MINI_EVENT.name}</h1>
          <p className="mini-description">{MINI_EVENT.description}</p>

          {facts.length > 0 && (
            <dl className="mini-facts">
              {facts.map((fact) => (
                <div key={fact.label} className="mini-fact">
                  <fact.Icon className="mini-fact-icon" aria-hidden="true" />
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <EventButtons />
        </JourneyStop>

        {/* ── Schedule ───────────────────────────────────────────────────── */}
        {schedule?.items?.length > 0 && (
          <JourneyStop stopId="details" title={schedule.title}>
            <EventSchedule types={schedule.types} items={schedule.items} />
          </JourneyStop>
        )}

        {/* ── Photos from a past year ────────────────────────────────────── */}
        {photoList.length > 0 && (
          <JourneyStop stopId="photos" title={photos.title} lead={photos.subtitle}>
            <Reveal className="mini-photos">
              <PhotoCarousel photos={photoList} />
            </Reveal>
          </JourneyStop>
        )}

        {/* ── Projects from a past year ──────────────────────────────────── */}
        {projects?.items?.length > 0 && (
          <JourneyStop stopId="projects" title={projects.title} lead={projects.subtitle}>
            <Reveal className="project-grid">
              {projects.items.map((project) => (
                <ProjectCard key={project.projectName} project={project} />
              ))}
            </Reveal>
            {projects.galleryUrl && (
              <p className="mini-gallery-link">
                <a className="btn btn--ghost" href={projects.galleryUrl} target="_blank" rel="noopener noreferrer">
                  {projects.galleryLabel || 'See the full project gallery'} <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </p>
            )}
          </JourneyStop>
        )}

        {/* ── FAQ ────────────────────────────────────────────────────────── */}
        {faq?.items?.length > 0 && (
          <JourneyStop stopId="faq" title={faq.title}>
            <Reveal className="mini-faq">
              <Accordion idPrefix="mini-faq" items={faq.items} />
            </Reveal>
          </JourneyStop>
        )}

        {/* ── Closing call to action ─────────────────────────────────────── */}
        <JourneyStop stopId="cta">
          <Reveal className="card mini-cta">
            <h2>{cta?.title || MINI_EVENT.name}</h2>
            {cta?.subtitle && <p>{cta.subtitle}</p>}
            <EventButtons />
          </Reveal>
        </JourneyStop>
      </div>
    </PageOverlay>
  );
};

export default MiniEventPage;
