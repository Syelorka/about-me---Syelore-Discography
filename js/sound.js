const clickSound = new Audio('audio/click.wav');
clickSound.volume = 0.12;

document.querySelectorAll('button, a').forEach(el => {
  el.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
