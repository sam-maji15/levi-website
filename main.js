let nav_menu_icon = document.querySelector('.navbar-menu-icon')
nav_menu_icon.onclick = function() {
  document.querySelector('.navbar-menu-full').classList.add('navbar-menu-full-active')
}
let btn_close_menu = document.getElementById('btn-close-menu')
btn_close_menu.onclick = () => {
  document.querySelector('.navbar-menu-full').classList.remove('navbar-menu-full-active')
}


/* Smooth scrolling */
let btn_menu_home = document.getElementById('btn-menu-home')
let btn_menu_profile = document.getElementById('btn-menu-profile')
let btn_menu_skills = document.getElementById('btn-menu-skills')



/* CHANGE THEME
  def theme
  dark theme */
let btn_change_theme = document.getElementById('btn-change-theme')

let btn_dark_theme = document.getElementById('toggle-dark-theme')
btn_dark_theme.onclick = () => {
  document.querySelector('#toggle-dark-theme>i').classList.toggle('fa-sun')
  document.querySelector('html').classList.toggle('dark-theme')
}

//scroll top for block-02
let c1 = Math.floor(document.querySelector('.block-02').getBoundingClientRect().top);

//scroll top for block-03
let c2 = Math.floor(document.querySelector('.block-03').getBoundingClientRect().top);

btn_menu_home.onclick = () => window.scroll({top: 0, left:0, behavior: 'smooth'})
btn_menu_profile.onclick = () => window.scroll({top: c1, left: 0, behavior: 'smooth'})
btn_menu_skills.onclick = () => window.scroll({top: c2, left: 0, behavior: 'smooth'})



/* SCROLL REVEAL */
const scr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/*SCROLL HOME*/
scr.reveal('.con-main-text>h2', {})
scr.reveal('.text-title', {origin: 'right'})
scr.reveal('.my-image', {origin: 'right', delay:200})

// SCROLL ANIM OM MENU ITEMS
// scr.reveal('.navbar-menu-full>li', {origin: 'right'})


scr.reveal('.def-title', {})
scr.reveal('.my-social-media>a:first-child', {delay: 200})
scr.reveal('.my-social-media>a:nth-child(2)', {delay: 400})
scr.reveal('.my-social-media>a:nth-child(3)', {delay: 600})
