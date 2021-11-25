/*Menu show and hidden*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*Menu show*/
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*Menu hidden*/
if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*Remove menu mobile*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))
/*-----*/

/*ScrollUp*/

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 560){
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll',scrollUp)
/*-----*/


/*Tema oscuro*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

/*Chequea si el body contiene un elemento llamado darktheme y asigna string*/
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](darkTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme() )
    localStorage.setItem('selected-icon', getCurrentIcon() )
})

/*-----*/

/*Acordeon de mision y objetivos*/

const missionContent = document.getElementsByClassName('mission__content')
        missionHeader = document.querySelectorAll('.mission__header')

function toggleMission(){
    let itemClass = this.parentNode.className

    for (i = 0; i < missionContent.length ; i++){
        missionContent[i].className = 'mission__content mission__close'
    }
    if (itemClass == 'mission__content mission__close') {
        this.parentNode.className = 'mission__content mission__open'
    }
}

missionHeader.forEach( (el) => {
    el.addEventListener('click', toggleMission)
})


/*-----*/
