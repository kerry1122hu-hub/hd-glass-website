// Sticky header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10,12,18,0.98)';
  } else {
    header.style.background = 'rgba(15,17,23,0.92)';
  }
});

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('nav ul');
hamburger.addEventListener('click', () => {
  if (navUl.style.display === 'flex') {
    navUl.style.display = 'none';
  } else {
    navUl.style.display = 'flex';
    navUl.style.flexDirection = 'column';
    navUl.style.position = 'absolute';
    navUl.style.top = '70px';
    navUl.style.left = '0';
    navUl.style.right = '0';
    navUl.style.background = 'rgba(10,12,18,0.98)';
    navUl.style.padding = '1rem 1.5rem 1.5rem';
    navUl.style.gap = '1rem';
    navUl.style.borderBottom = '1px solid rgba(201,168,76,0.25)';
  }
});

// Smooth close nav on link click
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.style.display = '';
    navUl.style.flexDirection = '';
    navUl.style.position = '';
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.product-card, .why-card, .case-card, .col-text, .col-img').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});
