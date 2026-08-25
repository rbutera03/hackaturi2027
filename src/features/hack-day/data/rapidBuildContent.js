// Single source of truth for the Rapid Build overlay page.
// Update copy, links, projects, photos, and FAQs here each cycle.

export const RAPID_BUILD_HASH = '#rapid-build';

/** Treasure-map journey markers — one per major section, top to bottom */
export const MAP_STOPS = [
  { id: 'hero',     label: 'Set Sail',         icon: '⚓' },
  { id: 'details',  label: 'Plot the Course',  icon: '🧭' },
  { id: 'photos',   label: 'Past Voyages',     icon: '📷' },
  { id: 'projects', label: 'Buried Treasure',  icon: '💎' },
  { id: 'faq',      label: "Captain's Log",    icon: '📜' },
  { id: 'cta',      label: 'X Marks the Spot', icon: '❌' },
];

/** Background star positions on the Rapid Build overlay */
export const RB_STARS = [
  { n: 1, size: 'lg', top: '5%', left: '4%' },
  { n: 2, size: 'md', top: '8%', right: '6%' },
  { n: 3, size: 'sm', top: '14%', left: '11%' },
  { n: 4, size: 'lg', top: '19%', right: '13%' },
  { n: 5, size: 'md', top: '26%', left: '2%' },
  { n: 6, size: 'sm', top: '31%', right: '4%' },
  { n: 7, size: 'md', top: '37%', left: '9%' },
  { n: 8, size: 'lg', top: '43%', right: '10%' },
  { n: 9, size: 'sm', top: '49%', left: '3%' },
  { n: 10, size: 'md', top: '54%', right: '7%' },
  { n: 11, size: 'sm', top: '59%', left: '15%' },
  { n: 12, size: 'lg', top: '64%', right: '15%' },
  { n: 13, size: 'md', top: '69%', left: '6%' },
  { n: 14, size: 'sm', top: '74%', right: '3%' },
  { n: 15, size: 'md', top: '78%', left: '13%' },
  { n: 16, size: 'sm', top: '82%', right: '11%' },
  { n: 17, size: 'lg', top: '86%', left: '2%' },
  { n: 18, size: 'md', top: '11%', left: '22%' },
  { n: 19, size: 'sm', top: '22%', right: '20%' },
  { n: 20, size: 'md', top: '35%', left: '20%' },
  { n: 21, size: 'sm', top: '47%', right: '19%' },
  { n: 22, size: 'lg', top: '58%', left: '19%' },
  { n: 23, size: 'md', top: '71%', right: '22%' },
  { n: 24, size: 'sm', top: '91%', right: '8%' },
  { n: 25, size: 'md', top: '17%', right: '26%' },
  { n: 26, size: 'sm', top: '44%', left: '24%' },
  { n: 27, size: 'md', top: '67%', right: '25%' },
  { n: 28, size: 'sm', top: '93%', left: '10%' },
];

const DONATE_URL = 'https://hcb.hackclub.com/donations/start/hack-uri';

/** Shared CTAs — rendered in the hero and bottom CTA section */
export const RAPID_BUILD_CTAS = [
  {
    id: 'apply',
    label: 'Register',
    url: 'https://events.mlh.com/events/14572-hack-uri-rapid-build',
    variant: 'primary',
    external: true,
  },
  {
    id: 'judge',
    label: 'Judge Application',
    url: '#TODO',
    variant: 'secondary',
    external: false,
  },
  {
    id: 'sponsor',
    label: 'Sponsor This Event',
    url: DONATE_URL,
    variant: 'secondary',
    external: true,
  },
];

export const RAPID_BUILD_PAGE = {
  hero: {
    title: 'Hack@URI Rapid Build',
    description:
      'A fast-paced, single-day mini-hackathon hosted by Hack@URI — build, prototype, and pitch a project in under 9 hours.',
  },

  eventDetails: {
    sectionTitle: 'Event Details',
    date: 'October 17, 2026',
    time: '8:00 AM - 5:00 PM',
    location: 'Ballentine Hall, 7 Lippitt Road, Kingston, RI 02881',
  },

  photos: {
    sectionTitle: 'Hack Day 2025',
    sectionSubtitle: 'Photos from last year\'s Hack Day!',
    // Drop images in this folder to auto-populate the carousel (sorted by filename).
    photoDirectory: '/public/images/past-events/hack-day-2025',
    items: [
      {
        src: '/images/past-events/hack-day-2025/photo-1.jpg',
        alt: 'Hack Day 2025 — hackers collaborating',
        caption: 'Teams building at Hack Day 2025',
      },
      {
        src: '/images/past-events/hack-day-2025/photo-2.jpg',
        alt: 'Hack Day 2025 — project demos',
        caption: 'Closing pitches and demos',
      },
      {
        src: '/images/past-events/hack-day-2025/photo-3.jpg',
        alt: 'Hack Day 2025 — event space',
        caption: 'The energy on event day',
      },
    ],
  },

  projects: {
    sectionTitle: 'Past Hack Day Projects',
    sectionSubtitle: 'Standout builds from last year\'s Mini HackDay — explore even more on Devpost!',
    galleryCta: {
      label: "See the Full Project Gallery",
      url: 'https://hack-uri-mini-hackday.devpost.com/project-gallery',
    },
    items: [
      {
        id: 'claroma',
        title: 'Claroma',
        description:
          'A VR anatomy app that lets users explore 3D models of the skeleton, muscles, and heart, then uses Gemini Vision to explain any region they point to.',
        teamMembers: ['Sansrit Paudel', 'Priyankan Kiru'],
        tracks: [],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/855/878/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/claroma',
      },
      {
        id: 'home-feature-analyzer',
        title: 'Home Feature Analyzer',
        description:
          'A Gemini-powered tool that scans property photos, extracts key selling features, and auto-generates a marketing-ready sales pitch for real estate listings.',
        teamMembers: ['Tunde Fakolujo', 'Angel Bencosme'],
        tracks: ['Best use of Gemini API'],
        featured: true,
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/856/271/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/home-feature-analyzer',
      },
      {
        id: 'foursight',
        title: 'FourSight',
        description:
          'Turns a university degree-requirements document into a prerequisite-compliant 4-year course schedule so students can see a guaranteed path to graduation.',
        teamMembers: ['Peter Card', 'Jackson Torres', 'Junrong Liu'],
        tracks: [],
        image: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/003/856/197/datas/medium.png',
        devpostUrl: 'https://devpost.com/software/foursight-3szqbg',
      },
    ],
  },

  faqs: {
    sectionTitle: 'FAQ',
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

  cta: {
    sectionTitle: 'Be Part of the Adventure!',
    sectionSubtitle: 'Register now, volunteer as a judge, or help sponsor the event!',
    buttons: RAPID_BUILD_CTAS,
  },
};
