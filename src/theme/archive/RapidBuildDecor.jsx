import React from 'react';
import starsSvg from '../../../assets/stars-bg.svg';
import treasureMapSvg from '../../../assets/treasure-map.svg';
import { RB_STARS } from '../../hack-day';

// Purely decorative pins, zigzagging down the side gutters. x/y are percentages of the page.
const MAP_PINS = [
  { x: 1.5, y: 6, icon: '⚓' },
  { x: 98.5, y: 34, icon: '🧭' },
  { x: 1.5, y: 64, icon: '☠️' },
  { x: 98.5, y: 92, icon: '❌', isTreasure: true },
];

const buildTrailPath = (pins) => pins.reduce((d, pin, i) => {
  if (i === 0) return `M ${pin.x} ${pin.y}`;
  const prev = pins[i - 1];
  const midY = (prev.y + pin.y) / 2;
  return `${d} C ${prev.x} ${midY}, ${pin.x} ${midY}, ${pin.x} ${pin.y}`;
}, '');

const TRAIL_PATH = buildTrailPath(MAP_PINS);

const RapidBuildDecor = () => (
  <>
    <img src={treasureMapSvg} alt="" className="rb-deco rb-deco--map-corner" />
    <img src={treasureMapSvg} alt="" className="rb-deco rb-deco--map-corner rb-deco--map-flip" />
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
    <div className="archive-map-decor" aria-hidden="true">
      <svg className="archive-map-trail" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={TRAIL_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="7 9"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="rb-treasure-trail-path"
        />
      </svg>
      {MAP_PINS.map((pin) => (
        <span
          key={`${pin.x}-${pin.y}`}
          className={`rb-map-marker-pin archive-map-pin${pin.isTreasure ? ' archive-map-pin--treasure' : ''}`}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          {pin.icon}
        </span>
      ))}
    </div>
  </>
);

export default RapidBuildDecor;
