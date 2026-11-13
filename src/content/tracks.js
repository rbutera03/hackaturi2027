// src/content/tracks.js
// The hackathon tracks. Add, remove or reorder entries and the Tracks section
// updates itself.
//
//   icon    a key of TRACK_ICONS in src/sections/Tracks.jsx
//   accent  one of the theme accent colours: cyan, purple, yellow, mint, pink, blue
//   motion  the looping animation on the card's planet:
//           pulse, atom, orbit, spin, bounce, launch
//   ideas   example projects listed in the card's "mission brief"

export const TRACKS_INTRO = {
  title: 'Choose Your Mission',
  lead: 'Six tracks, six ways to explore. Pick the one that excites you most and select a card to open its mission brief.',
};

export const TRACKS = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    shortName: 'AI',
    icon: 'brain',
    accent: 'cyan',
    motion: 'pulse',
    tagline: 'Build with models that learn, reason, and create.',
    description:
      'Put machine learning and generative AI to work on a real problem. Train or fine-tune a model, build an agent, or give an everyday tool a smarter brain.',
    ideas: [
      'A study assistant that turns lecture notes into practice quizzes',
      'Computer vision that sorts recycling from trash',
      'An agent that automates a tedious campus task',
      "A tool that explains or checks another model's output",
    ],
  },
  {
    id: 'quantum',
    name: 'Quantum Computing',
    shortName: 'Quantum',
    icon: 'atom',
    accent: 'purple',
    motion: 'atom',
    tagline: 'Explore computing beyond ones and zeros.',
    description:
      'Experiment with qubits, superposition, and entanglement using simulators and open-source quantum toolkits. No physics degree needed: build a visualization, a quantum-inspired game, or a small algorithm demo that shows what quantum can do.',
    ideas: [
      'An interactive circuit builder that shows what each gate does',
      'A quantum random number generator that powers a game',
      "A visual explainer for Grover's or Shor's algorithm",
      'A classical vs. quantum comparison on an optimization puzzle',
    ],
  },
  {
    id: 'fintech',
    name: 'Financial Technology',
    shortName: 'FinTech',
    icon: 'coins',
    accent: 'yellow',
    motion: 'orbit',
    tagline: 'Reimagine how people save, spend, and invest.',
    description:
      'Build tools that make money easier to understand and manage. Think budgeting, payments, investing, fraud detection, or financial literacy for students and small businesses.',
    ideas: [
      "A budgeting app designed around a college student's semester",
      'A dashboard that explains market data in plain language',
      'A tool that helps a small business track cash flow',
      'A game that teaches the basics of investing',
    ],
  },
  {
    id: 'global-impact',
    name: 'Global Impact & Civic Innovation',
    shortName: 'Global Impact',
    icon: 'globe',
    accent: 'mint',
    motion: 'spin',
    tagline: 'Use technology to make communities stronger.',
    description:
      'Take on challenges in health, sustainability, education, accessibility, and local government. Build something that helps a real community, in Rhode Island or anywhere in the world.',
    ideas: [
      'A map of local food pantries and their open hours',
      'An accessibility tool for getting around campus',
      'A tracker for coastal flooding or air quality',
      'A platform that makes public data easier to use',
    ],
  },
  {
    id: 'gaming-creative',
    name: 'Gaming & Creative Technology',
    shortName: 'Gaming & Creative',
    icon: 'gamepad',
    accent: 'pink',
    motion: 'bounce',
    tagline: 'Make something people can play, see, or hear.',
    description:
      'Blend code with art, music, storytelling, and design. Build a game, an interactive installation, a generative art piece, or an AR/VR experience. All majors welcome.',
    ideas: [
      'A game with an original mechanic, built in a weekend',
      'Generative art or music driven by live data',
      'An AR filter or a VR scene',
      'An interactive story with branching choices',
    ],
  },
  {
    id: 'beginner-zone',
    name: 'Beginner Zone: Open Innovation',
    shortName: 'Beginner Zone',
    icon: 'rocket',
    accent: 'blue',
    motion: 'launch',
    tagline: 'New to hacking? Start here and build anything.',
    description:
      'A track designed for first-time hackers. There is no set theme: pick any idea, learn as you go, and ship your very first project.',
    ideas: [
      'Your first website or mobile app',
      'A simple game',
      'A helpful bot or automation',
      "Anything you've always wanted to try building",
    ],
  },
];
