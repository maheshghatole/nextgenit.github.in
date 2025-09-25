// Particle background
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
window.addEventListener("resize", ()=>{ width=canvas.width=window.innerWidth; height=canvas.height=window.innerHeight; });
const mouse = { x:null, y:null };
window.addEventListener("mousemove", e=>{ mouse.x=e.clientX; mouse.y=e.clientY; });
window.addEventListener("mouseleave", ()=>{ mouse.x=null; mouse.y=null; });
const particles = [];
const particleCount = 120;
for(let i=0;i<particleCount;i++){
  particles.push({ x:Math.random()*width, y:Math.random()*height, vx:(Math.random()-0.5)*1, vy:(Math.random()-0.5)*1, radius:Math.random()*2+1 });
}
function drawParticles(){
  ctx.clearRect(0,0,width,height);
  for(let i=0;i<particles.length;i++){
    let p=particles[i];
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
    ctx.fillStyle="rgba(0,255,255,0.7)";
    ctx.fill();
  }
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      let dx=particles[i].x-particles[j].x;
      let dy=particles[i].y-particles[j].y;
      let dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<120){ 
        ctx.beginPath();
        ctx.strokeStyle="rgba(0,255,255,"+(1-dist/120)+")";
        ctx.lineWidth=1;
        ctx.moveTo(particles[i].x,particles[i].y);
        ctx.lineTo(particles[j].x,particles[j].y);
        ctx.stroke();
      }
    }
  }
  for(let i=0;i<particles.length;i++){
    let p=particles[i];
    if(mouse.x!==null && mouse.y!==null){
      let dx=p.x-mouse.x, dy=p.y-mouse.y, dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<100){ let angle=Math.atan2(dy,dx), force=(100-dist)/20; p.vx+=Math.cos(angle)*force*0.1; p.vy+=Math.sin(angle)*force*0.1; }
    }
    p.x+=p.vx; p.y+=p.vy; p.vx*=0.98; p.vy*=0.98;
    if(p.x<0||p.x>width) p.vx*=-1;
    if(p.y<0||p.y>height) p.vy*=-1;
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

// Back-to-top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", ()=>{
  if(window.scrollY>200){ backToTop.style.opacity="1"; backToTop.style.pointerEvents="auto"; }
  else{ backToTop.style.opacity="0"; backToTop.style.pointerEvents="none"; }
});
backToTop.addEventListener("click", e=>{
  e.preventDefault();
  window.scrollTo({top:0, behavior:"smooth"});
});

// ScrollReveal animations
ScrollReveal().reveal('.hero-content', { delay: 200, origin: 'bottom', distance: '50px', duration: 1000, easing: 'ease-in-out' });
ScrollReveal().reveal('.services h2, .features h2, .testimonials h2, .courses h2, .faq h2, .newsletter h2', { delay:200, origin:'top', distance:'50px', duration:1000 });
ScrollReveal().reveal('.service-card, .feature-card, .testimonial-card, .course-card, .faq-item', { interval:200
