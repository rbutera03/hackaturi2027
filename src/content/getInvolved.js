// src/content/getInvolved.js
// Every sign-up form the site links to, in one place.
//
// HOW TO OPEN A FORM: paste its link as the `url`. While `url` is null the card
// shows a disabled "Opening soon" button, so nothing here can point at an
// unapproved or out-of-date form.
//
//   navLabel  short name used in the header's "Get Involved" menu
//   icon      a key of FORM_ICONS in src/sections/GetInvolved.jsx

export const GET_INVOLVED_INTRO = {
  title: 'Get Involved',
  lead: 'There is a seat on this mission for everyone. Find the role that fits you.',
};

export const FORMS = [
  {
    id: 'register',
    navLabel: 'Register',
    icon: 'hacker',
    title: 'Participant Registration',
    description: 'Ready to hack? Register to attend Hack@URI 2027 as a participant.',
    cta: 'Register to hack',
    url: null,
  },
  {
    id: 'judge',
    navLabel: 'Judge',
    icon: 'judge',
    title: 'Judge Application',
    description: 'Evaluate projects and celebrate the standout work and innovation created during Hack@URI.',
    cta: 'Apply to judge',
    url: null,
  },
  {
    id: 'mentor',
    navLabel: 'Mentor',
    icon: 'mentor',
    title: 'Mentor Application',
    description: 'Guide participants through technical hurdles and support their creativity throughout the event.',
    cta: 'Apply to mentor',
    url: null,
  },
  {
    id: 'workshop',
    navLabel: 'Workshop',
    icon: 'workshop',
    title: 'Workshop Proposal',
    description: 'Share your technical expertise or industry insight by leading a workshop for our hackers.',
    cta: 'Propose a workshop',
    url: null,
  },
  {
    id: 'sponsor',
    navLabel: 'Sponsor',
    icon: 'sponsor',
    title: 'Sponsorship & Partnership Inquiries',
    description: 'Support the next generation of innovators as a sponsor or community partner.',
    cta: 'Send an inquiry',
    url: null,
    // Adds an "or email us" link under the button, so sponsors can always reach us.
    showEmail: true,
  },
];

// Convenience lookups used by the hero, sponsors section and registration prompts.
export const getForm = (id) => FORMS.find((form) => form.id === id);
export const REGISTRATION_URL = getForm('register')?.url ?? null;

// ─── Registration prompts ─────────────────────────────────────────────────────
// A one-time popup plus a small floating card that nudge visitors to register.
// They only ever appear when `enabled` is true AND the registration form above
// has a url.
export const REGISTRATION_PROMPTS = {
  enabled: false,
  // Optional last day to register, with the UTC offset, e.g. '2027-02-20T23:59:59-05:00'.
  // When set, the prompts show "N days left" and disappear after the deadline.
  deadline: null,
  popupTitle: 'Registration is open for Hack@URI 2027!',
  popupBody: 'Grab your spot and join us for a weekend of building.',
  floatingHeadline: 'Registration is open!',
  cta: 'Register now',
};
