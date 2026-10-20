import { certifications } from '../data/certifications.js';

export function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="section-heading" data-reveal>
        <p className="section-kicker">Credentials</p>
        <h2 className="section-title">
          <em>Certifications</em>
        </h2>
      </div>

      <ul className="cert-grid">
        {certifications.map((item) => (
          <li className="cert-card" key={item.id} data-reveal>
            <p className="cert-date">{item.date}</p>
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
