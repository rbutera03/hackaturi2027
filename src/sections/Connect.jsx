// src/sections/Connect.jsx
// Closing section: social links and the contact email.
// The text is CONNECT, and the links are SOCIALS and CONTACT, in content/site.js.

import React from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { CONNECT } from '../content/site.js';

const Connect = ({ eyebrow }) => (
  <>
    <SectionHeading eyebrow={eyebrow} title={CONNECT.title} lead={CONNECT.lead} />
    <Reveal>
      <SocialLinks showEmail />
    </Reveal>
  </>
);

export default Connect;
