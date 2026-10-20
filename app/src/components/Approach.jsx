import { principles } from '../data/approach.js';

export function Approach() {
  return (
    <section className="approach" id="approach" aria-labelledby="approach-heading">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Practice</p>
        <h2 className="section-title" id="approach-heading">
          Engineering <em>approach</em>
        </h2>
      </div>
      <ol className="approach-list">
        {principles.map((item, index) => (
          <li className="approach-card" key={item.id} data-reveal>
            <p className="approach-index">{String(index + 1).padStart(2, '0')}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
