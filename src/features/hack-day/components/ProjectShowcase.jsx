import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { RAPID_BUILD_PAGE } from '../data/rapidBuildContent.js';

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
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="rb-project-card panel-card">
      {project.image && !imgError && (
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="rb-project-image"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
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
    </article>
  );
};

export default ProjectShowcase;
