import { education } from '../data/experience.js';

export function Education() {
  return (
    <section className="education" id="education">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Record</p>
        <h2 className="section-title">
          <em>Education</em>
        </h2>
      </div>

      <div className="timeline">
        {education.map((item) => (
          <article className="timeline-item" key={item.id} data-reveal>
            <p className="timeline-meta">{item.dates}</p>
            <div>
              <h3>{item.title}</h3>
              <p className="timeline-place">{item.place}</p>
              <p className="timeline-result">{item.result}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
