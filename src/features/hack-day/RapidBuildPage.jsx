// Full-screen Rapid Build overlay. Opened by App.jsx when
// window.location.hash === '#rapid-build'.

import React, { useRef } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import starsSvg from '../../assets/stars-bg.svg';
import treasureMapSvg from '../../assets/treasure-map.svg';
import treasureChestSvg from '../../assets/treasure-chest.svg';
import '../../shared/styles/shared.css';
import './RapidBuildPage.css';
import Hero from './components/Hero.jsx';
import EventDetails from './components/EventDetails.jsx';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import PhotoStrip from './components/PhotoStrip.jsx';
import Faq from './components/Faq.jsx';
import CtaSection from './components/CtaSection.jsx';
import MapStop from './components/MapStop.jsx';
import TreasureTrail from './components/TreasureTrail.jsx';
import { RB_STARS } from './data/rapidBuildContent.js';

const RapidBuildPage = ({ onClose }) => {
  const voyageRef = useRef(null);

  return (
    <div className="rb-page-overlay">
      <img src={treasureMapSvg} alt="" className="rb-deco rb-deco--map-corner" />
      <img src={treasureMapSvg} alt="" className="rb-deco rb-deco--map-corner rb-deco--map-flip" />

      <div className="rb-page-inner">
        <button type="button" className="rb-back-btn" onClick={onClose}>
          <FaArrowLeft /> Back to Main Site
        </button>

        {RB_STARS.map((star) => (
          <img
            key={star.n}
            src={starsSvg}
            alt=""
            className={`rb-star rb-star--${star.size}`}
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              animationDelay: `${((star.n - 1) % 5) * 0.6}s`,
            }}
          />
        ))}

        <div className="rb-voyage" ref={voyageRef}>
          <TreasureTrail containerRef={voyageRef} />

          <MapStop stopId="hero">
            <Hero />
          </MapStop>

          <MapStop stopId="details">
            <EventDetails />
          </MapStop>

          <MapStop stopId="photos">
            <PhotoStrip />
          </MapStop>

          <MapStop stopId="projects">
            <ProjectShowcase />
          </MapStop>

          <MapStop stopId="faq" extraGapAfter>
            <Faq />
          </MapStop>

          <MapStop stopId="cta" isLast>
            <CtaSection />
            <img src={treasureChestSvg} alt="" className="rb-deco rb-deco--chest" />
          </MapStop>
        </div>
      </div>
    </div>
  );
};

export default RapidBuildPage;
