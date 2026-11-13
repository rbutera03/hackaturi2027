// src/content/sponsors.js
// Sponsors, partners and donors, plus the "become a sponsor" copy.
//
// ONLY ENTRIES WITH confirmed: true APPEAR ON THE SITE.
// Everything below was carried over from Hack@URI 2026 and is switched off.
// When an organization confirms for this year, change its line to
// confirmed: true (and update its tier if that changed). To add a new one, copy
// a line and put the logo file in public/images/sponsors/.

// Tiers, in the order they are displayed. An empty tier is not shown.
export const SPONSOR_TIERS = [
  { id: 'lead', label: 'Lead Sponsor' },
  { id: 'gold', label: 'Gold Sponsors' },
  { id: 'silver', label: 'Silver Sponsors' },
  { id: 'bronze', label: 'Bronze Sponsors' },
  { id: 'partner', label: 'Partners' },
];

export const SPONSORS = [
  // ── Lead ────────────────────────────────────────────────────────────────────
  { name: 'yconic', tier: 'lead', logo: '/images/sponsors/yconic-transparent.png', url: 'https://yconic.ai/', confirmed: false },

  // ── Gold ────────────────────────────────────────────────────────────────────
  { name: 'RiseUp', tier: 'gold', logo: '/images/sponsors/riseup.png', url: 'https://rise-upinnovation.org/', confirmed: false },
  { name: 'RI Hub', tier: 'gold', logo: '/images/sponsors/RIHub.png', url: 'https://rihub.org/', confirmed: false },
  { name: 'URI Library Innovation Lab', tier: 'gold', logo: '/images/sponsors/library_innovation_lab.png', url: 'https://web.uri.edu/innovate/', confirmed: false },
  { name: 'URI Department of Computer Science and Statistics', tier: 'gold', logo: '/images/sponsors/uri_CSaS.png', url: 'https://web.uri.edu/cs/', confirmed: false },
  { name: 'URI College of Business', tier: 'gold', logo: '/images/sponsors/uri_CoB.png', url: 'https://web.uri.edu/business/', confirmed: false },

  // ── Silver ──────────────────────────────────────────────────────────────────
  { name: 'Brightstar', tier: 'silver', logo: '/images/sponsors/brightstar.png', url: 'https://www.brightstarlottery.com/', confirmed: false },
  { name: 'URI Research Foundation', tier: 'silver', logo: '/images/sponsors/urirf-transparent.png', url: 'https://web.uri.edu/research/', confirmed: false },

  // ── Bronze ──────────────────────────────────────────────────────────────────
  { name: 'MergeFund', tier: 'bronze', logo: '/images/sponsors/mergefund-transparent.png', url: 'https://www.mergefund.org/', confirmed: false },
  { name: 'Factset', tier: 'bronze', logo: '/images/sponsors/factset.png', url: 'https://www.factset.com/', confirmed: false },
  { name: 'Microway', tier: 'bronze', logo: '/images/sponsors/microway.png', url: 'https://www.microway.com/', confirmed: false },
  { name: 'URI College of Engineering', tier: 'bronze', logo: '/images/sponsors/uri_CoE.png', url: 'https://web.uri.edu/engineering/', confirmed: false },
  { name: 'URI Digital Forensics and Cyber Security Center', tier: 'bronze', logo: '/images/sponsors/uri_CSF.png', url: 'https://web.uri.edu/cs/dfcsc/', confirmed: false },
  { name: 'URI Cyber Club', tier: 'bronze', logo: '/images/sponsors/cyberclub.png', url: 'https://www.instagram.com/uricyberclub/', confirmed: false },
  { name: 'Major League Hacking', tier: 'bronze', logo: '/images/sponsors/mlh-logo-color.png', url: 'https://mlh.io/', confirmed: false },

  // ── Partners ────────────────────────────────────────────────────────────────
  { name: 'Monster', tier: 'partner', logo: '/images/sponsors/monster.png', url: 'https://www.monsterenergy.com/en-us/', confirmed: false },
  { name: 'The Move App', tier: 'partner', logo: '/images/sponsors/themoveapp.png', url: 'https://www.themoveapp.io/', confirmed: false },
  { name: 'URI AI Lab', tier: 'partner', logo: '/images/sponsors/uri_ailab.png', url: 'https://web.uri.edu/iacr/iacr-workshops-outreach/', confirmed: false },
  { name: 'CCRI', tier: 'partner', logo: '/images/sponsors/ccri.png', url: 'https://www.ccri.edu/', confirmed: false },
  { name: 'Pure Buttons', tier: 'partner', logo: '/images/sponsors/Pure-Buttons-Logo.png', url: 'https://mlh.link/MLH-PureButtons-hackathons', confirmed: false },
  { name: 'URI Institute for AI and Computational Research', tier: 'partner', logo: '/images/sponsors/uri_IACR.png', url: 'https://events.uri.edu/group/center_for_computational_research', confirmed: false },
];

// Individual donors, listed by name. Same rule: only confirmed: true is shown.
export const DONORS = [
  { name: 'Stacey Azevedo', confirmed: false },
  { name: 'Erin Butera', confirmed: false },
  { name: 'Joseph Graf', confirmed: false },
  { name: 'Tara Rugg', confirmed: false },
  { name: 'Anne Totoro', confirmed: false },
  { name: 'Joel Totoro', confirmed: false },
];

// Copy for the section. `emptyState` is shown until the first confirmation.
export const SPONSORS_COPY = {
  title: 'Sponsors, Partners & Donors',
  lead: 'Hack@URI is made possible by the organizations and people who believe in student builders.',
  emptyState: {
    title: 'Our 2027 crew is assembling',
    body: "We're confirming this year's sponsors and partners now and will announce them here soon.",
  },
  donorsTitle: 'Our Generous Donors',
};

// "Become a sponsor" block shown under the logos.
export const SPONSORSHIP = {
  title: 'Sponsor Hack@URI 2027',
  lead: 'Partner with us to support the next generation of builders. Sponsorship is available at several levels, and we are happy to shape a package around your goals.',
  benefits: [
    {
      title: 'Meet talented students',
      body: 'Connect with computer science, engineering, design, and business students. Hack@URI 2026 welcomed 200+ participants from 60+ universities.',
    },
    {
      title: 'Showcase your brand',
      body: 'Reach students through our sponsorship fair, company-led workshops, and mentorship opportunities.',
    },
    {
      title: 'Support innovation across disciplines',
      body: 'Hack@URI brings together students from engineering, business, arts and sciences, and beyond: designers, entrepreneurs, and creators of all kinds.',
    },
    {
      title: 'Grow a URI tradition',
      body: "Hack@URI 2026 was the first student-run, multi-track, MLH-affiliated hackathon in URI's history. Your support builds momentum for years to come.",
    },
  ],
  contactTitle: 'Get in touch',
  contactBody: 'Tell us what you have in mind and a member of our sponsorship team will get back to you.',
  // Optional link to a sponsorship packet or impact report. Leave null to hide the button.
  prospectusUrl: null,
  prospectusLabel: 'View the sponsorship packet',
};
