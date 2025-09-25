tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: { color: "#0f0f0f" },
  particles: {
    number: { value: 120 },
    color: { value: "#00ff00" },
    shape: { type: "circle" },
    opacity: { value: 0.8 },
    size: { value: { min: 1, max: 4 } },
    move: { enable: true, speed: 2, random: true, straight: false, outModes: "out" },
    links: { enable: true, distance: 150, color: "#00ff00", opacity: 0.5, width: 1 }
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } },
    modes: { grab: { distance: 200, links: { opacity: 0.8 } }, push: { quantity: 4 } }
  },
  detectRetina: true
});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", ()=>{
  if(window.scrollY>200){ backToTop.style.opacity="1"; backToTop.style.pointerEvents="auto"; }
  else{ backToTop.style.opacity="0"; backToTop.style.pointerEvents="none"; }
});
backToTop.addEventListener("click", e=>{
  e.preventDefault(); window.scrollTo({top:0, behavior:"smooth"});
});

ScrollReveal().reveal('.hero-content',{ delay:200, origin:'bottom', distance:'50px', duration:1000, easing:'ease-in-out' });
ScrollReveal().reveal('.service-card, .feature-card, .testimonial-card, .course-card, .faq-item',{ interval:200 });
