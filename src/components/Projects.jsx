import React from 'react';
import projects from './ProjectList'; // σωστό import

function Projects() {
  return (
    <div className="projects-wrapper">
      <h1 className="projects-title" data-aos="fade-down" data-aos-delay="100">
        Projects.
      </h1>
      <div className="projects-line" data-aos="fade-in" data-aos-delay="200" />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={100 + index * 150} // σταδιακό delay για το κάθε project
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
              data-aos="zoom-in"
              data-aos-delay={150 + index * 150}
            />
            <h2 className="project-name" data-aos="fade-right" data-aos-delay={200 + index * 150}>
              {project.title}
            </h2>
            <p className="project-desc" data-aos="fade-left" data-aos-delay={250 + index * 150}>
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              data-aos="fade-up"
              data-aos-delay={300 + index * 150}
            >
              See Live →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
