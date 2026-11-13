// src/content/whyJoin.js
// "Why Join Hack@URI?" section: the reasons grid and the numbers strip.
//
//   icon      a key of REASON_ICONS in src/sections/WhyJoin.jsx
//   featured  true makes that reason a full-width highlight card

export const WHY_JOIN_INTRO = {
  title: 'Why Join Hack@URI?',
  lead: 'One weekend, a lot to take home.',
};

export const REASONS = [
  {
    icon: 'build',
    title: 'Build real-world projects',
    body: 'Turn an idea into a working project in a single weekend and leave with something for your portfolio.',
  },
  {
    icon: 'people',
    title: 'Meet students from different universities',
    body: 'Team up with hackers from other schools and make friends you would never have met in class.',
  },
  {
    icon: 'learn',
    title: 'Learn new technologies',
    body: "Try the tools, languages, and platforms you haven't had the chance to use yet.",
  },
  {
    icon: 'network',
    title: 'Network with professionals',
    body: 'Talk with the mentors, judges, and sponsors who work in the industry every day.',
  },
  {
    icon: 'workshop',
    title: 'Attend workshops and get hands-on',
    body: 'Pick up new skills in workshops, then put them to use on your project right away.',
  },
  {
    icon: 'prize',
    title: 'Compete for prizes',
    body: 'Submit your project to a track and compete for prizes.',
  },
  {
    icon: 'community',
    title: 'A welcoming community for every experience level',
    body: "First hackathon or fiftieth, you belong here. Come as you are and we'll help you get started.",
    featured: true,
  },
];

// Numbers from the most recent Hack@URI. Update after each event.
export const STATS = {
  heading: 'Hack@URI 2026 by the numbers',
  items: [
    { value: '200+', label: 'Hackers' },
    { value: '60+', label: 'Universities' },
    { value: '40', label: 'Projects submitted' },
  ],
};
