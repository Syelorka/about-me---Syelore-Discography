const music = document.getElementById('bg-music');
const toggleBtn = document.getElementById('music-toggle');
const volumeSlider = document.getElementById('music-volume');

let isPlaying = false;

music.volume = volumeSlider.value;

// запуск только после взаимодействия
toggleBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    toggleBtn.textContent = 'MUTE';
  } else {
    music.pause();
    toggleBtn.textContent = 'PLAY';
  }
  isPlaying = !isPlaying;
});

volumeSlider.addEventListener('input', () => {
  music.volume = volumeSlider.value;
});

