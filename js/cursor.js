const cursor = document.querySelector('.cursor');

let cx = 0, cy = 0;
let tx = 0, ty = 0;

document.addEventListener('mousemove', (e) => {
  tx = e.clientX;
  ty = e.clientY;
});

function cursorLoop() {
  cx += (tx - cx) * 0.15;
  cy += (ty - cy) * 0.15;

  if (cursor) {
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
  }

  requestAnimationFrame(cursorLoop);
}

cursorLoop();

document.querySelectorAll('button, a').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (!cursor) return;
    cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    cursor.style.background = 'rgba(255,255,255,0.2)';
  });

  el.addEventListener('mouseleave', () => {
    if (!cursor) return;
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursor.style.background = 'transparent';
  });
});
