
const hero = document.querySelector('.hero');
const title = document.querySelector('.hero-title');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
});

function motionLoop() {
  currentX += (mouseX - currentX) * 0.05;
  currentY += (mouseY - currentY) * 0.05;

  if (hero) {
    hero.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }

  if (title) {
    title.style.transform = `translate(${-currentX * 0.4}px, ${-currentY * 0.4}px)`;
  }

  requestAnimationFrame(motionLoop);
}

motionLoop();
