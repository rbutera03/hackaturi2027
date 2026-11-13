// src/components/PageOverlay.jsx
// The full-screen, separately scrolling layer used by the schedule page, the
// mini-event page and the archive pages. Styles: .page-overlay in base.css.
// App.jsx hides the page underneath while one of these is open.
//
// Props:
//   label      names the page for screen readers
//   className  extra classes for the overlay
//   onNode     optional; receives the scrolling element (the archive page hands
//              it to the Header so the header can follow the overlay's scroll)

import React, { useCallback } from 'react';

const PageOverlay = ({ label, className = '', onNode, children }) => {
  const setNode = useCallback(
    (node) => {
      // Move keyboard focus into the page that just opened.
      node?.focus({ preventScroll: true });
      onNode?.(node);
    },
    [onNode]
  );

  return (
    <div
      ref={setNode}
      className={`page-overlay${className ? ` ${className}` : ''}`}
      role="region"
      aria-label={label}
      tabIndex={-1}
    >
      {children}
    </div>
  );
};

export default PageOverlay;
