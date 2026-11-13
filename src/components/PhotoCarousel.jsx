// src/components/PhotoCarousel.jsx
// A simple photo slideshow with previous/next arrows. It advances on its own
// every `intervalMs` unless the visitor prefers reduced motion.
// Used by the archive pages and the mini-event page.
//
// Props:
//   photos      [{ src, alt, caption }]  (caption is optional)
//   intervalMs  time between automatic slides (default 10 seconds)
//   emptyLabel  text shown when there are no photos

import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaImage } from 'react-icons/fa';
import './PhotoCarousel.css';

// With more photos than this, a "3 / 24" counter replaces the row of dots.
const MAX_DOTS = 10;

const PhotoCarousel = ({ photos = [], intervalMs = 10000, emptyLabel = 'Photos coming soon' }) => {
  const [index, setIndex] = useState(0);
  const count = photos.length;
  const current = photos[Math.min(index, count - 1)];

  // Restarts whenever the photo changes, so a manual click resets the timer.
  useEffect(() => {
    if (count <= 1 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setTimeout(() => setIndex((value) => (value + 1) % count), intervalMs);
    return () => clearTimeout(timer);
  }, [index, count, intervalMs]);

  if (count === 0) {
    return (
      <div className="photo-carousel photo-carousel--empty">
        <FaImage aria-hidden="true" />
        <span>{emptyLabel}</span>
      </div>
    );
  }

  const step = (amount) => setIndex((value) => (value + amount + count) % count);

  return (
    <figure className="photo-carousel">
      <div className="photo-carousel-frame">
        {/* key restarts the fade for each new photo */}
        <img key={current.src} className="photo-carousel-img" src={current.src} alt={current.alt} loading="lazy" />

        {count > 1 && (
          <>
            <button type="button" className="photo-carousel-arrow photo-carousel-arrow--prev" onClick={() => step(-1)} aria-label="Previous photo">
              <FaChevronLeft aria-hidden="true" />
            </button>
            <button type="button" className="photo-carousel-arrow photo-carousel-arrow--next" onClick={() => step(1)} aria-label="Next photo">
              <FaChevronRight aria-hidden="true" />
            </button>

            {count <= MAX_DOTS ? (
              <div className="photo-carousel-dots">
                {photos.map((photo, dotIndex) => (
                  <button
                    key={photo.src}
                    type="button"
                    className={`photo-carousel-dot${dotIndex === index ? ' is-active' : ''}`}
                    onClick={() => setIndex(dotIndex)}
                    aria-label={`Photo ${dotIndex + 1} of ${count}`}
                    aria-current={dotIndex === index ? 'true' : undefined}
                  />
                ))}
              </div>
            ) : (
              <span className="photo-carousel-count">
                {index + 1} / {count}
              </span>
            )}
          </>
        )}
      </div>

      {current.caption && <figcaption className="photo-carousel-caption">{current.caption}</figcaption>}
    </figure>
  );
};

export default PhotoCarousel;
