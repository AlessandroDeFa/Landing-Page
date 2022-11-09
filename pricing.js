// Animation GSAP
gsap.registerPlugin(CSSRulePlugin);
const tl = gsap.timeline()


tl.to('#text-reveal', {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', y:0, duration:2.5})
  .to('#text-reveal', { opacity:0 })
  .to('.overlay-first', { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', ease: Power4.easeOut, duration: 1})
  .to('.overlay-second', { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)', ease: Power4.easeOut, duration: 1}, '-=.6')
  .to('.container-navbar', { y:0, duration: 1,ease: Power4.easeOut}, '-=.3')
  .to('.linenav', { scaleX:1, transformOrigin: 'center', duration: 0.5, ease: Power4.easeOut}, '-=.2')
  .to('.main-text', { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',ease: Power4.easeOut, duration:2, opacity:1},'-=1')
  .to('.animation-line', {opacity:1,duration: 0.5 },'-=2');

  // Navbar

const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.nav-links');
const tlnav = gsap.timeline()

hamburger.addEventListener('click', ()=>{
  navbar.classList.toggle('navbar-open');
  hamburger.classList.toggle('navbar-open');
});