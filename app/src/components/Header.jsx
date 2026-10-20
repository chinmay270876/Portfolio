import { site } from '../data/site.js';

export function Header({ activeId, isSticky, menuOpen, onToggleMenu, onNavigate }) {
  return (
    <header className={`header${isSticky ? ' sticky' : ''}`}>
      <a href="#home" className="logo" onClick={onNavigate}>
        <span className="logo-mark" aria-hidden="true" />
        {site.name}
      </a>

      <button
        type="button"
        className="menu-toggle"
        id="menu-icon"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={onToggleMenu}
      >
        <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
      </button>

      <nav className={`navbar${menuOpen ? ' active' : ''}`} id="primary-navigation" aria-label="Primary">
        {site.nav.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={['nav-link', item.id === 'contact' ? 'nav-cta' : '', activeId === item.id ? 'active' : '']
              .filter(Boolean)
              .join(' ')}
            aria-current={activeId === item.id ? 'page' : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
