const MLH_GALLERY_URL = 'https://www.mlh.com/events/hack-uri-rapid-build/submissions';

const RAPID_BUILD_2026 = {
  id: 'rapid-build-2026',
  navLabel: 'Rapid Build 2026',
  theme: 'rapid-build',
  pageTitle: 'Hack@URI Rapid Build 2026',
  pageSubtitle: 'Thank you all so much for coming! On October 17, 2026, students packed Ballentine Hall for a single day of building, and 16 projects were submitted by the end of it. Congratulations to everyone who participated! Gus Cloud, created by Isaac Gbaba, won Best Open-Source AI Project, and Pris, created by Camden Rose, Steven Doss, and Arnaud Sioho, won Best Use of Gemma 4. We also want to recognize our honorable mentions: Gemma Quest, created by Eric L., and Mote, created by Joshua M., Jesse H., and DJ D. Be sure to congratulate all of our winners and honorable mentions!',
  photoCaption: 'Look out for our bigger 48-hour hackathon in the spring. More information to come!',
  links: {
    galleryUrl: MLH_GALLERY_URL,
    galleryTitle: 'View all projects on MLH',
    galleryDescription: 'Want to see what everyone else built? Browse every Rapid Build submission.',
    photos: [],
  },
  photoDirectory: '/public/images/past-events/rapidbuild2026',
  winners: {
    title: 'Event Winners',
    subtitle: 'Hack@URI Rapid Build 2026',
    announced: true,
    showImages: false,
    items: [
      {
        projectName: 'Gus Cloud',
        teamMembers: ['Isaac Gbaba'],
        description: "Built on Gus, an open-source 'Git for AI Context,' Gus Cloud shows how engineers and AI agents work together. It connects AI sessions and context to code changes, human decisions, pull requests, deployments, and measurable engineering outcomes.",
        tracks: ['🏆 Best Open-Source AI Project'],
        projectUrl: 'https://www.mlh.com/events/hack-uri-rapid-build/submissions/01a14b4f-5cb7-2979-374d-d7df95982c01',
        linkLabel: 'View on MLH',
      },
      {
        projectName: 'Pris',
        teamMembers: ['Camden Rose', 'Steven Doss', 'Arnaud Sioho'],
        description: "'Where Worlds Meet': a personalized literacy platform. Younger readers practice pronunciation with clickable letter sounds, voice recognition, and picture clues, and older students work on spelling and comprehension. Gemma generates grade-appropriate content that teachers organize into rings, assign, and track.",
        tracks: ['🏆 Best Use of Gemma 4'],
        projectUrl: 'https://www.mlh.com/events/hack-uri-rapid-build/submissions/01a14b54-a1dc-f1ff-60d7-48466532b844',
        linkLabel: 'View on MLH',
      },
      {
        projectName: 'Gemma Quest',
        teamMembers: ['Eric L.'],
        description: 'An AI-powered text adventure inspired by old-school choose-your-own-adventure games, with Gemma narrating the story as you play.',
        tracks: ['⭐ Honorable Mention'],
        projectUrl: 'https://www.mlh.com/events/hack-uri-rapid-build/submissions/01a14b59-9821-d46e-074a-e4ab97337ce0',
        linkLabel: 'View on MLH',
      },
      {
        projectName: 'Mote',
        teamMembers: ['Joshua M.', 'Jesse H.', 'DJ D.'],
        description: 'A local AI assistant for Windows that lives at your cursor and works across every app. Ask questions, analyze what is on screen, attach files, use voice input, and trigger safe desktop actions, all powered by open-weight models running on-device through Ollama.',
        tracks: ['⭐ Honorable Mention'],
        projectUrl: 'https://www.mlh.com/events/hack-uri-rapid-build/submissions/01a14b56-4f9d-66a6-f46b-be458cf20eb4',
        linkLabel: 'View on MLH',
      },

    ],
  },
};

export default RAPID_BUILD_2026;
