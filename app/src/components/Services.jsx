import { skillGroups } from '../data/skills.js';

export function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Capabilities</p>
        <h2 className="section-title">
          Technical <em>skills</em>
        </h2>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.id} data-reveal>
            <h3>{group.label}</h3>
            <ul className="skill-list">
              {group.items.map((item) => (
                <li className="skill-chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
