// src/App.jsx
// The shell of the site. It decides what is on screen:
//
//   1. Landing mode   SITE_FLAGS.siteHidden is true and the visitor has not used
//                     the Preview button: only the landing page is shown.
//   2. Full site      every section listed in SECTIONS (content/site.js), in order.
//   3. Overlay pages  opened by the address-bar hash, on top of either mode:
//                       #full-schedule   full schedule page
//                       #mini-event      fall mini-event page (#rapid-build also works)
//                       #archive-<id>    a past event
//
// Yearly content does not live here. See src/content/.

import React, { useCallback, useEffect, useState } from 'react';
import Starfield from './theme/Starfield.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import RegistrationPrompts from './components/RegistrationPrompts.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import WhyJoin from './sections/WhyJoin.jsx';
import Tracks from './sections/Tracks.jsx';
import Schedule from './sections/schedule/ScheduleSection.jsx';
import Sponsors from './sections/Sponsors.jsx';
import GetInvolved from './sections/GetInvolved.jsx';
import Faq from './sections/Faq.jsx';
import Team from './sections/Team.jsx';
import Connect from './sections/Connect.jsx';
import LandingPage from './pages/LandingPage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import MiniEventPage from './pages/mini-event/MiniEventPage.jsx';
import ArchivePage from './pages/archive/ArchivePage.jsx';
import { SECTIONS, SITE_FLAGS, MLH } from './content/site.js';
import { SCHEDULE_CONFIG } from './content/schedule.js';
import { MINI_EVENT, MINI_EVENT_HASHES } from './content/miniEvent.js';
import { ARCHIVE_EVENTS_BY_ID, DEFAULT_ARCHIVE_EVENT_ID } from './content/archive/index.js';
import './theme/base.css';

// Which component renders each section id from SECTIONS (content/site.js).
// To add a section: build it in src/sections/, add it here, then add a line to SECTIONS.
const SECTION_COMPONENTS = {
  home: Hero,
  about: About,
  'why-join': WhyJoin,
  tracks: Tracks,
  schedule: Schedule,
  sponsors: Sponsors,
  'get-involved': GetInvolved,
  faq: Faq,
  team: Team,
  connect: Connect,
};

const REVEAL_STORAGE_KEY = 'hackaturi-site-revealed';
const ARCHIVE_HASH_PREFIX = '#archive-';

// Remembers (per browser) that an organizer unlocked the preview.
const readRevealed = () => {
  try {
    return localStorage.getItem(REVEAL_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
};

const storeRevealed = (revealed) => {
  try {
    if (revealed) localStorage.setItem(REVEAL_STORAGE_KEY, 'true');
    else localStorage.removeItem(REVEAL_STORAGE_KEY);
  } catch {
    // Storage can be blocked (private browsing); the preview then lasts until reload.
  }
};

// Turns the address-bar hash into the overlay page to show, if any.
const resolveRoute = (hash) => {
  if (hash === '#full-schedule') {
    return SCHEDULE_CONFIG.published ? { page: 'schedule' } : { page: null };
  }
  if (MINI_EVENT_HASHES.includes(hash)) {
    if (MINI_EVENT.enabled) return { page: 'mini-event' };
    // Mini-event switched off: old links land on its recap instead of nowhere.
    if (ARCHIVE_EVENTS_BY_ID[MINI_EVENT.recapArchiveId]) {
      return { page: 'archive', archiveId: MINI_EVENT.recapArchiveId };
    }
    return { page: null };
  }
  if (hash.startsWith(ARCHIVE_HASH_PREFIX)) {
    const id = hash.slice(ARCHIVE_HASH_PREFIX.length);
    return { page: 'archive', archiveId: ARCHIVE_EVENTS_BY_ID[id] ? id : DEFAULT_ARCHIVE_EVENT_ID };
  }
  return { page: null };
};

const MlhBadge = () => (
  <a className="mlh-badge" href={MLH.badgeHref} target="_blank" rel="noopener noreferrer">
    <img src={MLH.badgeImage} alt={MLH.badgeAlt} />
  </a>
);

const App = () => {
  const [hash, setHash] = useState(() => window.location.hash);
  const [isRevealed, setIsRevealed] = useState(() => !SITE_FLAGS.siteHidden || readRevealed());

  const route = resolveRoute(hash);
  const isLanding = SITE_FLAGS.siteHidden && !isRevealed;
  const isPreview = SITE_FLAGS.siteHidden && isRevealed;

  // Follow the address bar (links, back/forward buttons).
  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    return () => {
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
    };
  }, []);

  // While an overlay page is open, the page underneath is hidden and cannot scroll
  // (rules in base.css under "Full-page overlays").
  const overlayOpen = Boolean(route.page);
  useEffect(() => {
    document.documentElement.classList.toggle('has-overlay', overlayOpen);
    return () => document.documentElement.classList.remove('has-overlay');
  }, [overlayOpen]);

  // Leaving an overlay through a section link (for example "Tracks" in the header
  // above an archive page): make sure that section ends up in view.
  useEffect(() => {
    if (overlayOpen || hash.length < 2) return;
    document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [overlayOpen, hash]);

  // Clears the hash without the jump to the top that setting it to '' causes, so
  // the page underneath is where the visitor left it.
  const closeOverlay = useCallback(() => {
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    setHash('');
  }, []);

  const handleRevealSite = () => {
    const code = window.prompt('Enter access code:');
    if (code === null) return;
    if (code === SITE_FLAGS.previewCode) {
      setIsRevealed(true);
      storeRevealed(true);
      window.scrollTo(0, 0);
    } else {
      window.alert('Incorrect code.');
    }
  };

  const handleExitPreview = () => {
    setIsRevealed(false);
    storeRevealed(false);
    window.scrollTo(0, 0);
  };

  const overlay =
    (route.page === 'schedule' && <SchedulePage onClose={closeOverlay} />) ||
    (route.page === 'mini-event' && <MiniEventPage onClose={closeOverlay} />) ||
    (route.page === 'archive' && (
      <ArchivePage
        key={route.archiveId}
        eventId={route.archiveId}
        onClose={closeOverlay}
        showSiteHeader={!isLanding}
      />
    ));

  return (
    <div className={`app${MLH.showBadge ? '' : ' app--no-badge'}${isLanding ? ' app--landing' : ''}`}>
      <Starfield />
      {MLH.showBadge && <MlhBadge />}
      {overlay}

      {isLanding ? (
        <LandingPage onRevealSite={handleRevealSite} />
      ) : (
        <>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main" className="site-main" tabIndex={-1}>
            {SECTIONS.map(({ id, eyebrow }) => {
              const Section = SECTION_COMPONENTS[id];
              if (!Section) return null;
              return (
                <section key={id} id={id} className={`section section--${id}`}>
                  <div className="section-inner">
                    {/* eyebrow: the small themed line above the section's title */}
                    <Section eyebrow={eyebrow} />
                  </div>
                </section>
              );
            })}
          </main>
          <Footer onExitPreview={isPreview ? handleExitPreview : undefined} />
          <RegistrationPrompts />
        </>
      )}
    </div>
  );
};

export default App;
