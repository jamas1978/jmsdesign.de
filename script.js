const header = document.querySelector('[data-header]');
const reveals = document.querySelectorAll('.reveal');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });
}

if (reduced) {
  reveals.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -5% 0px' });
  reveals.forEach(el => io.observe(el));
}

// Mobile navigation
(() => {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu-panel');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    menu.hidden = true;
    document.body.classList.remove('mobile-menu-open');
  };

  const positionMenu = () => {
    const pageHeader = document.querySelector('.site-header');
    const headerBottom = pageHeader ? pageHeader.getBoundingClientRect().bottom : 84;
    menu.style.top = `${Math.max(12, headerBottom + 10)}px`;
  };

  const openMenu = () => {
    positionMenu();
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    menu.hidden = false;
    document.body.classList.add('mobile-menu-open');
  };

  toggle.addEventListener('click', () => {
    toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      closeMenu();
    } else if (toggle.getAttribute('aria-expanded') === 'true') {
      positionMenu();
    }
  });
})();
