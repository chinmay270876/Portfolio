import { experience } from '../data/experience.js';

export function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Record</p>
        <h2 className="section-title">
          Work <em>experience</em>
        </h2>
      </div>

      <div className="timeline">
        {experience.map((item, index) => (
          <article className={`timeline-item${item.current ? ' is-current' : ''}`} key={item.id} data-reveal>
            <div className="timeline-rail">
              <p className="timeline-index">{String(index + 1).padStart(2, '0')}</p>
              <p className="timeline-meta">{item.dates}</p>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className="timeline-place">
                {item.place}
                {item.location ? ` · ${item.location}` : ''}
              </p>
              {item.focus ? (
                <ul className="focus-list" aria-label="Current focus">
                  {item.focus.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              ) : null}
              <ul className="role-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
