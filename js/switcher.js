/*          toggle  style switcher      */
const styleSwitcher = document.querySelector('.style-switcher-toggler');
styleSwitcher.addEventListener ( `click`, ()=>{
   
    document.querySelector(`.style-switcher`).classList.toggle("open");
})
// hide style 
window.addEventListener("scroll" ,()=>{
    if(document.querySelector(`.style-switcher`).classList.toggle("open") ){
    document.querySelector(`.style-switcher`).classList.remove("open")

    }
})

/*          theme color      */

const alternateStyle = document.querySelectorAll('.alternate-style');

function setActiveColor(style) {

alternateStyle.forEach((color)=>{

    if (style === color.getAttribute("title")){
        color.removeAttribute('disabled');
    }
    else{
        color.setAttribute('disabled' , 'true');

    }
})
}

/*        dark and light      */
const daynight = document.querySelector(`.day-night`);
daynight.addEventListener('click' , ()=> {
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

})
window.addEventListener("load",()=> {
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else {
        daynight.querySelector("i").classList.add("fa-moon");


    }
})