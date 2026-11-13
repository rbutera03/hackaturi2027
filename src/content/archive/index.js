// src/content/archive/index.js
// The list of past events. Each one gets a page at #archive-<id> and a link in
// the header's Archive menu.
//
// TO ARCHIVE AN EVENT
//   1. Copy one of the files in this folder and fill it in.
//   2. Import it below and add it to ARCHIVE_EVENTS (newest first).
//   3. Put its photos in public/images/past-events/<folder>/.
//
// FIELDS IN AN EVENT FILE
//   id              used in the address: #archive-<id>
//   navLabel        name in the header's Archive menu
//   theme           optional key of ARCHIVE_THEMES (src/theme/archive/index.js);
//                   leave it out to use the current site theme
//   pageTitle       heading of the page
//   pageSubtitle    the write-up under the heading
//   pageDescription optional extra paragraph
//   photoDirectory  folder of photos for the slideshow
//   heroImages      optional list of image URLs, used if the folder is empty
//   photoCaption    optional line under the slideshow
//   photoCredit     optional photographer credit
//   links.photos    optional [{ label, url }] buttons to full photo albums
//   links.galleryUrl / galleryTitle / galleryDescription
//                   the "view all projects" link (links.devpostUrl also works)
//   winners         { title, subtitle, announced, showImages, items: [...] }
//     each item:    projectName, teamMembers, description, tracks, image,
//                   projectUrl (or devpostUrl), linkLabel

import HACKATURI_2026 from './hackaturi2026.js';
import RAPID_BUILD_2026 from './rapidbuild2026.js';

export const ARCHIVE_EVENTS = [RAPID_BUILD_2026, HACKATURI_2026];

export const ARCHIVE_EVENTS_BY_ID = Object.fromEntries(ARCHIVE_EVENTS.map((event) => [event.id, event]));

// Shown when an archive link has an id that does not exist.
export const DEFAULT_ARCHIVE_EVENT_ID = '2026';

// Links for the header's Archive menu.
export const ARCHIVE_NAV_ITEMS = ARCHIVE_EVENTS.map((event) => ({
  id: `#archive-${event.id}`,
  label: event.navLabel,
}));
