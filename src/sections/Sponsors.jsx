// src/sections/Sponsors.jsx
// Sponsors, partners and donors, followed by the "become a sponsor" block.
//
// ONLY entries marked confirmed: true in content/sponsors.js are displayed.
// With none confirmed, an "announcing soon" card is shown instead of logos.

import React from 'react';
import { FaEnvelope, FaExternalLinkAlt, FaHeart } from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { DONORS, SPONSORS, SPONSORS_COPY, SPONSORSHIP, SPONSOR_TIERS } from '../content/sponsors.js';
import { getForm } from '../content/getInvolved.js';
import { CONTACT } from '../content/site.js';
import './Sponsors.css';

const confirmedSponsors = SPONSORS.filter((sponsor) => sponsor.confirmed === true);
const confirmedDonors = DONORS.filter((donor) => donor.confirmed === true);

// Tiers that have at least one confirmed sponsor, in display order.
const visibleTiers = SPONSOR_TIERS.map((tier) => ({
  ...tier,
  sponsors: confirmedSponsors.filter((sponsor) => sponsor.tier === tier.id),
})).filter((tier) => tier.sponsors.length > 0);

const SponsorLogo = ({ sponsor }) => {
  const image = <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />;
  return sponsor.url ? (
    <a className="sponsor-plate" href={sponsor.url} target="_blank" rel="noopener noreferrer">
      {image}
    </a>
  ) : (
    <span className="sponsor-plate">{image}</span>
  );
};

const Sponsors = ({ eyebrow }) => {
  const inquiryForm = getForm('sponsor');
  const nothingConfirmed = visibleTiers.length === 0 && confirmedDonors.length === 0;

  return (
    <>
      <SectionHeading eyebrow={eyebrow} title={SPONSORS_COPY.title} lead={SPONSORS_COPY.lead} />

      {nothingConfirmed && (
        <Reveal className="sponsors-empty card">
          <span className="sponsors-empty-orbit" aria-hidden="true" />
          <h3>{SPONSORS_COPY.emptyState.title}</h3>
          <p>{SPONSORS_COPY.emptyState.body}</p>
        </Reveal>
      )}

      {visibleTiers.map((tier) => (
        <Reveal key={tier.id} className={`sponsor-tier sponsor-tier--${tier.id}`}>
          <h3 className="sponsor-tier-label">{tier.label}</h3>
          <ul className="sponsor-logos">
            {tier.sponsors.map((sponsor) => (
              <li key={sponsor.name}>
                <SponsorLogo sponsor={sponsor} />
              </li>
            ))}
          </ul>
        </Reveal>
      ))}

      {confirmedDonors.length > 0 && (
        <Reveal className="sponsor-tier">
          <h3 className="sponsor-tier-label">{SPONSORS_COPY.donorsTitle}</h3>
          <ul className="donor-list">
            {confirmedDonors.map((donor) => (
              <li key={donor.name}>{donor.name}</li>
            ))}
          </ul>
        </Reveal>
      )}

      {/* ── Become a sponsor ─────────────────────────────────────────────── */}
      <div id="sponsor-us" className="sponsor-us">
        <Reveal className="sponsor-us-heading">
          <h3>{SPONSORSHIP.title}</h3>
          <p>{SPONSORSHIP.lead}</p>
        </Reveal>

        <ul className="sponsor-benefits">
          {SPONSORSHIP.benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.title} className="sponsor-benefit" delay={(index % 2) * 90}>
              <h4>{benefit.title}</h4>
              <p>{benefit.body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="sponsor-contact card">
          <div>
            <h4>{SPONSORSHIP.contactTitle}</h4>
            <p>{SPONSORSHIP.contactBody}</p>
          </div>
          <div className="sponsor-contact-actions">
            <a className="btn btn--primary" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(SPONSORSHIP.title)}`}>
              <FaEnvelope aria-hidden="true" /> {CONTACT.email}
            </a>
            {inquiryForm?.url ? (
              <a className="btn btn--secondary" href={inquiryForm.url} target="_blank" rel="noopener noreferrer">
                Sponsorship inquiry form <FaExternalLinkAlt aria-hidden="true" />
              </a>
            ) : (
              <button type="button" className="btn" disabled>
                Inquiry form opening soon
              </button>
            )}
            {SPONSORSHIP.prospectusUrl && (
              <a className="btn btn--secondary" href={SPONSORSHIP.prospectusUrl} target="_blank" rel="noopener noreferrer">
                {SPONSORSHIP.prospectusLabel} <FaExternalLinkAlt aria-hidden="true" />
              </a>
            )}
            {CONTACT.donateUrl && (
              <a className="btn btn--ghost" href={CONTACT.donateUrl} target="_blank" rel="noopener noreferrer">
                <FaHeart aria-hidden="true" /> Make a donation
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default Sponsors;
