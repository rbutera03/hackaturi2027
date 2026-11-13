// src/sections/Team.jsx
// The organizing team: a tab per group and a card per member.
// The roster is in content/team.js.

import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Tabs from '../components/Tabs.jsx';
import { TEAM_FALLBACK_AVATAR, TEAM_GROUPS, TEAM_TITLE } from '../content/team.js';
import './Team.css';

const MemberCard = ({ member }) => {
  const studies = [member.major, member.classYear && `Class of ${member.classYear}`].filter(Boolean).join(' · ');

  return (
    <li className="team-card card card--interactive">
      {/* The ring around the photo is drawn in Team.css (an astronaut helmet visor). */}
      <div className="team-avatar">
        <img
          src={member.avatar || TEAM_FALLBACK_AVATAR}
          alt=""
          loading="lazy"
          width="132"
          height="132"
          onError={(event) => {
            // Missing photo: fall back to the placeholder once.
            if (!event.currentTarget.src.endsWith(TEAM_FALLBACK_AVATAR)) {
              event.currentTarget.src = TEAM_FALLBACK_AVATAR;
            }
          }}
        />
      </div>

      <h3 className="team-name">{member.name}</h3>
      {member.role && <p className="pill">{member.role}</p>}
      {studies && <p className="team-studies">{studies}</p>}
      {member.funFact && <p className="team-fact">&ldquo;{member.funFact}&rdquo;</p>}

      {(member.linkedin || member.github) && (
        <div className="team-links">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`}>
              <FaLinkedin aria-hidden="true" />
            </a>
          )}
          {member.github && (
            <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on GitHub`}>
              <FaGithub aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </li>
  );
};

const Team = ({ eyebrow }) => {
  const [groupId, setGroupId] = useState(TEAM_GROUPS[0].id);
  const group = TEAM_GROUPS.find((item) => item.id === groupId) ?? TEAM_GROUPS[0];

  return (
    <>
      <SectionHeading eyebrow={eyebrow} title={TEAM_TITLE} />

      <Reveal>
        <Tabs label="Teams" tabs={TEAM_GROUPS} activeId={group.id} onChange={setGroupId} />

        {/* key restarts the fade-in each time a different team is chosen */}
        <ul key={group.id} className="team-grid">
          {group.members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </ul>
      </Reveal>
    </>
  );
};

export default Team;
