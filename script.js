// Burger menu toggle for mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Scroll animation
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));
