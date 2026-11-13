// src/content/miniEvent.js
// Everything on the mini-event page: the small one-day hackathon we run each
// fall while the main site is still hidden behind the landing page.
//
// HOW IT IS USED
//   enabled: true   The landing page features the event, and #mini-event opens
//                   its page (src/pages/mini-event/).
//   enabled: false  Nothing about it is shown. Old links to the page
//                   (#mini-event, #rapid-build) open the recap named in
//                   `recapArchiveId` instead.
//
// EACH FALL
//   1. Update the details below (date, buttons, schedule, FAQ, ...).
//   2. Set `enabled: true`.
//   After the event: add a recap to content/archive/ (see the notes in
//   content/archive/index.js), point `recapArchiveId` at it, and set
//   `enabled: false`.
//
// The page is drawn in the current site theme. Any section whose list is empty
// (schedule items, projects, FAQ) is left off the page, so you can publish the
// basics first and fill in the rest later.
//
// The details below are from Rapid Build 2026, kept as a starting point.

// Link that opens the page. Older links to #rapid-build keep working.
export const MINI_EVENT_HASH = '#mini-event';
export const MINI_EVENT_HASHES = [MINI_EVENT_HASH, '#rapid-build'];

export const MINI_EVENT = {
  enabled: false,

  // id of the archive event (content/archive/) shown instead while disabled.
  recapArchiveId: 'rapid-build-2026',

  // ── The basics ────────────────────────────────────────────────────────────
  name: 'Hack@URI Rapid Build',
  description:
    'A fast-paced, single-day mini-hackathon hosted by Hack@URI. Build, prototype, and pitch a project in under 9 hours.',
  date: 'October 17, 2026',
  time: '8:00 AM - 5:00 PM',
  location: 'Ballentine Hall, 7 Lippitt Road, Kingston, RI 02881',

  // Buttons shown at the top and bottom of the page.
  // variant: 'primary' (filled) or 'secondary' (outlined).
  buttons: [
    {
      label: 'MLH Page',
      url: 'https://events.mlh.com/events/14572-hack-uri-rapid-build',
      variant: 'primary',
    },
    {
      label: 'Join the Discord!',
      url: 'https://discord.gg/chABaXyTT',
      variant: 'secondary',
    },
  ],

  // Labels on the "journey" trail that runs down the side of the page.
  // Icons: rocket, compass, camera, gem, scroll, flag
  // (the list is STOP_ICONS in src/pages/mini-event/MiniEventPage.jsx).
  stops: {
    hero: { label: 'Launch Pad', icon: 'rocket' },
    details: { label: 'Flight Plan', icon: 'compass' },
    photos: { label: 'Past Missions', icon: 'camera' },
    projects: { label: 'Discoveries', icon: 'gem' },
    faq: { label: 'Mission Log', icon: 'scroll' },
    cta: { label: 'Liftoff', icon: 'flag' },
  },

  // ── Schedule ──────────────────────────────────────────────────────────────
  schedule: {
    title: 'Event Details',
    // Kinds of schedule item. `accent` is one of the theme's accent colours:
    // cyan, blue, purple, pink, yellow, mint.
    types: [
      { id: 'kickoff', label: 'Kickoff', accent: 'yellow' },
      { id: 'hacking', label: 'Hacking', accent: 'cyan' },
      { id: 'workshop', label: 'Workshops', accent: 'purple' },
      { id: 'fun', label: 'Food & Fun', accent: 'mint' },
      { id: 'judging', label: 'Judging & Awards', accent: 'pink' },
    ],
    // In the order they happen. `emoji`, `location` and `description` are
    // optional; `highlight: true` makes an item stand out.
    items: [
      {
        time: '8:00 - 8:45 AM',
        title: 'Check-In + Breakfast',
        type: 'fun',
        location: 'Lobby',
        description: 'Check in, grab breakfast, and get settled before the day begins.',
      },
      {
        time: '8:45 - 9:15 AM',
        title: 'Opening Ceremony + Challenge Kickoff',
        type: 'kickoff',
        location: 'Rm 114',
        description: 'Meet the organizers, learn about the challenge, and get the rundown for the day.',
      },
      {
        time: '9:15 - 9:30 AM',
        title: 'Team Formation',
        type: 'kickoff',
        location: 'Lobby & 114',
        description: 'Find your teammates, brainstorm, and decide what you want to build.',
      },
      {
        time: '9:45 AM - 12:30 PM',
        title: 'Hacking Begins',
        type: 'hacking',
        emoji: '💻',
        location: '101 & 102',
        description: 'Time to build! Work with your team and reach out to mentors whenever you need help.',
        highlight: true,
      },
      {
        time: '10:00 - 11:00 AM',
        title: 'Workshop: Hackathon Survival Guide',
        type: 'workshop',
        emoji: '🔧',
        location: 'Rm 114',
        description: 'Learn new skills, get inspired, and pick up tips to help bring your hackathon idea to life.',
      },
      {
        time: '12:30 - 1:30 PM',
        title: 'Lunch + Games',
        type: 'fun',
        emoji: '🍕🎲',
        location: 'Rm 110 & Lobby',
        description: 'Take a break, grab some food, and enjoy games like Uno, Jenga, and puzzles.',
      },
      {
        time: '1:30 - 2:00 PM',
        title: 'Mini Workshop: Career Building 101',
        type: 'workshop',
        emoji: '🔧',
        location: 'Rm 114',
        description: 'Take a quick break from your project and learn something new.',
      },
      {
        time: '2:00 - 2:15 PM',
        title: 'Type Racer Challenge',
        type: 'fun',
        emoji: '⌨️⚡',
        location: 'Rm 114',
        description: 'Put your typing speed to the test!',
      },
      {
        time: '2:15 - 3:30 PM',
        title: 'Final Hacking Session',
        type: 'hacking',
        emoji: '🚀',
        location: '101 & 102',
        description: 'Finish your project, polish your work, and get your submission ready.',
      },
      {
        time: '3:30 PM',
        title: 'Project Submission Deadline',
        type: 'judging',
        emoji: '🚨',
        description: 'All projects must be submitted by 4:00 PM sharp.',
        highlight: true,
      },
      {
        time: '3:35 - 3:45 PM',
        title: 'Prepare Presentation for Judging',
        type: 'judging',
        emoji: '🎤',
        location: '101 & 102',
      },
      {
        time: '3:50 - 4:50 PM',
        title: 'Judging + Presentations',
        type: 'judging',
        emoji: '🎤',
        location: 'Rm 114',
        description: 'Show the judges what you built!',
        highlight: true,
      },
      {
        time: '4:50 - 5:00 PM',
        title: 'Awards + Group Photo',
        type: 'judging',
        emoji: '🏆📸',
        location: 'Rm 114',
        description: 'Celebrate the day, announce the winners, and take our final group photo.',
      },
    ],
  },

  // ── Photos from a past year ───────────────────────────────────────────────
  photos: {
    title: 'Hack Day 2025',
    subtitle: "Photos from last year's Hack Day!",
    // Every image in this folder is shown. Add or remove files to change the slideshow.
    photoDirectory: '/public/images/past-events/hackday2025',
    // Files to show first, in this order. The rest follow alphabetically.
    photoOrder: ['opening2.jpeg', 'workshop.jpeg', 'working.jpg', 'all.jpg'],
    // Optional captions, by file name without its extension.
    captions: {
      all: 'A Successful Hack Day 2025!',
      opening2: 'Opening Remarks and Kickoff!',
      working: 'Teams working throughout the day!',
      workshop: 'First Time Hackers Workshop!',
    },
  },

  // ── Projects from a past year ─────────────────────────────────────────────
  projects: {
    title: 'Past Hack Day Projects',
    subtitle: "Standout builds from last year's Mini HackDay. Explore even more on Devpost!",
    galleryLabel: 'See the Full Project Gallery',
    galleryUrl: 'https://hack-uri-mini-hackday.devpost.com/project-gallery',
    // `tracks` are shown as badges; `featured: true` adds a Winner ribbon.
    items: [
      {
        projectName: 'Claroma',
        description:
          'A VR anatomy app that lets users explore 3D models of the skeleton, muscles, and heart, then uses Gemini Vision to explain any region they point to.',
        teamMembers: ['Sansrit Paudel', 'Priyankan Kiru'],
        tracks: [],
        image:
          'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/855/878/datas/medium.png',
        projectUrl: 'https://devpost.com/software/claroma',
      },
      {
        projectName: 'Home Feature Analyzer',
        description:
          'A Gemini-powered tool that scans property photos, extracts key selling features, and auto-generates a marketing-ready sales pitch for real estate listings.',
        teamMembers: ['Tunde Fakolujo', 'Angel Bencosme'],
        tracks: ['Best use of Gemini API'],
        featured: true,
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/856/271/datas/medium.png',
        projectUrl: 'https://devpost.com/software/home-feature-analyzer',
      },
      {
        projectName: 'FourSight',
        description:
          'Turns a university degree-requirements document into a prerequisite-compliant 4-year course schedule so students can see a guaranteed path to graduation.',
        teamMembers: ['Peter Card', 'Jackson Torres', 'Junrong Liu'],
        tracks: [],
        image:
          'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/856/197/datas/medium.png',
        projectUrl: 'https://devpost.com/software/foursight-3szqbg',
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  // Same format as content/faq.js: each item has an `answer`, `bullets`, or both.
  faq: {
    title: 'FAQ',
    items: [
      {
        question: 'What is Hack@URI Rapid Build?',
        answer:
          'Hack@URI Rapid Build is a one-day, beginner-friendly hackathon designed for students who want to explore hackathons in a welcoming, low-pressure environment. Participants spend the day learning new skills, collaborating with teammates, and building a project from start to finish.',
      },
      {
        question: 'Who should attend?',
        answer:
          "Anyone! Whether you're a beginner looking to get hands-on experience or an experienced developer looking to sprint on a quick idea, this event is built for all skill levels.",
      },
      {
        question: 'Do I need prior coding experience?',
        answer:
          "Not at all. We will have mentors, workshops, and starter resources to help you get something up and running even if you've never coded before.",
      },
      {
        question: 'How long is the event?',
        answer:
          'This is a highly focused 1-day event. Doors open at 8:00 AM and closing pitches/awards wrap up by 5:00 PM.',
      },
      {
        question: 'Why should I participate?',
        bullets: [
          'Build something real in a single day',
          'Collaborate with creative peers and mentors',
          'Free food, drinks, and stickers',
          'Perfect low-stakes warmup for our flagship overnight spring hackathon!',
        ],
      },
    ],
  },

  // ── Closing call to action (uses `buttons` from above) ────────────────────
  cta: {
    title: 'Be Part of the Adventure!',
    subtitle: 'Sign up, join the Discord, and bring a friend!',
  },
};
