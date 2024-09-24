const scrollRevealScript = document.createElement('script');
scrollRevealScript.src = 'https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js';
document.head.appendChild(scrollRevealScript);

scrollRevealScript.onload = function() {
  ScrollReveal().reveal('.skills-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    reset: true
  });

  ScrollReveal().reveal('.hero-tittle', {
    origin: 'left',
    distance: '90px',
    duration: 2000,
    reset: true
  });

  ScrollReveal().reveal('.rl', {
    origin: 'right',
    distance: '90px',
    duration: 2000,
    reset: true
  });

  ScrollReveal().reveal('.paragraph-section', {
    origin: 'top',
    distance: '90px',
    duration: 2000,
    reset: true
  }); 
};



 