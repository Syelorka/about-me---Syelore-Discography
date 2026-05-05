
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

// AJAX  ---
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    const statusDiv = document.createElement('div');
    statusDiv.style.marginTop = "20px";
    statusDiv.style.textAlign = "center";
    statusDiv.id = "form-status";
    contactForm.appendChild(statusDiv);

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault(); // Oprește reîncărcarea paginii

      const formData = new FormData(contactForm);
      statusDiv.textContent = "Sending...";
      statusDiv.style.color = "#ffffff";

      try {
        // send.php
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          statusDiv.textContent = "Message sent successfully!";
          statusDiv.style.color = "#00ff00"; 
          contactForm.reset(); 
          
          setTimeout(() => { statusDiv.textContent = ""; }, 3000);
        } else {
          statusDiv.textContent = "Error: Could not send message.";
          statusDiv.style.color = "#ff0000";
        }
      } catch (error) {
        statusDiv.textContent = "Server connection error.";
        statusDiv.style.color = "#ff0000";
      }
    });
  }
});