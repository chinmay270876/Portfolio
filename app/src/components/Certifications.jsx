import { useId, useState } from 'react';
import { certifications } from '../data/certifications.js';

function CertificateCard({ item }) {
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const titleId = `${reactId}-title`;
  const panelId = `${reactId}-panel`;

  return (
    <li className={`cert-card${open ? ' is-open' : ''}`} data-reveal>
      <p className="cert-date">{item.date}</p>
      <h3 id={titleId}>{item.name}</h3>
      <button
        type="button"
        className="cert-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? 'Hide Certificate' : 'View Certificate'}
        <span className="sr-only"> for {item.name}</span>
      </button>

      <div
        className={`cert-panel${open ? ' is-open' : ''}`}
        id={panelId}
        role="region"
        aria-labelledby={titleId}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="cert-panel-inner">
          {item.image ? (
            <img className="cert-image" src={item.image} alt={item.imageAlt} />
          ) : (
            <p className="cert-unavailable">Certificate image unavailable</p>
          )}
        </div>
      </div>
    </li>
  );
}

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
          <CertificateCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
