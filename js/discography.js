const track = document.getElementById('drift-track');


const originalWidth = track.scrollWidth;


track.innerHTML += track.innerHTML;

let x = 0;
let speed = 0.25;
let paused = false;

document.querySelectorAll('.release').forEach(card => {
  card.addEventListener('mouseenter', () => paused = true);
  card.addEventListener('mouseleave', () => paused = false);
});

function animate() {
  if (!paused) {
    x -= speed;
  }


  if (Math.abs(x) >= originalWidth) {
    x += originalWidth;
  }

  track.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animate);
}

animate();
