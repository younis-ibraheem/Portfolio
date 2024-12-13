/***   typing animation */

var typed = new Typed(".typing", {
  strings: ["", "Web Developer",  "Mechanical Engineer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/*        Aside           */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
allSections = document.querySelectorAll("section");
totalSection = allSections.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    for (let i = 0; i < totalSection; i++) {
      allSections[i].classList.remove("back-section");
    }

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSections[j].classList.add("back-section");
      }

      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth < 1200 ){
        asideSectionToggler();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSections[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

const navToggleBtn = document.querySelector(".nav-toggler"), aside= document.querySelector(".aside");
navToggleBtn.addEventListener('click', ()=>{
    asideSectionToggler();
})
function  asideSectionToggler(){
    aside.classList.toggle ("open");
    navToggleBtn.classList.toggle("open");

    for (let i = 0; i < totalSection; i++) {
        allSections[i].classList.toggle("open");
      }
    
}

/* copy link*/ 
let link= document.querySelector(".link");
link.addEventListener('click', ()=>{  
   let url = window.location.href;
  navigator.clipboard.writeText(url);
  if( navigator.clipboard.writeText(url)){
    ("URL copied to clipboard"  + " "+ url);
  }
})
/* print */ 
let print= document.querySelector(".print");
print.addEventListener('click', ()=>{  
  window.print()
})