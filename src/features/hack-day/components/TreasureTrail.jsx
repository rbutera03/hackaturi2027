import React, { useState, useEffect, useCallback } from 'react';

const PIN_GAP_PX = 8;

/** Curve from one pin to the next, biasing toward the destination early */
function buildTrailPath(x1, y1, x2, y2) {
  const dy = y2 - y1;
  if (dy < 4) return null;

  const dx = x2 - x1;

  // Start mostly vertical, then commit to the destination x so relocated
  // pins (like the final X) stay clearly targeted.
  const c1x = x1 + dx * 0.2;
  const c1y = y1 + dy * 0.35;
  const c2x = x2 - dx * 0.05;
  const c2y = y2 - dy * 0.28;

  return [
    `M ${x1.toFixed(1)} ${y1.toFixed(1)}`,
    `C ${c1x.toFixed(1)} ${c1y.toFixed(1)},`,
    `${c2x.toFixed(1)} ${c2y.toFixed(1)},`,
    `${x2.toFixed(1)} ${y2.toFixed(1)}`,
  ].join(' ');
}

const TreasureTrail = ({ containerRef }) => {
  const [paths, setPaths] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updatePaths = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const stops = container.querySelectorAll('.rb-map-stop');
    if (stops.length < 2) {
      setPaths([]);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    setDimensions({
      width: containerRect.width,
      height: containerRect.height,
    });

    const nextPaths = [];
    for (let i = 0; i < stops.length - 1; i += 1) {
      const fromPin = stops[i].querySelector('.rb-map-marker-pin');
      const toPin = stops[i + 1].querySelector('.rb-map-marker-pin');
      if (!fromPin || !toPin) continue;

      const fromRect = fromPin.getBoundingClientRect();
      const toRect = toPin.getBoundingClientRect();

      const x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
      const y1 = fromRect.bottom - containerRect.top + PIN_GAP_PX;
      const x2 = toRect.left + toRect.width / 2 - containerRect.left;
      const y2 = toRect.top - containerRect.top - PIN_GAP_PX;

      const d = buildTrailPath(x1, y1, x2, y2);
      if (d) nextPaths.push({ id: i, d });
    }

    setPaths(nextPaths);
  }, [containerRef]);

  useEffect(() => {
    updatePaths();

    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new ResizeObserver(() => {
      window.requestAnimationFrame(updatePaths);
    });
    observer.observe(container);
    container.querySelectorAll('.rb-map-stop').forEach((stop) => observer.observe(stop));

    window.addEventListener('resize', updatePaths);

    const t1 = window.setTimeout(updatePaths, 120);
    const t2 = window.setTimeout(updatePaths, 600);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updatePaths);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [containerRef, updatePaths]);

  if (dimensions.width === 0 || paths.length === 0) return null;

  return (
    <svg
      className="rb-treasure-trail-overlay"
      width={dimensions.width}
      height={dimensions.height}
      aria-hidden="true"
    >
      {paths.map(({ id, d }) => (
        <path
          key={id}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="7 9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="rb-treasure-trail-path"
        />
      ))}
    </svg>
  );
};

export default TreasureTrail;
