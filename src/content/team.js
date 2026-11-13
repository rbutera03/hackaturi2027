// src/content/team.js
// The organizing team, grouped into the tabs shown in the Team section.
//
// Each member: name, avatar (file under public/images/team-photos/), and
// optionally role, major, classYear, funFact, linkedin, github.
// Leave a field out (or empty) and it simply is not shown.
//
// NOTE: this is the Hack@URI 2026 roster, carried over unchanged. Replace it
// with the 2027 team before launch (see docs/yearly-update-checklist.md).

export const TEAM_TITLE = 'Meet the Crew';

// Used when a member has no photo yet.
export const TEAM_FALLBACK_AVATAR = '/images/team-photos/rhody_filler_image.jpg';

export const TEAM_GROUPS = [
  {
    id: 'leadership',
    label: 'Leadership',
    members: [
      { name: 'Lily Nguyen', avatar: '/images/team-photos/execs/lily.jpg', role: 'Co-Director', major: 'Computer Science', classYear: '2026', funFact: 'I am a twin!', linkedin: 'https://www.linkedin.com/in/lily-nguyen02/' },
      { name: 'Ayishat Oguntade', avatar: '/images/team-photos/execs/ayishat.jpg', role: 'Co-Director', major: 'Computer Science B.S', classYear: '2027', funFact: 'I have a cat named Bruno', linkedin: 'https://www.linkedin.com/in/ayishat-oguntade-0a8454202/' },
    ],
  },
  {
    id: 'tech-dev',
    label: 'Tech Dev',
    members: [
      { name: 'Jenny You', avatar: '/images/team-photos/tech/jenny.jpg', role: 'Lead', major: 'Computer Science', classYear: '2025', funFact: 'I lived in China for 5 years', linkedin: 'http://linkedin.com/in/j-you', github: 'https://github.com/muolii' },
      { name: 'Ryan Butera', avatar: '/images/team-photos/tech/ryan.jpg', role: 'Lead', major: 'Computer Science & Data Science', classYear: '2026', funFact: "I'm in the process of watching every Disney Channel Original Movie with my friends", linkedin: 'https://linkedin.com/in/ryan-butera', github: 'https://github.com/rbutera03' },
      { name: 'Riley Maguire', avatar: '/images/team-photos/tech/riley.jpg', major: 'Computer Science B.S.', classYear: '2025' },
    ],
  },
  {
    id: 'marketing-outreach',
    label: 'Marketing & Outreach',
    members: [
      { name: 'Nathan Azevedo', avatar: '/images/team-photos/market/nathanazevedoheadshot.png', role: 'Lead', major: 'Computer Science B.S.', classYear: '2028', funFact: 'I make balloon animals', linkedin: 'https://www.linkedin.com/in/nathan-azevedo-152196372/' },
      { name: 'Lawrence Cabbabe', avatar: '/images/team-photos/market/lawrence.jpg', role: 'Lead', major: 'Computer Science B.S.', classYear: '2025', funFact: 'Cars 2 is a fantastic movie', linkedin: 'https://www.linkedin.com/in/lawrence-says-hello/', github: 'https://github.com/lmcprogram' },
      { name: 'Babajide Fakolujo', avatar: '/images/team-photos/market/jide-lead.jpg', role: 'Lead', major: 'Computer Science B.S.', classYear: '2028' },
      { name: 'Chris Batista', avatar: '/images/team-photos/market/chris.jpg', role: 'Lead / Photographer', major: 'Computer Science B.S.', classYear: '2028', funFact: "I race gokarts competitively and I'm also a photographer :)", linkedin: 'https://www.linkedin.com/in/chris-batista', github: 'https://github.com/25px' },
      { name: 'Cadije Louis', avatar: '/images/team-photos/market/cadije.jpg', major: 'Computer Science BS + Africana Studies BA', classYear: '2027', funFact: 'I have a dog named Sharkboy', linkedin: 'https://www.linkedin.com/in/cadije-louis', github: 'https://github.com/Elmo333' },
      { name: 'Roquibat Adetunji', avatar: '/images/team-photos/finance/roquibat.jpg', major: 'Computer Science', classYear: '2027', funFact: "I'm double jointed" },
      { name: 'Anjola Fapohunda', avatar: '/images/team-photos/market/anjola.jpg', major: 'Computer Science, Mathematics, Cybersecurity', classYear: '2026', funFact: 'I speak Chinese', linkedin: 'https://www.linkedin.com/in/anjolaoluwa-fapohunda' },
    ],
  },
  {
    id: 'sponsorship',
    label: 'Sponsorship',
    members: [
      { name: 'Meghan Andrews', avatar: '/images/team-photos/sponsor/meghan.jpg', role: 'Lead', major: 'Computer Science', classYear: '2026', funFact: 'I train and compete with my dogs in agility competitions', linkedin: 'https://www.linkedin.com/in/meghan-andrews22', github: 'https://github.com/mandrews12' },
      { name: 'Ethan Moreta', avatar: '/images/team-photos/sponsor/ethan2.jpg', major: 'Computer Science B.S.', classYear: '2026', funFact: "I can solve the Rubik's cube", linkedin: 'https://www.linkedin.com/in/ethanmoreta', github: 'https://github.com/EthanMoreta' },
      { name: 'Olivia Clark', avatar: '/images/team-photos/sponsor/liv.jpg', major: 'Chemical Engineering', classYear: '2028', funFact: 'My hair used to be green!' },
      { name: 'Riley Maguire', avatar: '/images/team-photos/tech/riley.jpg', major: 'Computer Science B.S.', classYear: '2025' },
    ],
  },
  {
    id: 'finance',
    label: 'Finance',
    members: [
      { name: 'Liam McKenzie', avatar: '/images/team-photos/rhody_filler_image.jpg', role: 'Lead', major: 'Computer Science', classYear: '2027', funFact: 'This is my second time doing the whole college thing. I have a completion certificate in accounting', github: 'https://github.com/lmckenzie99' },
      { name: 'Damian Lapena Vidal', avatar: '/images/team-photos/finance/damian.jpg', major: 'Computer Engineering', classYear: '2027', funFact: "I'm from Spain", linkedin: 'https://www.linkedin.com/in/damianlapevi/', github: 'https://github.com/damianlapenavidal' },
      { name: 'Marvens Sainterlien', avatar: '/images/team-photos/finance/marvens.jpg', major: 'Computer Science', classYear: '2026', funFact: 'My favorite football club is Arsenal', linkedin: 'https://www.linkedin.com/in/marvens-sainterlien/', github: 'https://github.com/marvensC' },
      { name: 'Arybella Theul', avatar: '/images/team-photos/finance/arybella.jpg', major: 'Data Science B.S.', classYear: '2026', funFact: 'I love to ski', linkedin: 'https://www.linkedin.com/in/arybella-theul' },
      { name: 'Olamide Britto', avatar: '/images/team-photos/finance/olamide.jpg', major: 'Computer Science B.S.', classYear: '2026', linkedin: 'https://www.linkedin.com/in/olamide-britto', github: 'https://github.com/OlamideB' },
    ],
  },
  {
    id: 'logistics',
    label: 'Logistics',
    members: [
      { name: 'Kat Toolan', avatar: '/images/team-photos/logistic/kat.jpg', role: 'Lead', major: 'Computer Science B.S., Data Science B.A., Chinese', classYear: '2027', funFact: 'I am trained in archery', linkedin: 'https://www.linkedin.com/in/kat-toolan/', github: 'https://github.com/hellosmallkat' },
      { name: 'Lateefat', avatar: '/images/team-photos/logistic/lateefat.jpg', role: 'Lead', major: 'Supply Chain and TMD', classYear: '2025', funFact: 'I play ultimate frisbee' },
      { name: 'Ilanna Langton', avatar: '/images/team-photos/logistic/ilanna.jpg', major: 'Computer Science B.S.', classYear: '2026', funFact: 'I met the Duolingo Bird!', linkedin: 'https://www.linkedin.com/in/ilanna-langton/' },
      { name: 'Olivia Clark', avatar: '/images/team-photos/logistic/liv.jpg', major: 'Chemical Engineering', classYear: '2028', funFact: 'My hair used to be green!' },
    ],
  },
  {
    id: 'participant-experience',
    label: 'Participant Experience',
    members: [
      { name: 'Ilanna Langton', avatar: '/images/team-photos/logistic/ilanna.jpg', role: 'Lead', major: 'Computer Science B.S.', classYear: '2026', funFact: 'I met the Duolingo Bird!', linkedin: 'https://www.linkedin.com/in/ilanna-langton/' },
      { name: 'Ethan Moreta', avatar: '/images/team-photos/sponsor/ethan2.jpg', role: 'Lead', major: 'Computer Science B.S.', classYear: '2026', funFact: "I can solve the Rubik's cube", linkedin: 'https://www.linkedin.com/in/ethanmoreta', github: 'https://github.com/EthanMoreta' },
      { name: 'Roquibat Adetunji', avatar: '/images/team-photos/finance/roquibat.jpg', major: 'Computer Science', classYear: '2027', funFact: "I'm double jointed" },
    ],
  },
];
