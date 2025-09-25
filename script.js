// Burger menu toggle for mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
