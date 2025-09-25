// Particle Background
const canvas=document.getElementById('particle-canvas');
const ctx=canvas.getContext('2d');
let width=canvas.width=window.innerWidth;
let height=canvas.height=window.innerHeight;
window.addEventListener("resize",()=>{width=canvas.width=window.innerWidth;height=canvas.height=window.innerHeight;});
const mouse={x:null,y:null};
window.addEventListener("mousemove",e=>{mouse.x=e.clientX;mouse.y=e.clientY;});
window.addEventListener("mouseleave",()=>{mouse.x=null;mouse.y=null;});
const particles=[];
const particleCount=120;
for(let i=0;i<particleCount;i++){particles.push({x:Math.random()*width,y:Math.random()*height,vx:(Math.random()-0.5)*1,vy:(Math.random()-0.5)*1,radius:Math.random()*2+1});}
function drawParticles(){
  ctx.clearRect(0,0,width,height);
  for(let i=0;i<particles.length;i++){let p=particles[i];ctx.beginPath();ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);ctx.fillStyle="rgba(224,247,250,0.3)";ctx.fill();}
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      let dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<120){ctx.beginPath();ctx.strokeStyle="rgba(224,247,250,"+(1-dist/120)+")";ctx.lineWidth=1;ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.stroke();}
    }
  }
  for(let i=0;i<particles.length;i++){let p=particles[i];if(mouse.x!==null&&mouse.y!==null){let dx=p.x-mouse.x,dy=p.y-mouse.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<100){let angle=Math.atan2(dy,dx),force=(100-dist)/20;p.vx+=Math.cos(angle)*force*0.1;p.vy+=Math.sin(angle)*force*0.1;}}p.x+=p.vx;p.y+=p.vy;p.vx*=0.98;p.vy*=0.98;if(p.x<0||p.x>width)p.vx*=-1;if(p.y<0||p.y>height)p.vy*=-1;}
  requestAnimationFrame(drawParticles);
}
drawParticles();

// Back-to-top
const backToTop=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{if(window.scrollY>200){backToTop.style.opacity="1";backToTop.style.pointerEvents="auto";}else{backToTop.style.opacity="0";backToTop.style.pointerEvents="none";}});
backToTop.addEventListener("click",e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"});});

// Scroll Reveal for cards & sections
const scrollElements=document.querySelectorAll(".scroll-animate");
const elementInView=(el,offset=100)=>{const top=el.getBoundingClientRect().top;return top<=window.innerHeight-offset;};
const displayScrollElement=el=>{el.classList.add("visible");};
const handleScrollAnimation=()=>{scrollElements.forEach(el=>{if(elementInView(el,100))displayScrollElement(el);});};
window.addEventListener("scroll",handleScrollAnimation);
// Add 'scroll-animate' class to all cards and headings
document.querySelectorAll(".service-card, .feature-card, .testimonial-card, .course-card, .faq-item, section h2, section p").forEach(el=>el.classList.add("scroll-animate"));
