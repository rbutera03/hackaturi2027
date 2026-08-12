import React, { useState, useEffect, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RAPID_BUILD_PAGE } from '../data/rapidBuildContent.js';

const REPO_IMAGE_FILES = import.meta.glob('/{src,public}/**/*.{png,jpg,jpeg,webp,avif,gif}', {
  eager: true,
  import: 'default',
  query: '?url',
});

const normalizeDirectoryPath = (path = '') => {
  const trimmed = path.trim();
  if (!trimmed) return '';
  const withLeadingSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
};

const getImagesFromPhotoDirectory = (photoDirectory) => {
  const normalizedDir = normalizeDirectoryPath(photoDirectory);
  if (!normalizedDir) return [];

  return Object.entries(REPO_IMAGE_FILES)
    .filter(([filePath]) => filePath.startsWith(normalizedDir))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map(([, imageUrl], index) => ({
      src: imageUrl,
      alt: `Hack Day 2025 — photo ${index + 1}`,
      caption: `Hack Day 2025 — photo ${index + 1}`,
    }))
    .filter((photo) => photo.src);
};

const PhotoStrip = () => {
  const { photos } = RAPID_BUILD_PAGE;
  const directoryPhotos = useMemo(
    () => getImagesFromPhotoDirectory(photos.photoDirectory),
    [photos.photoDirectory],
  );
  const carouselPhotos = directoryPhotos.length > 0 ? directoryPhotos : photos.items;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [carouselPhotos.length]);

  useEffect(() => {
    if (carouselPhotos.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselPhotos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [carouselPhotos.length]);

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
            <div className="rb-carousel-dots">
              {carouselPhotos.map((photo, index) => (
                <button
                  key={photo.caption || photo.src}
                  type="button"
                  className={`rb-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Show photo ${index + 1}`}
                />
              ))}
            </div>
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
