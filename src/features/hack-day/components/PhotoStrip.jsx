import React, { useState, useEffect, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RAPID_BUILD_PAGE } from '../data/rapidBuildContent.js';


// Path keys only — public assets are served from the site root (do not import with ?url).
const PUBLIC_PAST_EVENT_IMAGE_PATHS = Object.keys(
  import.meta.glob('/public/images/past-events/**/*.{png,jpg,jpeg,webp,avif,gif}'),
);

const normalizeDirectoryPath = (path = '') => {
  const trimmed = path.trim();
  if (!trimmed) return '';
  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
};

const toPublicUrl = (filePath) => filePath.replace(/^\/public/, '') || filePath;

const PHOTO_CAPTIONS_BY_FILENAME = {
  all: { alt: 'Hack Day 2025 — group photo', caption: 'A Successful Hack Day 2025!' },
  opening2: { alt: 'Hack Day 2025 — kickoff', caption: 'Opening Remarks and Kickoff!' },
  working: { alt: 'Hack Day 2025 — teams building', caption: 'Teams working throughout the day!' },
  workshop: { alt: 'Hack Day 2025 — workshop', caption: 'First Time Hackers Workshop!' },
};

const getFilename = (filePath) => filePath.split('/').pop() || '';

const getFilenameStem = (filePath) =>
  getFilename(filePath).replace(/\.[^.]+$/, '');

const orderDirectoryFiles = (filePaths, photoOrder = []) => {
  const byFilename = new Map();
  const byStem = new Map();
  filePaths.forEach((filePath) => {
    const filename = getFilename(filePath).toLowerCase();
    const stem = getFilenameStem(filePath).toLowerCase();
    byFilename.set(filename, filePath);
    byStem.set(stem, filePath);
  });

  const ordered = [];
  const used = new Set();

  photoOrder.forEach((entry) => {
    const key = String(entry).trim().toLowerCase();
    if (!key) return;
    const match = byFilename.get(key) || byStem.get(getFilenameStem(key));
    if (match && !used.has(match)) {
      used.add(match);
      ordered.push(match);
    }
  });

  filePaths
    .slice()
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .forEach((filePath) => {
      if (!used.has(filePath)) ordered.push(filePath);
    });

  return ordered;
};

const getImagesFromPhotoDirectory = (photoDirectory, photoOrder = []) => {
  const normalizedDir = normalizeDirectoryPath(photoDirectory);
  if (!normalizedDir) return [];

  const directoryFiles = PUBLIC_PAST_EVENT_IMAGE_PATHS
    .filter((filePath) => filePath.startsWith(normalizedDir));

  return orderDirectoryFiles(directoryFiles, photoOrder)
    .map((filePath, index) => {
      const stem = getFilenameStem(filePath);
      const labels = PHOTO_CAPTIONS_BY_FILENAME[stem];
      return {
        src: toPublicUrl(filePath),
        alt: labels?.alt || `Hack Day 2025 — photo ${index + 1}`,
        caption: labels?.caption || `Hack Day 2025 — photo ${index + 1}`,
      };
    })
    .filter((photo) => photo.src);
};

const PHOTO_AUTO_ADVANCE_MS = 15000;

const PhotoStrip = () => {
  const { photos } = RAPID_BUILD_PAGE;
  const directoryPhotos = useMemo(
    () => getImagesFromPhotoDirectory(photos.photoDirectory, photos.photoOrder),
    [photos.photoDirectory, photos.photoOrder],
  );
  const carouselPhotos = directoryPhotos.length > 0 ? directoryPhotos : photos.items;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [carouselPhotos.length]);

  useEffect(() => {
    if (carouselPhotos.length <= 1) return;

    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselPhotos.length);
    }, PHOTO_AUTO_ADVANCE_MS);

    return () => clearTimeout(timeout);
  }, [currentIndex, carouselPhotos.length]);

  if (carouselPhotos.length === 0) {
    return (
      <section className="rb-section rb-photo-strip">
        <h2 className="rb-section-title">{photos.sectionTitle}</h2>
        <p className="rb-section-subtitle">{photos.sectionSubtitle}</p>
        <div className="rb-photo-carousel panel-card">
          <div className="rb-photo-placeholder rb-photo-placeholder--large" aria-hidden="true">
            <span>⚓</span>
            <p>Photos coming soon</p>
          </div>
        </div>
      </section>
    );
  }

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselPhotos.length) % carouselPhotos.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselPhotos.length);
  };

  const currentPhoto = carouselPhotos[currentIndex];

  return (
    <section className="rb-section rb-photo-strip">
      <h2 className="rb-section-title">{photos.sectionTitle}</h2>
      <p className="rb-section-subtitle">{photos.sectionSubtitle}</p>
      <div className="rb-photo-carousel panel-card">
        <PhotoSlide photo={currentPhoto} />
        {carouselPhotos.length > 1 && (
          <>
            <button type="button" className="rb-carousel-arrow rb-carousel-arrow--left" onClick={goPrevious} aria-label="Previous photo">
              <FaChevronLeft />
            </button>
            <button type="button" className="rb-carousel-arrow rb-carousel-arrow--right" onClick={goNext} aria-label="Next photo">
              <FaChevronRight />
            </button>
          </>
        )}
        {currentPhoto.caption && <p className="rb-photo-caption">{currentPhoto.caption}</p>}
      </div>
    </section>
  );
};

const PhotoSlide = ({ photo }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="rb-photo-placeholder rb-photo-placeholder--large" aria-hidden="true">
        <span>⚓</span>
      </div>
    );
  }

  return (
    <img
      key={photo.src}
      src={photo.src}
      alt={photo.alt}
      className="rb-photo-slide fade-in"
      loading="lazy"
      onError={() => setImgError(true)}
    />
  );
};

export default PhotoStrip;
