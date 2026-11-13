# Hack@URI website update checklist

Almost every update is an edit to a file in `src/content/`. Each of those files starts with a comment explaining its fields. You should rarely need to open anything in `sections/`, `pages/`, or `components/`.

- [Part 1](#part-1-before-the-2027-site-goes-public) is the list of things still open for Hack@URI 2027.
- [Part 2](#part-2-every-year) is the routine for each new year.
- [Part 3](#part-3-the-fall-mini-event) is the routine for the fall mini-event.
- [Where do I change...?](#where-do-i-change) is a quick lookup table.

To see your changes, run `npm run dev` and open the address it prints. While the site is hidden you will see the landing page; select **Preview** in the bottom corner and enter the code from `SITE_FLAGS.previewCode` in `src/content/site.js` to see the full site.

---

## Part 1: Before the 2027 site goes public

### Needs a decision or sign-off from the director

- [ ] **Event hours.** The countdown assumes last year's hours: start 8:00 AM Saturday, March 6, and submissions due 9:00 AM Sunday, March 7 (Eastern). Confirm or fix `start` and `submissionsDue` in `src/content/site.js`.
- [ ] **Track descriptions.** The tagline, description, and starter ideas for each of the six tracks are drafts. Review `src/content/tracks.js`.
- [ ] **Why Join descriptions.** The seven headings are the director's; the sentence under each is a draft. Review `src/content/whyJoin.js`.
- [ ] **Hero tagline and description.** "Launch your ideas into orbit." and the paragraph under it are drafts. Review `EVENT.tagline` and `EVENT.description` in `src/content/site.js`.
- [ ] **Sponsorship text.** The four benefits and the contact wording are drafts based on the sponsorship site. Review `SPONSORSHIP` in `src/content/sponsors.js`.
- [ ] **About facts.** "Students of every major and experience level (18+)" and "Free to attend" were taken from last year's FAQ. Confirm in `ABOUT.facts` in `src/content/site.js`.

### Waiting on other teams

- [ ] **Form links (Logistics).** When each Google Form is approved, paste its link as the `url` in `src/content/getInvolved.js`. The card's button turns on by itself.
  - [ ] Participant Registration (this also turns on the hero's Register button)
  - [ ] Judge Application
  - [ ] Mentor Application
  - [ ] Workshop Proposal
  - [ ] Sponsorship / Partnership Inquiries
- [ ] **Registration popup (optional).** Once registration is open, set `REGISTRATION_PROMPTS.enabled` to `true` in `src/content/getInvolved.js` and add the `deadline`.
- [ ] **Confirmed sponsors (Sponsorship).** In `src/content/sponsors.js`, set `confirmed: true` only for organizations confirmed for 2027, and fix their `tier`. Add new ones by copying a line and putting the logo in `public/images/sponsors/`. Do the same for `DONORS`.
- [ ] **Sponsorship packet (optional).** If there is a PDF or page to share, set `SPONSORSHIP.prospectusUrl` in `src/content/sponsors.js` and a button appears.
- [ ] **Schedule (Logistics).** Replace the 2026 schedule and speakers in `src/content/schedule.js`, including the two `date` lines, then set `published: true`. Speaker photos go in `public/images/workshop-speakers/`.

### Carried over from 2026 and must be replaced

- [ ] **Team roster.** `src/content/team.js` is the 2026 team. Update names, roles, and photos (`public/images/team-photos/`).
- [ ] **FAQ answers.** Read every answer in `src/content/faq.js` against this year's rules (team size, age, parking, what to bring).
- [ ] **2026 numbers.** "200+ hackers, 60+ universities, 40 projects" appear in `STATS` in `src/content/whyJoin.js` and in the sponsorship benefits in `src/content/sponsors.js`. Confirm they are right.
- [ ] **Contact email.** The site uses `hackaturi25@gmail.com` (`CONTACT.email` in `src/content/site.js`). Confirm it is still the right inbox.

### Launch

- [ ] Run `npm run lint` and `npm run build`. Both should finish without errors.
- [ ] Check the site on a real phone, and in Safari and Firefox. It has only been tested in Edge so far.
- [ ] Set `SITE_FLAGS.siteHidden` to `false` in `src/content/site.js`. This replaces the landing page with the full site for everyone.
- [ ] Deploy with `npm run deploy`.

### After the event

- [ ] Set `HERO_CALLOUT` in `src/content/site.js` to replace the countdown with a thank-you message and a link to the results. There is an example in the comment above it.
- [ ] Set `showInlineCalendar: false` in `src/content/schedule.js` if you want the home page to stop showing the live schedule.
- [ ] Add the event to the archive (Part 2, step 1).

---

## Part 2: Every year

Work through these in order when starting on the next year's site.

### 1. Archive the event that just finished

- [ ] Copy a file in `src/content/archive/` (for example `hackaturi2026.js`), rename it, and fill it in: write-up, winners, links. The field list is at the top of `src/content/archive/index.js`.
- [ ] Add it to `ARCHIVE_EVENTS` in `src/content/archive/index.js`, newest first. It then appears in the header's Archive menu by itself. Update `DEFAULT_ARCHIVE_EVENT_ID` in the same file to the new event's id.
- [ ] Put the photos in `public/images/past-events/<folder>/`. Resize them first (about 1600px wide is plenty); full-size camera photos are several MB each and slow the page down.
- [ ] If the site is about to get a new theme, freeze the current look first so the archive page keeps it. The steps are at the top of `src/theme/archive/index.js`.

### 2. Hide the site while you work

- [ ] Set `SITE_FLAGS.siteHidden` to `true` in `src/content/site.js`.
- [ ] Update `LANDING` in the same file (message and links to recaps).
- [ ] Set `HERO_CALLOUT` back to `null`.

### 3. Update the event facts

All in `src/content/site.js` unless noted.

- [ ] `EVENT`: `year`, `title`, `dateDisplay`, `venue`, `tagline`, `description`.
- [ ] `EVENT.start` and `EVENT.submissionsDue`. Keep the `-05:00` on the end (use `-04:00` if the event is after the clocks change in mid-March).
- [ ] `MLH_SEASON`, once MLH publishes the new season's trust badge. Check that the badge image appears in the top right corner.
- [ ] `ABOUT`, `CONTACT`, and `SOCIALS` if anything changed.
- [ ] `index.html` (in the repo root): the year and date in the `<title>` and the description.

### 4. Reset everything that must be confirmed again

- [ ] `src/content/getInvolved.js`: set every form `url` back to `null`, set `REGISTRATION_PROMPTS.enabled` to `false` and `deadline` to `null`, and update the year in the text.
- [ ] `src/content/sponsors.js`: set every sponsor and donor to `confirmed: false`, and update the year in `SPONSORS_COPY` and `SPONSORSHIP`.
- [ ] `src/content/schedule.js`: set `published: false`.

### 5. Update the content

- [ ] Tracks: `src/content/tracks.js`. Add, remove, or reorder entries and the section follows (cards are laid out three per row on desktop). If the number of tracks changes, also update "Six tracks" in `TRACKS_INTRO`.
- [ ] Why Join and stats: `src/content/whyJoin.js`.
- [ ] FAQ: `src/content/faq.js`.
- [ ] Team: `src/content/team.js` and `public/images/team-photos/`.
- [ ] Then, as things are confirmed: form links, sponsors, schedule (the "Waiting on other teams" items in Part 1).

### 6. New theme (only if the theme is changing)

- [ ] Freeze the old look for the archive first (step 1).
- [ ] Change the palette at the top of `src/theme/tokens.css`. Components only use the role tokens below it, so most of the site follows.
- [ ] Update the themed labels: the `eyebrow` lines in `SECTIONS` (`src/content/site.js`), the track card wording in `src/content/tracks.js`, and the trail labels in `src/content/miniEvent.js`.
- [ ] Replace the mascot images in `src/assets/` and the favicons in `public/`.
- [ ] The starfield is `src/theme/Starfield.jsx`. The planets and the rocket are `src/theme/SpaceDecor.jsx` (positions in `Starfield.css`). Remove `<Starfield />` from `src/App.jsx` if the new theme does not want the sky.
- [ ] Update `theme-color` in `index.html` and the colours in `public/site.webmanifest` to match the new background.

### 7. Check and launch

- [ ] `npm run lint` and `npm run build`.
- [ ] Look at every section at phone, tablet, and desktop widths, and open each archive page.
- [ ] Follow the "Launch" steps in Part 1.

---

## Part 3: The fall mini-event

The mini-event page is for the small one-day hackathon in the fall, while the main site is still hidden. Everything is in `src/content/miniEvent.js`.

### Before the event

- [ ] Update the name, description, date, time, and location.
- [ ] Update `buttons` (sign-up link, Discord, and so on).
- [ ] Update `schedule.items`. Leave the list empty to hide the schedule until it is ready.
- [ ] Update `photos`, `projects`, and `faq`, or empty them to hide those parts.
- [ ] Set `enabled: true`. The landing page now features the event, and its page opens at `#mini-event`.

Note: the schedule currently in the file is from Rapid Build 2026. Its "Project Submission Deadline" entry says 3:30 PM in the time and 4:00 PM in the description; fix whichever is wrong when you reuse it.

### After the event

- [ ] Add a recap to the archive (Part 2, step 1).
- [ ] Set `recapArchiveId` to the new recap's `id`, so old links to the event page lead to the recap.
- [ ] Set `enabled: false`.
- [ ] Add a link to the recap in `LANDING.links` in `src/content/site.js`.

---

## Where do I change...?

| I want to change | File |
| --- | --- |
| Event name, year, date, venue, countdown | `src/content/site.js` (`EVENT`) |
| Whether the public sees the landing page or the full site | `src/content/site.js` (`SITE_FLAGS.siteHidden`) |
| The Preview code | `src/content/site.js` (`SITE_FLAGS.previewCode`) |
| Order of sections, header links, labels above titles | `src/content/site.js` (`SECTIONS`) |
| Contact email, donation link, social links | `src/content/site.js` (`CONTACT`, `SOCIALS`) |
| MLH badge | `src/content/site.js` (`MLH_SEASON`, `MLH`) |
| About text | `src/content/site.js` (`ABOUT`) |
| Landing page text and links | `src/content/site.js` (`LANDING`) |
| Tracks | `src/content/tracks.js` |
| Why Join reasons and numbers | `src/content/whyJoin.js` |
| Sponsors, donors, sponsorship pitch | `src/content/sponsors.js` |
| Form links, registration popup | `src/content/getInvolved.js` |
| Schedule, speakers | `src/content/schedule.js` |
| FAQ | `src/content/faq.js` |
| Team | `src/content/team.js` |
| Fall mini-event | `src/content/miniEvent.js` |
| Past events | `src/content/archive/` |
| Colours, fonts, spacing | `src/theme/tokens.css` |
| Browser tab title and search description | `index.html` |

### Adding a new section to the home page

1. Create `src/sections/MySection.jsx` (and a `.css` file if it needs styles). Copy a small one such as `About.jsx` as a starting point.
2. Put its text in a new file in `src/content/`.
3. In `src/App.jsx`, import it and add it to `SECTION_COMPONENTS`.
4. In `src/content/site.js`, add a line to `SECTIONS` where you want it to appear.
