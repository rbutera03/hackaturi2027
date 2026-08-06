// Full-screen Rapid Build overlay. Opened by App.jsx when
// window.location.hash === '#rapid-build'.

import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import starsSvg from '../../assets/stars-bg.svg';
import '../../shared/styles/shared.css';
import './RapidBuildPage.css';
import Hero from './components/Hero.jsx';
import EventDetails from './components/EventDetails.jsx';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import PhotoStrip from './components/PhotoStrip.jsx';
import Faq from './components/Faq.jsx';
import CtaButtons from './components/CtaButtons.jsx';

// Dense star field — positions/sizes defined in RapidBuildPage.css (.rb-star.star-N)
const RB_STARS = [
  { n: 1, size: 'lg' },
  { n: 2, size: 'md' },
  { n: 3, size: 'sm' },
  { n: 4, size: 'lg' },
  { n: 5, size: 'md' },
  { n: 6, size: 'sm' },
  { n: 7, size: 'md' },
  { n: 8, size: 'lg' },
  { n: 9, size: 'sm' },
  { n: 10, size: 'md' },
  { n: 11, size: 'sm' },
  { n: 12, size: 'lg' },
  { n: 13, size: 'md' },
  { n: 14, size: 'sm' },
];

const RapidBuildPage = ({ onClose }) => {
  return (
    <div className="rb-page-overlay">
      <div className="rb-page-inner">
        <button type="button" className="rb-back-btn" onClick={onClose}>
          <FaArrowLeft /> Back to Main Site
        </button>

        {RB_STARS.map(({ n, size }) => (
          <img
            key={n}
            src={starsSvg}
            alt=""
            className={`rb-star star-${n} rb-star--${size}`}
          />
        ))}

        <Hero />
        <EventDetails />
        <PhotoStrip />
        <ProjectShowcase />
        <Faq />
        <CtaButtons />
      </div>
    </div>
  );
};

export default RapidBuildPage;
