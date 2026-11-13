// src/theme/Starfield.jsx
// The animated star background, drawn on one <canvas> fixed behind the page,
// plus the planets and the rocket in SpaceDecor.jsx. It is rendered once in
// App.jsx and shared by every view.
//
// - Stars twinkle and drift slightly as the page scrolls (three depth layers).
// - A shooting star crosses the sky every few seconds.
// - Drawing stops while the browser tab is hidden.
// - Small screens get fewer stars.
// - With "reduce motion" switched on, a single still frame is drawn instead.
//
// To tune the stars, change the numbers in SETTINGS. To move a planet, edit
// Starfield.css.

import React, { useEffect, useRef } from 'react';
import SpaceDecor from './SpaceDecor.jsx';
import './Starfield.css';

const SETTINGS = {
  // One star per this many square pixels of screen, capped at maxStars.
  areaPerStar: 6500,
  maxStars: 240,
  // Most stars are white; a few take one of these tints.
  tints: ['#00ffff', '#ffe566', '#ff7ad9', '#cfa0ff'],
  tintChance: 0.14,
  // Seconds between shooting stars (a random value in this range).
  shootingStarEvery: [5, 11],
  // How far each depth layer moves relative to scrolling (0 = fixed).
  parallax: [0.02, 0.05, 0.1],
};

const HEIGHT_SLACK = 160;

const random = (min, max) => min + Math.random() * (max - min);

const createStars = (width, height) => {
  const count = Math.min(SETTINGS.maxStars, Math.round((width * height) / SETTINGS.areaPerStar));
  return Array.from({ length: count }, () => {
    const layer = Math.random() < 0.6 ? 0 : Math.random() < 0.7 ? 1 : 2;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      layer,
      radius: random(0.4, 1.0) + layer * 0.35,
      baseAlpha: random(0.35, 0.8),
      twinkleSpeed: random(0.4, 1.6),
      twinklePhase: random(0, Math.PI * 2),
      color: Math.random() < SETTINGS.tintChance ? SETTINGS.tints[Math.floor(Math.random() * SETTINGS.tints.length)] : '#ffffff',
    };
  });
};

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return undefined;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let fieldHeight = 0; // height the stars are spread over (screen height plus slack)
    let stars = [];
    let shootingStar = null;
    let nextShootingStarAt = 0;
    let frameId = 0;

    const draw = (timeMs) => {
      const time = timeMs / 1000;
      const scrollY = window.scrollY;
      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        const twinkle = motionQuery.matches ? 1 : 0.65 + 0.35 * Math.sin(time * star.twinkleSpeed + star.twinklePhase);
        // Wrap vertically so stars re-enter from the other edge as the page scrolls.
        const y = (((star.y - scrollY * SETTINGS.parallax[star.layer]) % fieldHeight) + fieldHeight) % fieldHeight;
        ctx.globalAlpha = star.baseAlpha * twinkle;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (shootingStar) {
        const progress = (time - shootingStar.startedAt) / shootingStar.duration;
        if (progress >= 1) {
          shootingStar = null;
        } else {
          const headX = shootingStar.x + shootingStar.dx * progress;
          const headY = shootingStar.y + shootingStar.dy * progress;
          const tailX = headX - shootingStar.dx * 0.18;
          const tailY = headY - shootingStar.dy * 0.18;
          const gradient = ctx.createLinearGradient(headX, headY, tailX, tailY);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');
          ctx.globalAlpha = Math.sin(progress * Math.PI); // fade in, then out
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(headX, headY);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    const launchShootingStar = (time) => {
      const distance = Math.max(width, height) * random(0.35, 0.6);
      const angle = random(Math.PI * 0.12, Math.PI * 0.3); // down and to the right
      shootingStar = {
        x: random(-0.1, 0.7) * width,
        y: random(0, 0.4) * height,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
        startedAt: time,
        duration: random(0.7, 1.2),
      };
    };

    const tick = (timeMs) => {
      const time = timeMs / 1000;
      if (!shootingStar && time >= nextShootingStarAt) {
        if (nextShootingStarAt > 0) launchShootingStar(time);
        nextShootingStarAt = time + random(...SETTINGS.shootingStarEvery);
      }
      draw(timeMs);
      frameId = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      frameId = 0;
    };

    // Animate only when the tab is visible and motion is allowed.
    const start = () => {
      stop();
      if (motionQuery.matches) {
        draw(0);
      } else if (!document.hidden) {
        frameId = requestAnimationFrame(tick);
      }
    };

    const resize = () => {
      const previousWidth = width;
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      // Mobile browsers fire resize when the address bar slides away. The field
      // is made a little taller than the screen so those small height changes
      // reuse the same stars instead of reshuffling them mid-scroll.
      if (width !== previousWidth || height > fieldHeight || height < fieldHeight - 2 * HEIGHT_SLACK) {
        fieldHeight = height + HEIGHT_SLACK;
        stars = createStars(width, fieldHeight);
      }
      if (motionQuery.matches) draw(0);
    };

    resize();
    start();

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', start);
    motionQuery.addEventListener('change', start);

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', start);
      motionQuery.removeEventListener('change', start);
    };
  }, []);

  return (
    <div className="starfield" aria-hidden="true">
      <canvas ref={canvasRef} className="starfield-canvas" />
      <SpaceDecor />
    </div>
  );
};

export default Starfield;
