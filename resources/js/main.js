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

    /*Recorre el arreglo de elementos de mission content y asigna open o close segun corresponda*/
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

/*Color Picker*/
/*Just for fun, le cambia el color a toda la página*/
function getColorPicker(){

    var color = document.getElementById('colorcito').value;
    var r = parseInt(color.substr(1,2), 16); // Grab the hex representation of red (chars 1-2) and convert to decimal (base 10).
    var g = parseInt(color.substr(3,2), 16);
    var b = parseInt(color.substr(5,2), 16);

    function rgbToHsl(r, g, b){
    
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
    
        if(max == min){
            h = s = 0; // achromatic
        }else{
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
    
        return [h, s, l];
    }
    var hue = rgbToHsl(r, g, b)[0] * 360;
    var r = document.querySelector(':root');
    r.style.setProperty('--hue-color',hue)
    
}
/*-----*/

function alertMail(){
    alert("Revise la bandeja de entrada de su correo para validar su identidad.")
}

/*Login (para este punto las animaciones eran lo de menos)*/
const logUser = document.getElementById('login-user');
        recoverPwd = document.getElementById('login-forgot');
        createUser = document.getElementById('login-create');

function registerM(){
    logUser.style.display = 'none';
    createUser.style.display = 'none';
    recoverPwd.style.display = 'grid';
}

function createM(){
    logUser.style.display = 'none';
    recoverPwd.style.display = 'none';
    createUser.style.display = 'grid';
    const localAux = document.getElementsByClassName('login__center')
    localAux.style.height = '10px';
}

function backLog(){
    recoverPwd.style.display = 'none';
    createUser.style.display = 'none';
    logUser.style.display = 'grid';
}
/*-----*/