// src/pages/archive/ArchivePage.jsx
// The page for one past event, opened with #archive-<id> (App.jsx): photo
// slideshow, write-up, link to the project gallery, and the winners.
//
// The event's content is in content/archive/. If the event names a `theme`,
// that theme's class is put on the page body so the event keeps the look it
// had when it ran (see src/theme/archive/). The site header above it always
// stays in the current site theme.
//
// Props:
//   eventId         id of the event in content/archive/
//   onClose         called by the Back button
//   showSiteHeader  show the site header above the page (false on the landing page)

import React, { useState } from 'react';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import Header from '../../components/Header.jsx';
import PageOverlay from '../../components/PageOverlay.jsx';
import PhotoCarousel from '../../components/PhotoCarousel.jsx';
import Winners from './Winners.jsx';
import { getPhotosFromDirectory } from '../photoDirectory.js';
import { ARCHIVE_EVENTS_BY_ID, DEFAULT_ARCHIVE_EVENT_ID } from '../../content/archive/index.js';
import { ARCHIVE_THEMES } from '../../theme/archive/index.js';
import { EVENT } from '../../content/site.js';
import './ArchivePage.css';

const ArchivePage = ({ eventId = DEFAULT_ARCHIVE_EVENT_ID, onClose, showSiteHeader = true }) => {
  // The scrolling element, handed to the Header so it can hide/show as this page scrolls.
  const [scrollRoot, setScrollRoot] = useState(null);

  const event = ARCHIVE_EVENTS_BY_ID[eventId] || ARCHIVE_EVENTS_BY_ID[DEFAULT_ARCHIVE_EVENT_ID];
  const theme = ARCHIVE_THEMES[event.theme];
  const ThemeDecor = theme?.Decor;

  // Photos come from the event's folder; `heroImages` is the fallback list.
  const directoryPhotos = getPhotosFromDirectory(event.photoDirectory);
  const photoUrls = directoryPhotos.length > 0 ? directoryPhotos : (event.heroImages || []).filter(Boolean);
  const photos = photoUrls.map((src, index) => ({ src, alt: `${event.pageTitle}, photo ${index + 1}` }));

  const photoLinks = event.links?.photos || [];
  const galleryUrl = event.links?.galleryUrl ?? event.links?.devpostUrl;

  return (
    <PageOverlay label={event.pageTitle} onNode={setScrollRoot}>
      {showSiteHeader && <Header current="archive" scrollRoot={scrollRoot} solid />}

      <div className={`archive-body${theme ? ` ${theme.className}` : ''}${showSiteHeader ? ' archive-body--below-header' : ''}`}>
        <div className="archive-inner">
          {/* Optional decorations from the event's theme, drawn behind the content. */}
          {ThemeDecor && <ThemeDecor />}

          <button type="button" className="back-btn archive-back" onClick={onClose}>
            <FaArrowLeft aria-hidden="true" /> Back to {EVENT.title}
          </button>

          <div className="archive-intro">
            {/* ── Photos ───────────────────────────────────────────────── */}
            <div className="archive-photos">
              <PhotoCarousel photos={photos} emptyLabel="No event photos" />

              {photoLinks.length > 0 && (
                <div className="archive-photo-links">
                  {photoLinks.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="archive-photo-pill">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              {event.photoCredit && (
                <p className="archive-photo-credit">
                  Photo credit: <span>{event.photoCredit}</span>
                </p>
              )}
              {event.photoCaption && <p className="archive-text archive-photo-caption">{event.photoCaption}</p>}
            </div>

            {/* ── Write-up and project gallery link ────────────────────── */}
            <div className="archive-summary">
              <h1 className="archive-title">{event.pageTitle}</h1>
              {event.pageSubtitle && <p className="archive-text">{event.pageSubtitle}</p>}
              {event.pageDescription && <p className="archive-text">{event.pageDescription}</p>}

              {galleryUrl && (
                <a href={galleryUrl} target="_blank" rel="noopener noreferrer" className="archive-gallery-link">
                  <span className="archive-gallery-icon" aria-hidden="true">
                    <FaExternalLinkAlt />
                  </span>
                  <span>
                    <strong>{event.links?.galleryTitle ?? 'View all projects on Devpost'}</strong>
                    <span>
                      {event.links?.galleryDescription ?? 'Browse every submission, category winner, and honorable mention.'}
                    </span>
                  </span>
                </a>
              )}
            </div>
          </div>

          {event.winners && (
            <Winners
              title={event.winners.title}
              subtitle={event.winners.subtitle}
              winners={event.winners.items}
              announced={event.winners.announced}
              showImages={event.winners.showImages ?? true}
            />
          )}
        </div>
      </div>
    </PageOverlay>
  );
};

export default ArchivePage;
