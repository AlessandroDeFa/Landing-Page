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

// Navbar close on click

const links = document.querySelectorAll('#linknav');

links.forEach(item => {
  item.addEventListener('click', event => {
    navbar.classList.remove('navbar-open');
    hamburger.classList.remove('navbar-open');
  })
});

// Animation Gsap on Scroll 
const lineartist = CSSRulePlugin.getRule('.artist::before');
const tlArtists = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-artist',
    start: "center bottom"
  }
});


tlArtists.from('.container-artist-title', { y: 200, opacity:0, duration: 1,ease: Power2.easeOut})
.from('.overflow-img', {opacity:0, duration:1,ease: Power2.easeOut}, '-=0.6')
.from(lineartist, {clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', duration:1}, '-=0.5')
.from('.artist-text', {stagger:0.5, y:100, opacity: 0, duration:1.5,ease: Power2.easeOut}, '-=0.5')


const tlwork = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-works',
    start: "center bottom"
  }
});

tlwork.from('.work-1', {opacity:0, x: -200, duration:1,ease: Power2.easeOut})
.from('.work-2', {opacity:0, duration:1,ease: Power2.easeOut}, '-=0.5')
.from('.work-3', {opacity:0, x: 200, duration:1,ease: Power2.easeOut}, '-=0.7')
.from('.work-4', {opacity:0, y: 200, duration:1,ease: Power2.easeOut}, '-=0.6')

const tlcontact = gsap.timeline({
  scrollTrigger: {
    trigger: '.contact-form',
    start: "center bottom"
  }
});


tlcontact.from('.title-contact', {y:100, opacity: 0, duration:1})
.from('.container-info', {opacity:0, y:100, duration:1,ease: Power4.easeOut}, '-=0.6')
.from('.form-name', {opacity:0, x: -100, duration:1,ease: Power4.easeOut}, '-=0.8')
.from('.form-mail', {opacity:0, x: 100, duration:1,ease: Power4.easeOut}, '-=0.99')
.from('.form-message', {opacity:0, y: 100, duration:1,ease: Power4.easeOut}, '-=.6')
.from('.container-button', {opacity:0, duration:1, y:100,ease: Power4.easeOut}, '-=0.99')


// Animation slide reviews

const slides = document.querySelectorAll('.slide');
const nextbutton = document.querySelector('.nextbutton');
const prevbutton = document.querySelector('.prevbutton');

slides.forEach(function(slide, index){
  slide.style.left = `${index * 100}%`;
});

var counter = 0;
nextbutton.addEventListener('click', function(){
  counter++;
  carousel();
});

prevbutton.addEventListener('click', function() {
  counter--;
  carousel();
});

function carousel(){
  if(counter === slides.length) {
    counter = 0;
  }
  if(counter < 0){
    counter = slides.length - 1;
  }
  slides.forEach(function(slide){
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};