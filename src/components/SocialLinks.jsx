// src/components/SocialLinks.jsx
// The row of social media buttons (Connect section and landing page).
// The links are SOCIALS and CONTACT in content/site.js.
//
// Props:
//   showEmail  also show the contact email as a button (default: false)

import React from 'react';
import { FaDiscord, FaEnvelope, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';
import { CONTACT, SOCIALS } from '../content/site.js';
import './SocialLinks.css';

// The `icon` keys available to SOCIALS in content/site.js.
// To support another platform, import its icon above and add a line here.
const SOCIAL_ICONS = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  discord: FaDiscord,
  tiktok: FaTiktok,
  youtube: FaYoutube,
};

const SocialLinks = ({ showEmail = false }) => (
  <ul className="social-links">
    {SOCIALS.map((social) => {
      const Icon = SOCIAL_ICONS[social.icon];
      return (
        <li key={social.name}>
          <a className="social-link" href={social.url} target="_blank" rel="noopener noreferrer">
            {Icon && <Icon aria-hidden="true" />}
            <span>{social.name}</span>
          </a>
        </li>
      );
    })}
    {showEmail && (
      <li>
        <a className="social-link" href={`mailto:${CONTACT.email}`}>
          <FaEnvelope aria-hidden="true" />
          <span>{CONTACT.email}</span>
        </a>
      </li>
    )}
  </ul>
);

export default SocialLinks;
