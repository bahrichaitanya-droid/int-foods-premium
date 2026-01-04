// Carousel auto-slide
const track = document.querySelector('.carousel-track');
let index = 0;
function moveCarousel() {
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].getBoundingClientRect().width + 16; 
  index++;
  if(index >= items.length) index = 0;
  track.style.transform = `translateX(-${itemWidth * index}px)`;
}
setInterval(moveCarousel, 3000);

// Scroll fade-in
const faders = document.querySelectorAll('.fade-up');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 1.2;
  faders.forEach(fader => {
    const top = fader.getBoundingClientRect().top;
    if(top < triggerBottom) {
      fader.style.opacity = 1;
      fader.style.transform = 'translateY(0)';
    }
  });
});
