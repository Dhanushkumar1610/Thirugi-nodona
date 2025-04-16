// script.js

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Optional: WhatsApp confirmation before opening
  document.querySelector('.whatsapp-float').addEventListener('click', function (e) {
    const confirmWhatsApp = confirm('You will be redirected to WhatsApp. Continue?');
    if (!confirmWhatsApp) {
      e.preventDefault();
    }
  });
  