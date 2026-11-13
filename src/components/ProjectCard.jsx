// src/components/ProjectCard.jsx
// A card for one hackathon project: screenshot, award badges, description, team
// and a link. Used for archive winners and for the mini-event's past projects.
//
// Props:
//   project    { projectName, description, teamMembers, tracks, image,
//                projectUrl (or devpostUrl), linkLabel, featured }
//              `tracks` are shown as badges; `featured: true` adds a Winner ribbon.
//   showImage  false hides the screenshot area

import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project, showImage = true }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const tracks = project.tracks ?? [];
  const teamMembers = project.teamMembers ?? [];
  const projectUrl = project.projectUrl || project.devpostUrl;

  return (
    <article className={`project-card${project.featured ? ' project-card--featured' : ''}`}>
      {showImage && (
        <div className="project-card-image-wrap">
          {project.image && !imageFailed ? (
            <img
              src={project.image}
              alt={`${project.projectName} project screenshot`}
              className="project-card-image"
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          ) : (
            // No screenshot: show the project's first letter.
            <div className="project-card-placeholder" aria-hidden="true">
              {project.projectName.charAt(0)}
            </div>
          )}
          {project.featured && <span className="project-card-ribbon">🏆 Winner</span>}
        </div>
      )}

      <div className="project-card-body">
        {tracks.length > 0 && (
          <div className="project-card-tracks">
            {tracks.map((track) => (
              <span key={track} className="project-card-track">
                {track}
              </span>
            ))}
          </div>
        )}
        <h3 className="project-card-name">{project.projectName}</h3>
        <p className="project-card-description">{project.description}</p>

        <div className="project-card-bottom">
          {teamMembers.length > 0 && (
            <p className="project-card-team">
              <span className="project-card-team-label">Team</span> {teamMembers.join(' · ')}
            </p>
          )}
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-card-link">
              {project.linkLabel || 'View on Devpost'} <FaExternalLinkAlt aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
