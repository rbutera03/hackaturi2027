# Hack@URI 2027 redesign: what changed and why

This explains the changes made for the 2027 site (branch `space-theme-2027`). If you are here to update the site for a new year, go straight to [yearly-update-checklist.md](./yearly-update-checklist.md).

## In short

- The site moved from the pirate theme to a space theme that matches the sponsorship site: animated starfield, astronaut ram, scroll animations, and hover effects.
- Four new sections were added for the director's goals: Why Join, six Tracks, Sponsors/Partners/Donors with sponsorship information, and Get Involved with five form placeholders.
- Everything that changes from year to year now lives in `src/content/`. Updating the site is mostly editing text in those files.
- Past events keep the look they had when they ran. The Rapid Build page became a reusable "mini-event" page for the fall hackathon.
- No new npm packages were added.

## What visitors see

| Director's goal | What was built |
| --- | --- |
| 1. Six official tracks | A "Choose Your Mission" section with one card per track. Each card has its own colour, an animated planet icon, and a short tagline. Selecting a card opens a "mission brief" with a description and starter ideas. |
| 2. Why Join Hack@URI? | Seven reason cards (the seventh, the welcoming community, is full width) and a strip of 2026 numbers. |
| 3. Sponsors, Partners & Donors | Logos on light plates grouped by tier, donors by name, a "Sponsor Hack@URI 2027" block with four benefits, and a contact card (email, inquiry form, donate). Only organizations marked `confirmed: true` are shown; until one is, the section says the list is being confirmed. |
| 4. Forms & Get Involved | Five cards: Participant Registration, Judge Application, Mentor Application, Workshop Proposal, Sponsorship & Partnership Inquiries. Each shows a disabled "Opening soon" button until its link is pasted in. |
| 5. Galaxy design | Starfield with twinkling and shooting stars, planets, a rocket and a satellite in the background, a hero with the astronaut ram, orbiting planets and a countdown to March 6, 2027, scroll-in animations, hover effects, and a rebuilt phone menu. |

Also changed:

- **Landing page** (shown while the site is hidden) is in the space theme with the countdown and links to the two 2026 recaps.
- **Schedule** shows a "coming soon" card until it is published.
- **Team cards** no longer flip. Role, major, class year, fun fact, and links are always visible, which works better on phones and with keyboards.
- **Hero** no longer shows "Powered by" sponsor logos, so no unconfirmed sponsor can appear there.
- **Volunteer** and **Guest Speaker** form cards were dropped because they are not on the 2027 list.
- **Mini-event closing line** was reworded to match the two buttons the page has (it used to mention judging and sponsoring, which had no buttons).

## How the code is organized now

```text
src/
├── App.jsx            decides what is on screen (landing page, full site, overlay pages)
├── index.jsx          entry point
├── content/           EVERYTHING THAT CHANGES YEARLY (text, dates, links, people)
│   ├── site.js          event name/date/venue, section order, contact, socials, MLH, flags
│   ├── tracks.js        the six tracks
│   ├── whyJoin.js       reasons and stats
│   ├── sponsors.js      sponsors, donors, sponsorship pitch
│   ├── getInvolved.js   form links, registration popup
│   ├── schedule.js      schedule and speakers
│   ├── faq.js           questions and answers
│   ├── team.js          organizers
│   ├── miniEvent.js     the fall mini-event page
│   └── archive/         one file per past event
├── theme/             the look of the site
│   ├── tokens.css       colours, fonts, spacing (re-theme here)
│   ├── base.css         shared building blocks: sections, cards, buttons, tabs
│   ├── Starfield.jsx    animated star background (planets and the rocket in SpaceDecor.jsx)
│   └── archive/         frozen themes of past events
├── sections/          one file pair per section of the home page
├── pages/             full-screen pages: landing, schedule, mini-event, archive
├── components/        pieces shared by more than one section or page
└── assets/            images imported by code (the ram)
```

Before, the code was in 13 feature folders, most holding one component, one stylesheet, and an `index.js` that only re-exported the component. Yearly values were spread through the JSX of about a dozen files.

## Decisions and the reasons for them

### Content is separated from code

Every date, link, name, and paragraph is in `src/content/`. Components read from those files; the only wording left in them is short button text such as "Opening soon". The next person can update the site without reading React code, and a wrong edit is unlikely to break the layout.

`content/site.js` holds each site-wide fact once. The year, date, and venue used to be typed separately in the hero, countdown, landing page, footer, and badge.

### One list controls the page order and the navigation

`SECTIONS` in `content/site.js` sets the order of sections on the page, the links in the header, and the small themed label above each section's title. Previously a new section had to be added in `App.jsx` and again in `Header.jsx`, and the two could drift apart.

### Colours come from role tokens

`theme/tokens.css` defines the palette (taken from `hackaturi-sponsorship`) and then roles such as `--color-surface`, `--color-accent`, and `--gradient-primary`. Components only use the roles. Re-theming for a future year means editing that one file.

Three small departures from the sponsorship palette, all for readability:

- The primary button gradient is slightly deeper so white text has enough contrast.
- The purple, pink, and blue used for text are lightened versions of the palette colours.
- A mint green was added as a sixth accent so each of the six tracks has its own colour.

### Past events keep their own look

Each archive event names a `theme` in its content file. A theme is one CSS file in `theme/archive/` that re-declares the colour tokens inside its own class, so it affects only that archive page:

- `pirate-2026.css` is the cream, teal, and gold of Hack@URI 2026.
- `rapid-build-2026.css` is the treasure-map look of Rapid Build 2026. It owns its decorations (`RapidBuildDecor.jsx` and two images), so nothing else on the site can change it.

The site header above an archive page stays in the current theme so navigation is consistent. `theme/archive/index.js` explains how to freeze the current look before the next re-theme.

### The Rapid Build page became the mini-event page

`pages/mini-event/` draws whatever is in `content/miniEvent.js`: details, buttons, schedule, past photos, past projects, and FAQ. It uses the current site theme. Sections with no content are left out.

- `enabled: true` features the event on the landing page and opens its page at `#mini-event`.
- `enabled: false` (the setting now, because Rapid Build 2026 is over) hides it. Old links to `#rapid-build` and `#mini-event` open the Rapid Build 2026 recap instead.

The old page drew its treasure trail by measuring the page with JavaScript. The new trail is CSS only.

### Nothing unconfirmed or out of date can go live by accident

- **Sponsors:** only entries with `confirmed: true` render. The 2026 list was carried over with every entry set to `confirmed: false`.
- **Forms:** a card is disabled while its `url` is `null`. Last year's form links were not reused.
- **Schedule:** hidden behind `published: false`. Last year's schedule is still in the file as a template.
- **Registration popup:** off until `enabled` is true and the registration form has a link.

### Pages that open on top of the site

The schedule page, mini-event page, and archive pages are full-screen layers opened by the address (`#full-schedule`, `#mini-event`, `#archive-<id>`). The site underneath keeps its scroll position, so closing a page returns visitors to where they were. The browser's back button works as expected.

### Smaller shared pieces instead of repeated code

Several things existed two or three times with small differences. Each is now one component in `src/components/`: `Tabs` (FAQ, Team), `Accordion` (FAQ, mini-event), `PhotoCarousel` and `ProjectCard` (archive, mini-event), `SocialLinks` (Connect, landing), `RegistrationPrompts` (was a popup and a floating card in separate files), `PageOverlay`, `SectionHeading`, and `Reveal`.

### No new dependencies

The starfield is one `<canvas>`, with planets and a rocket drawn as SVG on top of it (`SpaceDecor.jsx`). Scroll animations use the browser's `IntersectionObserver`. Everything else is CSS. This keeps the site fast and leaves nothing extra to maintain.

### Accessibility and performance

- Every interactive element is a real link or button, with a visible focus ring for keyboard users.
- Expanding items (track cards, FAQ, menus) announce their open or closed state to screen readers.
- Visitors who ask their device for reduced motion get a still page: no looping animations, no scroll-in effects, and a single still frame of stars.
- A "Skip to content" link is the first stop for keyboard users.
- Images below the top of the page load only when needed.
- The starfield pauses while the tab is in the background.
- Navigation links are plain anchors with CSS smooth scrolling, replacing the old JavaScript scroll helpers.

## What was removed

All were confirmed unused by searching the code before deletion.

- Pirate artwork in `src/assets/` (about 8.7 MB): `pirate1.png` to `pirate7.png`, `pirate_ram.*`, `ram*.png`, `logo.png`, `porthole.svg`, `sponsor-scroll.svg`, `treasure-chest.svg`.
- `BottomBanner` component (was not rendered anywhere).
- `src/index.css` (folded into `theme/base.css`).
- `public/favicon.svg` (the pirate logo). The other favicons were regenerated from the space ram.
- The `index.js` re-export file in each feature folder.
- Mini-event helper components replaced by shared ones: `Hero`, `CtaSection`, `CtaButtonGroup`, `MapStop`, `TreasureTrail`, `PhotoStrip`, `ProjectShowcase`, `Faq`.

The two images still used by the Rapid Build 2026 theme moved to `src/theme/archive/assets/`.

## Where files went

| Old path | New path |
| --- | --- |
| `src/app/App.jsx` | `src/App.jsx` |
| `src/shared/styles/shared.css`, `src/index.css` | `src/theme/base.css`, `src/theme/tokens.css` |
| `src/features/home/HomeSection.*` | `src/sections/Hero.*` |
| `src/features/home/components/Countdown.*` | `src/components/Countdown.*` |
| `src/features/home/pages/LandingPage.*` | `src/pages/LandingPage.*` |
| `src/features/about/AboutSection.*` | `src/sections/About.*` |
| `src/features/tracks/TracksSection.*` | `src/sections/Tracks.*` |
| `src/features/sponsors/SponsorsSection.*` | `src/sections/Sponsors.*` |
| `src/features/interest/InterestSection.*` | `src/sections/GetInvolved.*` |
| `src/features/faq/FAQSection.*` | `src/sections/Faq.*` |
| `src/features/team/TeamSection.*` | `src/sections/Team.*` |
| `src/features/connect/ConnectSection.*` | `src/sections/Connect.jsx`, `src/components/SocialLinks.*` |
| `src/features/schedule/ScheduleSection.*` | `src/sections/schedule/ScheduleSection.*` |
| `src/features/schedule/components/*` | `src/sections/schedule/*` |
| `src/features/schedule/pages/SchedulePage.jsx` | `src/pages/SchedulePage.jsx` |
| `src/features/schedule/data/scheduleData.js` | `src/content/schedule.js` (data), `src/sections/schedule/scheduleUtils.js` (helpers) |
| `src/features/layout/components/Header.*`, `Footer.*` | `src/components/Header.*`, `Footer.*` |
| `src/features/registration/components/*` | `src/components/RegistrationPrompts.*` |
| `src/features/archive/ArchivePage.*` | `src/pages/archive/ArchivePage.*` |
| `src/features/archive/components/Winners.*` | `src/pages/archive/Winners.*`, `src/components/ProjectCard.*` |
| `src/features/archive/data/events/*` | `src/content/archive/*` |
| `src/features/archive/themes/*` | `src/theme/archive/*` |
| `src/features/hack-day/RapidBuildPage.*` | `src/pages/mini-event/MiniEventPage.*` |
| `src/features/hack-day/data/rapidBuildContent.js` | `src/content/miniEvent.js` |
| (new) | `src/sections/WhyJoin.*`, `src/theme/Starfield.*`, `src/theme/SpaceDecor.jsx`, `src/components/Reveal.jsx`, `Tabs.jsx`, `Accordion.*`, `PhotoCarousel.*`, `PageOverlay.jsx`, `SectionHeading.jsx` |
| (new) | `src/content/site.js`, `tracks.js`, `whyJoin.js`, `sponsors.js`, `getInvolved.js`, `faq.js`, `team.js` |

Files were moved with `git mv`, so `git log --follow <file>` still shows their history.

## Draft text and assumptions to review

This wording was written during the redesign and has not been approved by the director:

- Hero tagline ("Launch your ideas into orbit.") and description, in `content/site.js`.
- Track taglines, descriptions, and starter ideas, in `content/tracks.js`.
- The one-line descriptions under each Why Join reason, in `content/whyJoin.js`. The seven headings are the director's.
- Sponsorship benefits and contact text, in `content/sponsors.js`.
- The small labels above section titles ("Mission control", "Flight crew", and so on), in `SECTIONS` in `content/site.js`.
- The landing page message, in `LANDING` in `content/site.js`.

These were carried over from 2026 and need replacing or checking:

- Team roster, FAQ answers, and the schedule (used only as a hidden template).
- The 2026 numbers (200+ hackers, 60+ universities, 40 projects) come from the Hack@URI 2026 archive write-up.

One assumption: the countdown uses last year's hours, an 8:00 AM start on Saturday and submissions due at 9:00 AM on Sunday, Eastern time.

All of these are listed as tasks in the checklist.

## How it was checked

- `npm run lint` and `npm run build` pass.
- Every view was opened in Microsoft Edge at desktop (1440px), tablet (820px), and phone (390px) widths and screenshotted: landing page, each home page section, the phone menu, both archive pages, the mini-event page, and the full schedule page.
- The switched-off features were tested by temporarily turning them on, then restoring the files: published schedule and speaker popup, mini-event enabled, all sponsors confirmed, registration open with popup and floating card.
- Checked by script: no browser console errors, no content wider than the screen, focus moves into popups and Escape closes them, and reduced-motion mode shows all content.

Not checked:

- Firefox, Safari, and real phones. Only Edge (Chromium) was used.
- Screen readers, and no automated accessibility audit (Lighthouse or axe) was run. Colours were chosen for contrast but not measured by a tool.
- The production deploy (`npm run deploy`).

## Known limits and suggestions

- **Large photos.** `public/images/past-events/` is about 30 MB, and five Rapid Build 2026 photos are 2 to 6 MB each. Several speaker photos are over 1.5 MB. They load only when viewed, but resizing them to about 1600px wide would make those pages much faster. They were left untouched.
- **Node version.** Vite 7 asks for Node 20.19 or newer (or 22.12+). The build works on 20.17 but prints a warning.
- **Preview code.** The Preview button's code is visible to anyone who reads the page source. It keeps casual visitors out and is not a password.
- **Devpost images.** Project thumbnails on the archive pages load from Devpost's servers. During testing some of them failed to load on some visits (the connection was reset), which looks like a network issue rather than a site bug. When one fails, the card shows the project's first letter instead.
- **Leftover 2026 wording in content.** Two lines in carried-over content look out of date and were left for the team to decide: the Rapid Build 2026 recap mentions a "48-hour hackathon in the spring", and the mini-event schedule template says projects are due at 3:30 PM in one place and 4:00 PM in another.
