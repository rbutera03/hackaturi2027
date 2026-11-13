// src/theme/archive/index.js
// The looks that past events keep on their archive pages.
//
// An event picks one with `theme: '<key>'` in its file under content/archive/.
// Events without a theme use the current site theme.
//
// Each theme is one CSS file that re-declares the site's colour tokens
// (src/theme/tokens.css) inside its own class, so it only affects the archive
// page it is used on. A theme may also provide a `Decor` component for
// decorations drawn behind the page.
//
// TO FREEZE THIS YEAR'S LOOK before re-theming the site for a new year:
//   1. Copy the :root block from tokens.css into a new file here, e.g.
//      space-2027.css, and change `:root` to `.archive-theme--space-2027`.
//      Also add `--archive-bg: var(--gradient-page);` so the page keeps its
//      background.
//   2. Import the file below and add an entry to ARCHIVE_THEMES.
//   3. Set `theme: 'space-2027'` on that year's archive event.

import RapidBuildDecor from './RapidBuildDecor.jsx';
import './pirate-2026.css';
import './rapid-build-2026.css';

export const ARCHIVE_THEMES = {
  'pirate-2026': {
    className: 'archive-theme--pirate-2026',
  },
  'rapid-build-2026': {
    className: 'archive-theme--rapid-build-2026',
    Decor: RapidBuildDecor,
  },
};
