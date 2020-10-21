
var navbar = document.querySelector(".nav-hidden")
var ham = document.querySelector(".menu")


ham.addEventListener("click", toggleHamburger)


function toggleHamburger(){
  navbar.classList.toggle("change")
  ham.classList.toggle("change")
 
}


