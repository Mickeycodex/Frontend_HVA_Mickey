
var navbar = document.querySelector(".nav-hidden")
var ham = document.querySelector(".menu")


ham.addEventListener("click", toggleHamburger)


function toggleHamburger(){
  navbar.classList.toggle("change")
  ham.classList.toggle("change")
 
}



var Priceblok
 
Priceblok = document.getElementById("buttonGetstared");

Priceblok.addEventListener("click", veranderenButton);

function veranderenButton (){
Priceblok.classList.toggle("change");
  
}