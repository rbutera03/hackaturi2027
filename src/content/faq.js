// src/content/faq.js
// Frequently asked questions, grouped into tabs.
//
// An answer is either a plain string, or a list of parts when it needs a link:
//   ['Read the ', { text: 'parking guide', href: 'https://example.com' }, ' first.']
// Links starting with # jump to a section of this site (for example '#get-involved').
// An item can also have `bullets: ['…', '…']` to show a list under the answer.
//
// NOTE: these answers were carried over from Hack@URI 2026. Check each one
// against this year's rules before launch (see docs/yearly-update-checklist.md).

import { CONTACT, EVENT } from './site.js';

export const FAQ_TITLE = 'Frequently Asked Questions';

export const FAQ_GROUPS = [
  {
    id: 'general',
    label: 'General',
    items: [
      {
        question: 'What is a hackathon?',
        answer: 'A hackathon is an event where students "hack" together and create an app, website, game, etc. in 24-48 hours. There will be no malicious "hacking."',
      },
      {
        question: 'Is Hack@URI free to attend?',
        answer: 'Yes! Food will be provided for the duration of the event. We will also have swag and prizes!',
      },
      {
        question: "Who can attend? What if I don't have any experience? Do I have to be 18?",
        answer: 'This event is open to any students. It is beginner friendly, with workshops to help you learn during the event, and mentors available to help you as you work on your project. Attendees must be at least 18 years old.',
      },
      {
        question: 'What is the team size limit?',
        answer: "Teams should be between 1 and 4 people. We will have a team building activity shortly after opening ceremony if you'd like to find team members!",
      },
      {
        question: 'I have a different question!',
        answer: ['Email us at ', { text: CONTACT.email, href: `mailto:${CONTACT.email}` }, '!'],
      },
    ],
  },
  {
    id: 'event-details',
    label: 'Event Details',
    items: [
      {
        question: 'When can we start working on our project? Can I work on a previous project?',
        answer: 'You cannot start until after opening ceremony. You may come up with ideas, but are not allowed to start coding. You cannot work on a previous project, but can use frameworks if you clearly credit them in your readme and differentiate what you made vs what you used.',
      },
      {
        question: 'How many challenges can I apply for?',
        answer: 'You can only submit your project to one challenge.',
      },
      {
        question: 'What kind of activities will there be?',
        answer: 'There will be workshops and activities to take a break and meet other hackers and our wonderful sponsors.',
      },
      {
        question: 'Will hardware be available?',
        answer: 'We do not have hardware available, but you are welcome to bring your own. Due to building fire codes, soldering kits are not allowed in the venue.',
      },
      {
        question: 'Do I have to stay overnight?',
        answer: "Since you only have a short amount of time to build, most stay on campus to complete their project. We'll provide a packing list. But you are able to leave and come back if you live nearby.",
      },
    ],
  },
  {
    id: 'logistics',
    label: 'Logistics',
    items: [
      {
        question: 'Where is the event? Is it in person or virtual? Where can I park?',
        answer: [
          `The event is located in the ${EVENT.venue}. You can park in lots 6 and 7, which you can see on this `,
          { text: 'campus parking site', href: 'https://web.uri.edu/transportation/parking/' },
          '.',
        ],
      },
      {
        question: 'What should I bring?',
        answer: 'Your laptop, chargers, headphones, deodorant, and a pillow/blanket.',
      },
      {
        question: 'Are there travel reimbursements?',
        answer: 'If we have funding available, we will reach out to those that have requested. We cannot guarantee reimbursement at this time.',
      },
      {
        question: 'Are you sending out acceptances? Is there a deadline to apply? Is there a waitlist?',
        answer: `We will send out acceptances 7 days before the event. If you need earlier confirmation to book travel, please reach out to our team at ${CONTACT.email}. Applications will close once we reach the maximum amount of hackers we can support, but we will open a waitlist on the day of the event for any local hackers who want to fill the spots of any accepted hackers who do not end up attending.`,
      },
    ],
  },
  {
    id: 'sponsors-volunteers',
    label: 'Sponsors & Volunteers',
    items: [
      {
        question: 'How do I sign up to be a mentor or judge?',
        answer: ['Applications are listed in the ', { text: 'Get Involved section', href: '#get-involved' }, '.'],
      },
      {
        question: 'How can my company become a sponsor?',
        answer: `We'd love to have you as a sponsor! Please reach out to us at ${CONTACT.email} to discuss sponsorship opportunities and benefits.`,
      },
      {
        question: 'What benefits do sponsors receive?',
        answer: 'Sponsors receive logo placement on our website and event materials, the opportunity to present to participants, access to resumes and portfolios, and the chance to recruit talented students.',
      },
      {
        question: 'Can I volunteer without being a mentor or judge?',
        answer: `Absolutely! We need volunteers for setup, registration, food service, and general event support. Contact us at ${CONTACT.email} to learn more about volunteer opportunities.`,
      },
    ],
  },
];
