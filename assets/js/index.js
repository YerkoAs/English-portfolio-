    const nav = document.querySelector('nav')
    const listas = document.querySelectorAll('#menu-list-item')
    nav.addEventListener('click', function (pipoca) {
        

        if (pipoca.target.closest('#openButton')) {
            menu.classList.add("display-menu")   
        }
        if (pipoca.target.closest('#closeButton')) {
            menu.classList.remove("display-menu")
               
           }
        if (pipoca.target.closest('#menu-list-item')) {
            menu.classList.remove('display-menu')
          for (const lista of listas) {
            lista.classList.remove('active')
          }
          pipoca.target.classList.add('active')
               
        }
        
    }) 

    
    





  var typed = new Typed('#typing', {
    strings: ['Photographer', 'Developer', 'Designer'],
    typeSpeed: 50,
    backSpeed : 50,
    startDelay : 25,
    loop : true,
    loopCount : Infinity
});

const sr = new ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.hero__content-img', { origin: 'right', distance: '100px' })
sr.reveal('.hero__content-body', { origin: 'left', distance: '100px' })
sr.reveal('.about p', { origin: 'bottom', distance: '100px', duration: 2000 })
sr.reveal('.about p+p', { origin: 'bottom', distance: '100px', duration: 3000 })
sr.reveal('.skills__content', { origin: 'top', distance: '100px' })

 