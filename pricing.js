// Animation GSAP
gsap.registerPlugin(CSSRulePlugin);
const tl = gsap.timeline()


tl.to('.container-loader', { opacity: 1, duration:2.5})
  .to('.container-loader', { opacity:0 })
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

// Navbar close on click

const links = document.querySelectorAll('#linknav');

links.forEach(item => {
  item.addEventListener('click', event => {
    navbar.classList.remove('navbar-open');
    hamburger.classList.remove('navbar-open');
  })
});
// Animation section price 

const tltattoo = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-price',
    start: "center bottom"
  }
});

tltattoo.from('.tattoo-title, .tattoo-text',{opacity: 0, duration: 1, y: 100})
  .from('.tattoo-price', { opacity: 0, duration: 1, y:100}, '-=0.5')

const tlpiercing = gsap.timeline({
  scrollTrigger: {
    trigger: '.container-price-piercing',
    start: "center bottom"
  }
});

tlpiercing.from('.piercing-title, .piercing-text', {opacity: 0, duration: 1, y: 100})
  .from('.piercing-price-title', { opacity: 0, duration: 1, y:100}, '-=0.5')
  .from('.price-animation1 p', {opacity: 0, duration: 1, stagger:0.1, y:100}, '-=0.5')
  .from('.price-animation2 p', {opacity: 0, duration: 1, stagger:0.1, y:100}, '-=1.5')
  .from('.price-animation3 p', {opacity: 0, duration: 1, stagger:0.1, y:100}, '-=1.5')