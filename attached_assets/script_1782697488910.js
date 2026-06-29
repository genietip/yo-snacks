// ============================================================
//   YO-SNACKS — script.js
// ============================================================

// Mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobile();
});

// Scroll-reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.flavor-card, .stat-card, .cert-item, .story-inner, .why-grid, .contact-card'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Nav active link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => activeObserver.observe(s));

// Inject CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }
  .reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  .flavor-card.reveal { transition-delay: 0.1s; }
  .flavor-card:nth-child(2).reveal { transition-delay: 0.22s; }
  .stat-card:nth-child(2).reveal { transition-delay: 0.1s; }
  .stat-card:nth-child(3).reveal { transition-delay: 0.2s; }
  .stat-card:nth-child(4).reveal { transition-delay: 0.3s; }
  .nav-links a.active { color: var(--white); }
`;
document.head.appendChild(style);
