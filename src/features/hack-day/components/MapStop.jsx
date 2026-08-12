import React from 'react';
import { MAP_STOPS } from '../data/rapidBuildContent.js';

const MapStop = ({ stopId, children, isLast = false, extraGapAfter = false }) => {
  const stop = MAP_STOPS.find((s) => s.id === stopId);

  if (!stop) {
    return <div className="rb-map-stop-content">{children}</div>;
  }

  return (
    <div
      className={[
        'rb-map-stop',
        isLast ? 'rb-map-stop--last' : '',
        extraGapAfter ? 'rb-map-stop--gap-after' : '',
      ].filter(Boolean).join(' ')}
    >
      <div className="rb-map-rail">
        <div className="rb-map-marker" aria-hidden="true">
          <span className="rb-map-marker-pin">{stop.icon}</span>
          <span className="rb-map-marker-label">{stop.label}</span>
        </div>
      </div>
      <div className="rb-map-stop-content">{children}</div>
    </div>
  );
};

export default MapStop;
