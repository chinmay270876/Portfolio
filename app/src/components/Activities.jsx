import { activities } from '../data/activities.js';

export function Activities() {
  return (
    <section className="activities" id="activities">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Participation</p>
        <h2 className="section-title">
          Hackathons <em>&</em> activities
        </h2>
      </div>
      <p className="section-body" data-reveal>
        Participated in these hackathons.
      </p>
      <ul className="activity-list">
        {activities.map((item) => (
          <li className="activity-card" key={item.id} data-reveal>
            <h3>{item.name}</h3>
            <p>Participated.</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
