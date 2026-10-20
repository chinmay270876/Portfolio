/*====================================toggle icon navbar ========================*/

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const setMenuOpen = (open) => {
    if (!menuIcon || !navbar) return;
    menuIcon.classList.toggle('fa-xmark', open);
    navbar.classList.toggle('active', open);
    menuIcon.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuIcon.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
};

if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        setMenuOpen(!navbar.classList.contains('active'));
    });
}

/*====================================scroll navbar active========================*/

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            const current = id ? document.querySelector(`header nav a[href="#${id}"]`) : null;
            if (current) current.classList.add('active');
        }
    });

    /*====================================sticky navbar========================*/
    const header = document.querySelector('header');
    if (header) header.classList.toggle('sticky', window.scrollY > 100);

    /*====================================remove toggle icon and navbar========================*/
    if (navbar && navbar.classList.contains('active')) setMenuOpen(false);
};

/*====================================scroll revive========================*/
if (typeof ScrollReveal === 'function') {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

/*====================================Typed js========================*/
if (typeof Typed === 'function' && document.querySelector('.multiple-text')) {
    new Typed('.multiple-text', {
        strings: ['Software Engineer', 'Web Developer', 'ML Enthusiast'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
}
