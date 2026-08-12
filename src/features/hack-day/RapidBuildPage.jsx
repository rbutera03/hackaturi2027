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
import CtaButtons from './components/CtaButtons.jsx';
import MapStop from './components/MapStop.jsx';
import TreasureTrail from './components/TreasureTrail.jsx';

const RB_STARS = [
  { n: 1, size: 'lg', top: '5%', left: '4%' },
  { n: 2, size: 'md', top: '8%', right: '6%' },
  { n: 3, size: 'sm', top: '14%', left: '11%' },
  { n: 4, size: 'lg', top: '19%', right: '13%' },
  { n: 5, size: 'md', top: '26%', left: '2%' },
  { n: 6, size: 'sm', top: '31%', right: '4%' },
  { n: 7, size: 'md', top: '37%', left: '9%' },
  { n: 8, size: 'lg', top: '43%', right: '10%' },
  { n: 9, size: 'sm', top: '49%', left: '3%' },
  { n: 10, size: 'md', top: '54%', right: '7%' },
  { n: 11, size: 'sm', top: '59%', left: '15%' },
  { n: 12, size: 'lg', top: '64%', right: '15%' },
  { n: 13, size: 'md', top: '69%', left: '6%' },
  { n: 14, size: 'sm', top: '74%', right: '3%' },
  { n: 15, size: 'md', top: '78%', left: '13%' },
  { n: 16, size: 'sm', top: '82%', right: '11%' },
  { n: 17, size: 'lg', top: '86%', left: '2%' },
  { n: 18, size: 'md', top: '11%', left: '22%' },
  { n: 19, size: 'sm', top: '22%', right: '20%' },
  { n: 20, size: 'md', top: '35%', left: '20%' },
  { n: 21, size: 'sm', top: '47%', right: '19%' },
  { n: 22, size: 'lg', top: '58%', left: '19%' },
  { n: 23, size: 'md', top: '71%', right: '22%' },
  { n: 24, size: 'sm', top: '91%', right: '8%' },
  { n: 25, size: 'md', top: '17%', right: '26%' },
  { n: 26, size: 'sm', top: '44%', left: '24%' },
  { n: 27, size: 'md', top: '67%', right: '25%' },
  { n: 28, size: 'sm', top: '93%', left: '10%' },
];

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
            <CtaButtons />
            <img src={treasureChestSvg} alt="" className="rb-deco rb-deco--chest" />
          </MapStop>
        </div>
      </div>
    </div>
  );
};

export default RapidBuildPage;
