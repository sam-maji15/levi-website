/* CHANGE THEME
  def theme
  dark theme */
let btn_change_theme = document.getElementById('btn-change-theme')

let btn_dark_theme = document.getElementById('toggle-dark-theme')

const ic_dark = document.querySelector('#toggle-dark-theme>ion-icon')


function toggleDarkTheme() {
  document.querySelector('html').classList.toggle('dark-theme')
  if (ic_dark.getAttribute('name') === 'moon-outline') {
    ic_dark.setAttribute('name', 'sunny-outline')
  } else {
    ic_dark.setAttribute('name', 'moon-outline')
  }
  
}

btn_dark_theme.onclick = () => {
  toggleDarkTheme()
  localStorage.setItem('theme', 'dark')
}
