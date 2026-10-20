import { useCallback, useEffect, useMemo, useState } from 'react';
import { Header } from './components/Header.jsx';
import { Home } from './components/Home.jsx';
import { About } from './components/About.jsx';
import { Services } from './components/Services.jsx';
import { Portfolio } from './components/Portfolio.jsx';
import { Experience } from './components/Experience.jsx';
import { Approach } from './components/Approach.jsx';
import { Education } from './components/Education.jsx';
import { Certifications } from './components/Certifications.jsx';
import { Activities } from './components/Activities.jsx';
import { Resume } from './components/Resume.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { site } from './data/site.js';
import { useReveal } from './hooks/useReveal.js';
import { useScrollSpy } from './hooks/useScrollSpy.js';

export default function App() {
  const sectionIds = useMemo(() => site.nav.map((item) => item.id), []);
  const { activeId, isSticky } = useScrollSpy(sectionIds, 150);
  const [menuOpen, setMenuOpen] = useState(false);

  useReveal();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const scrollY = window.scrollY;
    const { style } = document.body;
    const previous = {
      position: style.position,
      top: style.top,
      width: style.width,
    };

    document.documentElement.classList.add('nav-open');
    style.position = 'fixed';
    style.top = `-${scrollY}px`;
    style.width = '100%';

    return () => {
      style.position = previous.position;
      style.top = previous.top;
      style.width = previous.width;
      document.documentElement.classList.remove('nav-open');
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      root.style.scrollBehavior = previousBehavior;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      const toggle = document.getElementById('menu-icon');
      if (toggle && getComputedStyle(toggle).display !== 'none') toggle.focus();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header
        activeId={activeId}
        isSticky={isSticky}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={closeMenu}
      />
      <main id="main" tabIndex={-1} inert={menuOpen || undefined}>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Approach />
        <Education />
        <Certifications />
        <Activities />
        <Resume />
        <Contact />
      </main>
      <Footer inert={menuOpen} />
    </>
  );
}
