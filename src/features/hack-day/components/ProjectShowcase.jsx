import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { RAPID_BUILD_PAGE } from '../data/rapidBuildContent.js';

const PlaceholderImage = ({ name }) => (
  <div className="rb-project-image-placeholder" aria-hidden="true">
    <span>{name.charAt(0)}</span>
  </div>
);

const ProjectShowcase = () => {
  const { projects } = RAPID_BUILD_PAGE;

  return (
    <section className="rb-section rb-project-showcase">
      <h2 className="rb-section-title">{projects.sectionTitle}</h2>
      <p className="rb-section-subtitle">{projects.sectionSubtitle}</p>
      <div className="rb-project-grid">
        {projects.items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {projects.galleryCta && (
        <div className="rb-project-gallery-cta">
          <a
            href={projects.galleryCta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rb-project-gallery-link"
          >
            {projects.galleryCta.label} <FaExternalLinkAlt aria-hidden="true" />
          </a>
        </div>
      )}
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [imgError, setImgError] = useState(false);
  const tracks = project.tracks ?? [];
  const teamMembers = project.teamMembers ?? [];

  return (
    <article className={`rb-project-card panel-card${project.featured ? ' rb-project-card--featured' : ''}`}>
      <div className="rb-project-image-wrap">
        {project.featured && <span className="rb-project-winner-ribbon">🏆 Winner</span>}
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="rb-project-image"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <PlaceholderImage name={project.title} />
        )}
      </div>

      <div className="rb-project-card-body">
        {tracks.length > 0 && (
          <div className="rb-project-tracks">
            {tracks.map((track) => (
              <span key={track} className="rb-project-track-badge">
                {track}
              </span>
            ))}
          </div>
        )}
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="rb-project-card-bottom">
          {teamMembers.length > 0 && (
            <div className="rb-project-team">
              <span className="rb-project-team-label">Team</span>
              <span className="rb-project-team-members">{teamMembers.join(' · ')}</span>
            </div>
          )}
          {project.devpostUrl && (
            <a
              href={project.devpostUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rb-project-link"
            >
              View on Devpost <FaExternalLinkAlt aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectShowcase;
