import { useId, useState } from 'react';
import { projects } from '../data/projects.js';

function DetailBlock({ title, placeholder, children }) {
  return (
    <div className="project-detail">
      <h4>{title}</h4>
      {placeholder ? <p className="needs-input">{children}</p> : <div className="project-detail-body">{children}</div>}
    </div>
  );
}

function ProjectCard({ project, index, open, onToggle }) {
  const reactId = useId();
  const panelId = `${reactId}-panel`;
  const buttonId = `${reactId}-button`;

  return (
    <article className={`project-card${open ? ' is-open' : ''}`} data-reveal>
      {project.image ? (
        <div className="project-media">
          <img src={project.image} alt={project.imageAlt} width="1917" height="917" />
        </div>
      ) : (
        <div className="project-media project-mark" aria-hidden="true">
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
      )}

      <div className="project-card-body">
        <p className="project-index">{String(index + 1).padStart(2, '0')}</p>
        <h3>{project.title}</h3>
        {project.summary ? (
          <p className="project-summary">{project.summary}</p>
        ) : (
          <p className="needs-input">No description is recorded for this project. Add a short summary here.</p>
        )}

        <div className="project-card-actions">
          {project.href ? (
            <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">
              GitHub
              <span className="sr-only">, {project.title}</span>
            </a>
          ) : null}
          <button
            type="button"
            id={buttonId}
            className="project-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={onToggle}
          >
            {open ? 'Hide details' : 'View details'}
            <span className="sr-only"> for {project.title}</span>
          </button>
        </div>
      </div>

      <div
        className={`project-details${open ? ' is-open' : ''}`}
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="project-details-inner">
          {project.problem.placeholder ? null : (
            <DetailBlock title="Problem Statement" placeholder={false}>
              {project.problem.text}
            </DetailBlock>
          )}
          {project.solution.placeholder ? null : (
            <DetailBlock title="Solution" placeholder={false}>
              {project.solution.text}
            </DetailBlock>
          )}
          {project.tools.placeholder ? null : (
            <DetailBlock title="Tools and Technology" placeholder={false}>
              <ul className="tool-list">
                {project.tools.items.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </DetailBlock>
          )}
        </div>
      </div>
    </article>
  );
}

export function Portfolio() {
  const [openIds, setOpenIds] = useState(() => new Set());

  const toggle = (id) => {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Selected work</p>
        <h2 className="section-title">
          Featured <em>projects</em>
        </h2>
      </div>

      <div className="portfolio-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            open={openIds.has(project.id)}
            onToggle={() => toggle(project.id)}
          />
        ))}
      </div>
    </section>
  );
}
