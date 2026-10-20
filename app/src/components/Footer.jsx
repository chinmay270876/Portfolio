import { site } from '../data/site.js';

export function Footer({ inert = false }) {
  return (
    <footer className="footer" inert={inert || undefined}>
      <div className="footer-text">
        <p>{site.copyright}</p>
      </div>
      <div className="footer-iconTop">
        <a href="#home" aria-label="Back to top">
          <i className="fa-solid fa-angle-up" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
