// src/components/Footer.jsx
// Site footer. The year, email, socials and MLH link all come from content/site.js.
//
// Props:
//   onExitPreview  when given, shows the organizer-only "Exit preview" button
//                  (App.jsx passes it while the site is hidden but unlocked).

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { CONTACT, EVENT, MLH, SOCIALS } from '../content/site.js';
import './Footer.css';

const Footer = ({ onExitPreview }) => (
  <footer className="site-footer">
    <div className="footer-inner">
      <nav className="footer-links" aria-label="Footer">
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        {SOCIALS.map((social) => (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
            {social.name}
          </a>
        ))}
        <a href={MLH.codeOfConductUrl} target="_blank" rel="noopener noreferrer">
          MLH Code of Conduct
        </a>
      </nav>

      <p>
        &copy; {EVENT.year} {EVENT.name}. All rights reserved.
      </p>
      <p>
        Made with <FaHeart className="footer-heart" aria-label="love" /> by the {EVENT.name} Team
      </p>

      {onExitPreview && (
        <button type="button" className="footer-preview" onClick={onExitPreview}>
          Preview mode: back to the landing page
        </button>
      )}
    </div>
  </footer>
);

export default Footer;
