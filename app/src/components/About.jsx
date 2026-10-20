import aboutPhoto from '../assets/Images/profile-about.webp';
import { site } from '../data/site.js';

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-layout">
        <figure className="about-portrait" data-reveal>
          <div className="about-portrait-frame">
            <img src={aboutPhoto} alt={`Portrait of ${site.name}`} width="1080" height="1234" />
          </div>
        </figure>

        <div className="about-copy" data-reveal>
          <p className="section-kicker">About</p>
          <h2 className="section-title">
            About <em>me</em>
          </h2>
          <p className="section-role">{site.role}</p>
          <p className="section-body">{site.about}</p>
        </div>
      </div>
    </section>
  );
}
