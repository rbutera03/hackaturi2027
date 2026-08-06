// Single source of truth for the Rapid Build overlay page.
// Update copy, links, projects, photos, and FAQs here each cycle.

export const RAPID_BUILD_HASH = '#rapid-build';

const DONATE_URL = 'https://hcb.hackclub.com/donations/start/hack-uri';

/** Shared CTAs — rendered in the hero and bottom CTA section */
export const RAPID_BUILD_CTAS = [
  {
    id: 'apply',
    label: 'Apply',
    url: '#TODO',
    variant: 'primary',
    external: false,
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
    date: 'October 24 (tentative)',
    time: '8:00 AM – 5:00 PM',
    location: 'TBD',
  },

  photos: {
    sectionTitle: 'Hack Day 2025',
    sectionSubtitle: 'Photos from last year\'s Hack Day.',
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
    sectionSubtitle: 'A few standout builds from previous Rapid Build / Hack Day events.',
    items: [
      {
        id: 'campus-queue',
        title: 'Campus Queue',
        description: 'A real-time dining hall wait-time tracker built in one day so students could plan lunch around the shortest lines.',
        devpostUrl: null,
        image: null,
      },
      {
        id: 'study-match',
        title: 'StudyMatch',
        description: 'A lightweight app that matched students by course and availability for same-day study sessions on campus.',
        devpostUrl: null,
        image: null,
      },
      {
        id: 'lost-and-found-bot',
        title: 'Lost & Found Bot',
        description: 'A Discord bot that cataloged found items around URI and pinged students when a match was posted.',
        devpostUrl: null,
        image: null,
      },
    ],
  },

  faqs: {
    sectionTitle: 'FAQ',
    items: [
      
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
    sectionTitle: 'Ready to build?',
    sectionSubtitle: 'Apply now, volunteer as a judge, or help sponsor the event.',
    buttons: RAPID_BUILD_CTAS,
  },
};
