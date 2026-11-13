// src/theme/archive/RapidBuildDecor.jsx
// Decorations drawn behind the Rapid Build 2026 archive page: faded treasure
// maps in two corners, twinkling stars, and a dashed trail between map pins.
// Part of the frozen 'rapid-build-2026' archive theme (styles in
// rapid-build-2026.css). Purely decorative, so it is hidden from screen readers.

import React from 'react';
import starsSvg from './assets/stars-bg.svg';
import treasureMapSvg from './assets/treasure-map.svg';

// Star positions, as percentages of the page (a star has `left` or `right`).
const STARS = [
  { size: 'lg', top: '5%', left: '4%' },
  { size: 'md', top: '8%', right: '6%' },
  { size: 'sm', top: '14%', left: '11%' },
  { size: 'lg', top: '19%', right: '13%' },
  { size: 'md', top: '26%', left: '2%' },
  { size: 'sm', top: '31%', right: '4%' },
  { size: 'md', top: '37%', left: '9%' },
  { size: 'lg', top: '43%', right: '10%' },
  { size: 'sm', top: '49%', left: '3%' },
  { size: 'md', top: '54%', right: '7%' },
  { size: 'sm', top: '59%', left: '15%' },
  { size: 'lg', top: '64%', right: '15%' },
  { size: 'md', top: '69%', left: '6%' },
  { size: 'sm', top: '74%', right: '3%' },
  { size: 'md', top: '78%', left: '13%' },
  { size: 'sm', top: '82%', right: '11%' },
  { size: 'lg', top: '86%', left: '2%' },
  { size: 'md', top: '11%', left: '22%' },
  { size: 'sm', top: '22%', right: '20%' },
  { size: 'md', top: '35%', left: '20%' },
  { size: 'sm', top: '47%', right: '19%' },
  { size: 'lg', top: '58%', left: '19%' },
  { size: 'md', top: '71%', right: '22%' },
  { size: 'sm', top: '91%', right: '8%' },
  { size: 'md', top: '17%', right: '26%' },
  { size: 'sm', top: '44%', left: '24%' },
  { size: 'md', top: '67%', right: '25%' },
  { size: 'sm', top: '93%', left: '10%' },
];

// Map pins zigzagging down the side gutters. x and y are percentages of the page.
const MAP_PINS = [
  { x: 1.5, y: 6, icon: '⚓' },
  { x: 98.5, y: 34, icon: '🧭' },
  { x: 1.5, y: 64, icon: '☠️' },
  { x: 98.5, y: 92, icon: '❌', isTreasure: true },
];

// One smooth curve from each pin to the next.
const TRAIL_PATH = MAP_PINS.reduce((path, pin, index) => {
  if (index === 0) return `M ${pin.x} ${pin.y}`;
  const previous = MAP_PINS[index - 1];
  const midY = (previous.y + pin.y) / 2;
  return `${path} C ${previous.x} ${midY}, ${pin.x} ${midY}, ${pin.x} ${pin.y}`;
}, '');

const RapidBuildDecor = () => (
  <div aria-hidden="true">
    <img src={treasureMapSvg} alt="" className="rb26-map" />
    <img src={treasureMapSvg} alt="" className="rb26-map rb26-map--flip" />

    {STARS.map((star, index) => (
      <img
        key={`${star.top}-${star.left ?? star.right}`}
        src={starsSvg}
        alt=""
        className={`rb26-star rb26-star--${star.size}`}
        style={{ top: star.top, left: star.left, right: star.right, animationDelay: `${(index % 5) * 0.6}s` }}
      />
    ))}

    <div className="rb26-trail">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d={TRAIL_PATH}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="7 9"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {MAP_PINS.map((pin) => (
        <span
          key={`${pin.x}-${pin.y}`}
          className={`rb26-pin${pin.isTreasure ? ' rb26-pin--treasure' : ''}`}
          style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
        >
          {pin.icon}
        </span>
      ))}
    </div>
  </div>
);

export default RapidBuildDecor;
