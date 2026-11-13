// src/components/Reveal.jsx
// Fades its children up into place the first time they scroll into view.
//
//   <Reveal>…</Reveal>                       a <div>
//   <Reveal as="li" delay={120}>…</Reveal>   another tag, starting 120ms later
//
// Use `delay` (milliseconds) to stagger items in a grid. The animation itself
// is the .reveal rule in src/theme/base.css, which switches it off for
// visitors who prefer reduced motion.

import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ as = 'div', delay = 0, className = '', style, children, ...rest }) => {
  const Tag = as;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    // Very old browsers: just show the content.
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // Wait until the element is a little way above the bottom edge of the screen.
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { ...style, '--reveal-delay': `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
