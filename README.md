# Hack@URI Website

The website for Hack@URI, the University of Rhode Island's student-run hackathon. It is a single-page React + Vite site.

**Updating the site for a new year?** Follow [docs/yearly-update-checklist.md](docs/yearly-update-checklist.md). Almost everything you need to edit is in `src/content/`.

**Want to know why the code is laid out this way?** Read [docs/2027-redesign-changes.md](docs/2027-redesign-changes.md).

## Prerequisites

- [Node.js](https://nodejs.org/) 20.19 or newer (or 22.12+). Older 20.x versions build with a warning.
- [npm](https://www.npmjs.com/) (bundled with Node.js)

## Setup

```bash
git clone https://github.com/rbutera03/hackaturi2027.git
cd hackaturi2027
npm install
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server (usually at http://localhost:5173) and reloads as you edit |
| `npm run lint` | Checks the code with ESLint |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Builds, then serves the production build locally with Wrangler |
| `npm run deploy` | Builds, then deploys to Cloudflare with Wrangler (settings in `wrangler.jsonc`) |

## Seeing the full site while it is hidden

While `SITE_FLAGS.siteHidden` is `true` in `src/content/site.js`, visitors only see the landing page. To see the full site, select **Preview** in the bottom corner of the landing page and enter the code from `SITE_FLAGS.previewCode`. Your browser remembers it; use "Preview mode: back to the landing page" in the footer to undo it.

The code is visible to anyone who reads the page source. It keeps casual visitors out and is not a password.

## Project structure

```text
src/
├── App.jsx            decides what is on screen (landing page, full site, overlay pages)
├── index.jsx          entry point
├── content/           everything that changes yearly: text, dates, links, people
│   ├── site.js          event facts, section order, contact, socials, MLH, flags
│   ├── tracks.js, whyJoin.js, sponsors.js, getInvolved.js,
│   │   schedule.js, faq.js, team.js, miniEvent.js
│   └── archive/         one file per past event
├── theme/             the look of the site
│   ├── tokens.css       colours, fonts, spacing (re-theme here)
│   ├── base.css         shared styles: sections, cards, buttons, tabs
│   ├── Starfield.jsx    animated star background (planets and the rocket in SpaceDecor.jsx)
│   └── archive/         frozen themes that past events keep on their archive pages
├── sections/          one component (and stylesheet) per home page section
├── pages/             full-screen pages: landing, schedule, mini-event, archive
├── components/        pieces shared by several sections or pages
└── assets/            images imported by code
public/
└── images/            sponsor logos, team photos, speaker photos, past-event photos
docs/                  the update checklist and the redesign notes
```

## How it works

- There is no router. The home page is one long page, and the header links jump to its sections.
- `SECTIONS` in `src/content/site.js` sets the order of the sections and which ones get a header link.
- Three kinds of full-screen page open on top of the site, chosen by the address:
  - `#full-schedule` opens the schedule page (only while the schedule is published).
  - `#mini-event` opens the fall mini-event page (only while it is enabled; `#rapid-build` also works).
  - `#archive-<id>` opens a past event, for example `#archive-2026`.
- Features that are not ready stay off until their content is filled in:
  - A form button is disabled until its `url` is set (`src/content/getInvolved.js`).
  - A sponsor is shown only when it has `confirmed: true` (`src/content/sponsors.js`).
  - The schedule is shown only when `published` is `true` (`src/content/schedule.js`).

## Common tasks

The [checklist](docs/yearly-update-checklist.md) has a full "Where do I change...?" table. The most common:

| Task | Where |
| --- | --- |
| Change the event date, venue, or countdown | `EVENT` in `src/content/site.js` |
| Open a sign-up form | paste its link as the `url` in `src/content/getInvolved.js` |
| Show a confirmed sponsor | set `confirmed: true` in `src/content/sponsors.js` |
| Publish the schedule | fill in `src/content/schedule.js`, then set `published: true` |
| Make the full site public | set `SITE_FLAGS.siteHidden` to `false` in `src/content/site.js` |
| Add a past event | add a file in `src/content/archive/` and list it in `index.js` there |
| Change colours or fonts | `src/theme/tokens.css` |

### Adding a section

1. Create `src/sections/MySection.jsx` (and a `.css` file if needed). `About.jsx` is a small one to copy.
2. Put its text in a new file in `src/content/`.
3. In `src/App.jsx`, import it and add it to `SECTION_COMPONENTS`.
4. In `src/content/site.js`, add a line to `SECTIONS` where it should appear.

## Conventions

- **Content stays out of components.** Text, dates, links, and names go in `src/content/`.
- **Colours come from tokens.** In CSS, use the role tokens from `src/theme/tokens.css` (`var(--color-accent)`, `var(--color-surface)`, and so on) instead of writing colour values. This is what lets the theme change in one place and lets archive pages wear their own colours.
- **Reuse the shared styles** in `src/theme/base.css` before writing new ones: `.card`, `.btn`, `.tabs`, `.pill`, `.section-heading`.
- **Naming:** `PascalCase` for components, `camelCase` for variables and functions, `CONSTANT_CASE` for the exported content objects, and `kebab-case` for CSS classes.
- **Accessibility:** use real `<a>` and `<button>` elements, give images `alt` text, and do not remove focus outlines. Animations must respect the reduced-motion rules at the bottom of `base.css`.
- Run `npm run lint` before opening a pull request.

## Testing in other browsers

[playwright.md](playwright.md) explains how to open the local site in Chromium, Firefox, and WebKit (Safari's engine).

## Troubleshooting

### Port already in use

```bash
npm run dev -- --port 3000
```

### Dependency problems

PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

macOS/Linux:

```bash
rm -rf node_modules
npm install
```

### Changes not showing up

- Confirm `npm run dev` is still running.
- Hard refresh the browser (`Ctrl+Shift+R`).
- If you are looking at the landing page instead of the site, see "Seeing the full site while it is hidden" above.

## License

MIT
