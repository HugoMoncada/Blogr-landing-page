let arrows = document.querySelectorAll(".arrow");
let dropdownButtons = document.querySelectorAll(".dropdown button"); 
let active = "";

dropdownButtons.forEach((button, i) => {
    button.addEventListener("click", () => {
        if(active != ""){
            if(active.id !== button.nextElementSibling.id ){
                active.classList.remove("dropdown-active");
            }
        }
        button.nextElementSibling.classList.toggle("dropdown-active");
        arrows[i].classList.toggle("arrow-active")
        active = button.nextElementSibling; 
    })
});


document.querySelector(".hamburguer").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("nav-active");
    let hamburguer = document.querySelector(".hamburguer");

    if(hamburguer.src.includes("icon-hamburger")){
        hamburguer.src = "/images/icon-close.svg"
    }
    else{
        hamburguer.src = "/images/icon-hamburger.svg"
    }
})


