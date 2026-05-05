  const intro = document.getElementById('intro');

  if (sessionStorage.getItem('introPlayed')) {
    intro.remove();
  } else {
    setTimeout(() => {
      intro.style.opacity = '0';
      sessionStorage.setItem('introPlayed', 'true');
    }, 1600);

    setTimeout(() => {
      intro.remove();
    }, 2800);
  }

