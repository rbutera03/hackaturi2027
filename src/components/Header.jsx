// src/components/Header.jsx
// The site header and navigation.
//
// The links are NOT listed here. They are built from:
//   - SECTIONS in content/site.js        (every section with inNav: true)
//   - FORMS in content/getInvolved.js    (the "Get Involved" menu)
//   - content/archive/index.js           (the "Archive" menu)
//
// Behaviour: one set of markup for every screen size. Below the breakpoint in
// Header.css it collapses behind a menu button. The bar hides while scrolling
// down and returns when scrolling up, and highlights the section in view.
//
// Props:
//   scrollRoot  element whose scrolling the header follows (default: the window).
//               The archive page passes its overlay.
//   current     id of the nav item to highlight instead of tracking scroll.
//   solid       always draw the bar's dark backdrop (normally it only appears
//               once the page has scrolled). Used above themed archive pages.

import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { EVENT, SECTIONS } from '../content/site.js';
import { FORMS } from '../content/getInvolved.js';
import { ARCHIVE_NAV_ITEMS } from '../content/archive/index.js';
import logo from '../assets/space-ram-head.webp';
import './Header.css';

const NAV_ITEMS = [
  ...SECTIONS.filter((section) => section.inNav).map((section) =>
    section.id === 'get-involved'
      ? {
          ...section,
          children: [
            { href: `#${section.id}`, label: 'Overview' },
            ...FORMS.map((form) => ({ href: `#form-${form.id}`, label: form.navLabel })),
          ],
        }
      : section
  ),
  ...(ARCHIVE_NAV_ITEMS.length > 0
    ? [{ id: 'archive', label: 'Archive', children: ARCHIVE_NAV_ITEMS.map((item) => ({ href: item.id, label: item.label })) }]
    : []),
];

const SECTION_IDS = SECTIONS.map((section) => section.id);

const Header = ({ scrollRoot = null, current = null, solid = false }) => {
  const [activeId, setActiveId] = useState('home');
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // small-screen menu
  const [openSubmenu, setOpenSubmenu] = useState(null); // id of the open dropdown
  const headerRef = useRef(null);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  // Hide on scroll down, show on scroll up, and track the section in view.
  useEffect(() => {
    const target = scrollRoot ?? window;
    const getY = () => (scrollRoot ? scrollRoot.scrollTop : window.scrollY);
    let lastY = getY();
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = getY();
      setIsScrolled(y > 12);
      if (y > lastY && y > 120) setIsHidden(true);
      else if (y < lastY || y <= 120) setIsHidden(false);
      lastY = y;

      if (!scrollRoot) {
        const marker = y + window.innerHeight * 0.35;
        let found = SECTION_IDS[0];
        for (const id of SECTION_IDS) {
          const section = document.getElementById(id);
          if (section && section.offsetTop <= marker) found = id;
        }
        setActiveId(found);
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    target.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      target.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [scrollRoot]);

  // Close open menus with Escape or by clicking anywhere outside the header.
  const anyMenuOpen = isMenuOpen || openSubmenu !== null;
  useEffect(() => {
    if (!anyMenuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      closeMenus();
      headerRef.current?.querySelector('[aria-expanded="true"]')?.focus();
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) closeMenus();
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [anyMenuOpen]);

  const highlighted = current ?? activeId;
  const hidden = isHidden && !anyMenuOpen;

  return (
    <header
      ref={headerRef}
      className={`site-header${hidden ? ' is-hidden' : ''}${solid || isScrolled || isMenuOpen ? ' is-solid' : ''}`}
    >
      <div className="header-inner">
        <a className="header-logo" href="#home" onClick={closeMenus}>
          <img src={logo} alt="" width="37" height="40" />
          <span>{EVENT.name}</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-nav"
          onClick={() => {
            setIsMenuOpen((open) => !open);
            setOpenSubmenu(null);
          }}
        >
          <span className={`nav-toggle-icon${isMenuOpen ? ' is-open' : ''}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="visually-hidden">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="site-nav" className={`site-nav${isMenuOpen ? ' is-open' : ''}`} aria-label="Main">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => {
              const isCurrent = highlighted === item.id;

              if (!item.children) {
                return (
                  <li key={item.id} className="nav-item">
                    <a
                      className={`nav-link${isCurrent ? ' is-current' : ''}`}
                      href={`#${item.id}`}
                      aria-current={isCurrent ? 'true' : undefined}
                      onClick={closeMenus}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              const isOpen = openSubmenu === item.id;
              return (
                <li key={item.id} className={`nav-item nav-item--menu${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className={`nav-link${isCurrent ? ' is-current' : ''}`}
                    aria-expanded={isOpen}
                    aria-controls={`submenu-${item.id}`}
                    onClick={() => setOpenSubmenu(isOpen ? null : item.id)}
                  >
                    {item.label}
                    <FaChevronDown className="nav-chevron" aria-hidden="true" />
                  </button>
                  <ul id={`submenu-${item.id}`} className="nav-submenu">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <a className="nav-sublink" href={child.href} onClick={closeMenus}>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
