import profilePhoto from '../assets/Images/profile-hero.webp';
import resumePdf from '../assets/Images/resume.pdf';
import { site } from '../data/site.js';

const socials = site.socials.filter(
  (social) => typeof social.href === 'string' && /^https?:\/\//.test(social.href),
);

export function Home() {
  const { hero } = site;

  return (
    <section className="home" id="home" aria-labelledby="hero-heading">
      {hero.backdrop ? (
        <p className="hero-backdrop" aria-hidden="true">
          {hero.backdrop}
        </p>
      ) : null}
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-name">{site.name}</p>
          <p className="hero-kicker">{hero.kicker}</p>
          <h1 className="hero-title" id="hero-heading">
            {hero.lines.map((line) => (
              <span className="hero-line" key={line.text}>
                <span className={line.emphasis ? 'hero-em' : undefined}>{line.text}</span>
              </span>
            ))}
          </h1>
          <p className="hero-lead">{hero.lead}</p>
          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a
              className="hero-btn hero-btn-secondary"
              href={hero.secondaryCta.download ? resumePdf : hero.secondaryCta.href}
              {...(hero.secondaryCta.download ? { download: 'Chinmay-Mathur-Resume.pdf' } : {})}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          {socials.length > 0 && (
            <div className="social-media">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>

        <figure className="hero-portrait">
          <div className="hero-portrait-frame">
            <img
              src={profilePhoto}
              alt={`Portrait of ${site.name}`}
              width="1080"
              height="1440"
            />
          </div>
          <figcaption>{site.name}</figcaption>
        </figure>
      </div>
    </section>
  );
}
