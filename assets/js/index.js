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

 

  const body = document.body
  const ls = window.localStorage
  const btnTheme = document.getElementById('btnTheme')

  const theme = ls.getItem('darkMode')
  const sun = 'bx bxs-sun'
  const moon = 'bx bxs-moon'

  if (theme) {
    body.classList.add('dark')
    btnTheme.firstElementChild.className = sun
  } else {
    body.classList.remove('dark')
    btnTheme.firstElementChild.className = moon
  }
  
  btnTheme.addEventListener('click', function () {
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
      ls.setItem('darkMode', true)
      btnTheme.firstElementChild.className = sun
    } else {
      ls.removeItem('darkMode')
      btnTheme.firstElementChild.className = moon
    }
  
  })




