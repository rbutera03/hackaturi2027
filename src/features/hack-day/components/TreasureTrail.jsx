import React, { useState, useEffect, useCallback, useRef } from 'react';

const LABEL_GAP_PX = 10;
const CURVE_SWAY_PX = 20;

/** Smooth S-curve from below a label to the top of the next map pin */
function buildTrailPath(x1, y1, x2, y2, index) {
  const dy = y2 - y1;
  if (dy < 4) return null;

  const midY = y1 + dy * 0.5;
  const sway = index % 2 === 0 ? -CURVE_SWAY_PX : CURVE_SWAY_PX;
  const midX = (x1 + x2) / 2 + sway;

  return [
    `M ${x1.toFixed(1)} ${y1.toFixed(1)}`,
    `C ${x1.toFixed(1)} ${(y1 + dy * 0.2).toFixed(1)},`,
    `${midX.toFixed(1)} ${(midY - dy * 0.1).toFixed(1)},`,
    `${midX.toFixed(1)} ${midY.toFixed(1)}`,
    `C ${midX.toFixed(1)} ${(midY + dy * 0.1).toFixed(1)},`,
    `${x2.toFixed(1)} ${(y2 - dy * 0.15).toFixed(1)},`,
    `${x2.toFixed(1)} ${y2.toFixed(1)}`,
  ].join(' ');
}

const TreasureTrail = ({ containerRef }) => {
  const [paths, setPaths] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const updatePaths = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const labels = container.querySelectorAll('.rb-map-marker-label');
    const pins = container.querySelectorAll('.rb-map-marker-pin');
    if (labels.length < 2 || pins.length < 2) {
      setPaths([]);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    setDimensions({
      width: containerRect.width,
      height: containerRect.height,
    });

    const nextPaths = [];
    for (let i = 0; i < labels.length - 1; i += 1) {
      const labelRect = labels[i].getBoundingClientRect();
      const nextPinRect = pins[i + 1].getBoundingClientRect();

      const x1 = labelRect.left + labelRect.width / 2 - containerRect.left;
      const y1 = labelRect.bottom - containerRect.top + LABEL_GAP_PX;
      const x2 = nextPinRect.left + nextPinRect.width / 2 - containerRect.left;
      const y2 = nextPinRect.top - containerRect.top;

      const d = buildTrailPath(x1, y1, x2, y2, i);
      if (d) nextPaths.push({ id: i, d });
    }

    setPaths(nextPaths);
  }, [containerRef]);

  useEffect(() => {
    updatePaths();

    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new ResizeObserver(updatePaths);
    observer.observe(container);
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
