// src/content/site.js
// Start here for every yearly update. Site-wide facts live in this file so the
// year, dates, venue, contact details and section order are each typed once.
// See docs/yearly-update-checklist.md for the full list of things to update.

// ─── The event ────────────────────────────────────────────────────────────────
export const EVENT = {
  name: 'Hack@URI',
  year: 2027,
  title: 'Hack@URI 2027',
  tagline: 'Launch your ideas into orbit.',
  description:
    "A weekend of building, learning, and exploring at the University of Rhode Island. Bring an idea or find one here, team up, and ship something you're proud of.",

  dateDisplay: 'March 6-7, 2027',
  venue: 'Fascitelli Center for Advanced Engineering',
  campus: 'University of Rhode Island, Kingston, RI',

  // Countdown targets. Keep the UTC offset on the end (-05:00 is Eastern Standard
  // Time, -04:00 is Eastern Daylight Time) so the countdown is correct in every
  // visitor's time zone.
  start: '2027-03-06T08:00:00-05:00',
  submissionsDue: '2027-03-07T09:00:00-05:00',
};

// Optional card shown in the hero INSTEAD of the countdown. Leave null before the
// event. After the event, point it at the new archive page, for example:
//   { text: 'Thanks for an amazing Hack@URI 2027!', linkLabel: 'See the projects', href: '#archive-2027' }
export const HERO_CALLOUT = null;

// ─── Site visibility ──────────────────────────────────────────────────────────
export const SITE_FLAGS = {
  // true  = visitors see only the landing page (organizers use the Preview button).
  // false = the full site is public.
  siteHidden: true,
  // Code the Preview button asks for. This only keeps casual visitors out; it is
  // visible to anyone who reads the page source, so never treat it as a password.
  previewCode: 'hackaturi-secret',
};

// ─── Sections ─────────────────────────────────────────────────────────────────
// Controls BOTH the order sections appear on the page and the header navigation.
// Reorder lines to reorder the page, delete (or comment out) a line to hide a
// section, and set inNav to choose whether it gets a header link.
// The ids must match the keys of SECTION_COMPONENTS in src/App.jsx.
//   label    name in the header navigation
//   eyebrow  small themed line above the section's title (optional)
export const SECTIONS = [
  { id: 'home', label: 'Home', inNav: false },
  { id: 'about', label: 'About', eyebrow: 'Mission briefing', inNav: false },
  { id: 'why-join', label: 'Why Join', eyebrow: 'Reasons to launch', inNav: true },
  { id: 'tracks', label: 'Tracks', eyebrow: 'Official tracks', inNav: true },
  { id: 'schedule', label: 'Schedule', eyebrow: 'Flight plan', inNav: true },
  { id: 'sponsors', label: 'Sponsors', eyebrow: 'Mission control', inNav: true },
  { id: 'get-involved', label: 'Get Involved', eyebrow: 'Join the crew', inNav: true },
  { id: 'faq', label: 'FAQ', eyebrow: 'Ground control', inNav: true },
  { id: 'team', label: 'Team', eyebrow: 'Flight crew', inNav: true },
  { id: 'connect', label: 'Connect', eyebrow: 'Stay in orbit', inNav: false },
];

// ─── Contact and social ───────────────────────────────────────────────────────
export const CONTACT = {
  email: 'hackaturi25@gmail.com',
  donateUrl: 'https://hcb.hackclub.com/donations/start/hack-uri',
};

// icon: a key of SOCIAL_ICONS in src/components/SocialLinks.jsx
export const SOCIALS = [
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/hack.at.uri/' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/company/hack-uri/' },
];

// Heading of the Connect section at the bottom of the page.
export const CONNECT = {
  title: 'Connect With Us',
  lead: "Follow along for announcements and updates, or send us a message. We'd love to hear from you.",
};

// ─── Major League Hacking ─────────────────────────────────────────────────────
// MLH publishes a new trust badge each season. Changing `season` updates the
// badge image, link and alt text together.
const MLH_SEASON = 2027;

export const MLH = {
  showBadge: true,
  season: MLH_SEASON,
  badgeHref: `https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=${MLH_SEASON}-season&utm_content=white`,
  badgeImage: `https://s3.amazonaws.com/logged-assets/trust-badge/${MLH_SEASON}/mlh-trust-badge-${MLH_SEASON}-white.svg`,
  badgeAlt: `Major League Hacking ${MLH_SEASON} Hackathon Season`,
  codeOfConductUrl: 'https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md',
};

// ─── About section ────────────────────────────────────────────────────────────
export const ABOUT = {
  title: 'About Hack@URI',
  paragraphs: [
    `Hack@URI is the University of Rhode Island's student-run hackathon: a celebration of creativity, technology, and collaboration. We're a community of students passionate about creating spaces where others can learn by building, whether it's coding, design, business, or exploring bold new ideas.`,
    `Our mission is to bridge the gap between classroom learning and real-world experience. By bringing together students from all majors, we aim to spark innovation, inspire problem-solving, and connect participants with Rhode Island's growing tech and creative community.`,
    `Whether you're a first-time hacker or a seasoned builder, Hack@URI is your chance to learn something new, meet amazing people, and make something you're proud of.`,
  ],
  // Quick facts shown beside the text.
  facts: [
    { label: 'When', value: EVENT.dateDisplay },
    { label: 'Where', value: `${EVENT.venue}, ${EVENT.campus}` },
    { label: 'Who', value: 'Students of every major and experience level (18+)' },
    { label: 'Cost', value: 'Free to attend' },
  ],
};

// ─── Landing page (shown while SITE_FLAGS.siteHidden is true) ─────────────────
// When the fall mini-event is switched on (content/miniEvent.js), the landing
// page features it automatically above these links.
export const LANDING = {
  message: 'The full site is on its way. Tracks, registration, and the schedule are coming soon!',
  links: [
    { label: 'Rapid Build 2026 Recap', href: '#archive-rapid-build-2026' },
    { label: 'Hack@URI 2026 Photos, Winners, and Projects', href: '#archive-2026' },
  ],
  followText: 'Follow us for updates',
  // Small label above the mini-event's name when it is featured.
  miniEventLabel: 'Happening this fall',
};
