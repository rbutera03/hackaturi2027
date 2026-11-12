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
    label: 'MLH Page',
    url: 'https://events.mlh.com/events/14572-hack-uri-rapid-build',
    variant: 'primary',
    external: true,
  },
  {
    id: 'discord',
    label: 'Join the Discord!',
    url: 'https://discord.gg/chABaXyTT',
    variant: 'secondary',
    external: true,
  },
  /*{
    id: 'judge',
    label: 'Judge Application',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScnDVY9nGMoVpF7vuINR2ltyv4S0wMAVP0Q2XGOnhp_i9aviw/viewform',
    variant: 'secondary',
    external: false,
  },
  {
    id: 'sponsor',
    label: 'Sponsor This Event',
    url: DONATE_URL,
    variant: 'secondary',
    external: true,
  },*/
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
    scheduleTypes: [
      { id: 'kickoff', label: 'Kickoff' },
      { id: 'hacking', label: 'Hacking' },
      { id: 'workshop', label: 'Workshops' },
      { id: 'fun', label: 'Food & Fun' },
      { id: 'judging', label: 'Judging & Awards' },
    ],
    schedule: [
      {
        start: '08:00',
        end: '08:45',
        time: '8:00–8:45 AM',
        title: 'Check-In + Breakfast',
        type: 'fun',
        location: 'Lobby',
        description: 'Check in, grab breakfast, and get settled before the day begins.',
      },
      {
        start: '08:45',
        end: '09:15',
        time: '8:45–9:15 AM',
        title: 'Opening Ceremony + Challenge Kickoff',
        type: 'kickoff',
        location: 'Rm 114',
        description: 'Meet the organizers, learn about the challenge, and get the rundown for the day.',
      },
      {
        start: '09:15',
        end: '09:30',
        time: '9:15–9:30 AM',
        title: 'Team Formation',
        type: 'kickoff',
        location: 'Lobby & 114',
        description: 'Find your teammates, brainstorm, and decide what you want to build.',
      },
      {
        start: '09:45',
        end: '12:30',
        time: '9:45 AM–12:30 PM',
        title: 'Hacking Begins',
        type: 'hacking',
        emoji: '💻',
        location: '101 & 102',
        description: 'Time to build! Work with your team and reach out to mentors whenever you need help.',
        highlight: true,
      },
      {
        start: '10:00',
        end: '11:00',
        time: '10:00–11:00 AM',
        title: 'Workshop: Hackathon Survival Guide',
        type: 'workshop',
        emoji: '🔧',
        location: 'Rm 114',
        description: 'Learn new skills, get inspired, and pick up tips to help bring your hackathon idea to life.',
      },
      {
        start: '12:30',
        end: '13:30',
        time: '12:30–1:30 PM',
        title: 'Lunch + Games',
        type: 'fun',
        emoji: '🍕🎲',
        location: 'Rm 110 & Lobby',
        description: 'Take a break, grab some food, and enjoy games like Uno, Jenga, and puzzles.',
      },
      {
        start: '13:30',
        end: '14:00',
        time: '1:30–2:00 PM',
        title: 'Mini Workshop: Career Building 101',
        type: 'workshop',
        emoji: '🔧',
        location: 'Rm 114',
        description: 'Take a quick break from your project and learn something new.',
      },
      {
        start: '14:00',
        end: '14:15',
        time: '2:00–2:15 PM',
        title: 'Type Racer Challenge',
        type: 'fun',
        emoji: '⌨️⚡',
        location: 'Rm 114',
        description: 'Put your typing speed to the test!',
      },
      {
        start: '14:15',
        end: '15:30',
        time: '2:15–3:30 PM',
        title: 'Final Hacking Session',
        type: 'hacking',
        emoji: '🚀',
        location: '101 & 102',
        description: 'Finish your project, polish your work, and get your submission ready.',
      },
      {
        start: '15:30',
        end: '15:30',
        time: '3:30 PM',
        title: 'Project Submission Deadline',
        type: 'judging',
        emoji: '🚨',
        description: 'All projects must be submitted by 4:00 PM sharp.',
        highlight: true,
      },
      {
        start: '15:35',
        end: '15:45',
        time: '3:35–3:45 PM',
        title: 'Prepare Presentation for Judging',
        type: 'judging',
        emoji: '🎤',
        location: '101 & 102',
      },
      {
        start: '15:50',
        end: '16:50',
        time: '3:50–4:50 PM',
        title: 'Judging + Presentations',
        type: 'judging',
        emoji: '🎤',
        location: 'Rm 114',
        description: 'Show the judges what you built!',
        highlight: true,
      },
      {
        start: '16:50',
        end: '17:00',
        time: '4:50–5:00 PM',
        title: 'Awards + Group Photo',
        type: 'judging',
        emoji: '🏆📸',
        location: 'Rm 114',
        description: 'Celebrate the day, announce the winners, and take our final group photo.',
      },
    ],
  },

  photos: {
    sectionTitle: 'Hack Day 2025',
    sectionSubtitle: 'Photos from last year\'s Hack Day!',
    // Drop images in this folder to auto-populate the carousel.
    photoDirectory: '/public/images/past-events/hackday2025',
    // Filename order for the carousel. Unlisted files still appear after these.
    photoOrder: [
      'opening2.jpeg',
      'workshop.jpeg',
      'working.jpg',
      'all.jpg',
    ],
    items: [
      {
        src: '/images/past-events/hackday2025/all.jpg',
        alt: 'Hack Day 2025 — group photo',
        caption: 'The full Hack Day 2025 crew',
      },
      {
        src: '/images/past-events/hackday2025/openening1.jpeg',
        alt: 'Hack Day 2025 — opening remarks',
        caption: 'Opening the day',
      },
      {
        src: '/images/past-events/hackday2025/opening2.jpeg',
        alt: 'Hack Day 2025 — kickoff',
        caption: 'Kickoff and welcome',
      },
      {
        src: '/images/past-events/hackday2025/organizers.jpg',
        alt: 'Hack Day 2025 — organizers',
        caption: 'Hack Day 2025 organizers',
      },
      {
        src: '/images/past-events/hackday2025/working.jpg',
        alt: 'Hack Day 2025 — teams building',
        caption: 'Teams building throughout the day',
      },
      {
        src: '/images/past-events/hackday2025/workshop.jpeg',
        alt: 'Hack Day 2025 — workshop',
        caption: 'Workshop session',
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
