import resumePdf from '../assets/Images/resume.pdf';

export function Resume() {
  return (
    <section className="CV" id="CV">
      <div className="resume-panel" data-reveal>
        <p className="section-kicker">CV</p>
        <h2 className="section-title">
          My <em>resume</em>
        </h2>
        <p className="section-body resume-note">Download the current resume as a PDF.</p>
        <a className="btn resume-download" href={resumePdf} download="Chinmay-Mathur-Resume.pdf">
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}
