const navbtn = document.getElementById("nav__trigger__btn");
const navMenu = document.getElementById("nav__ul");


navbtn.addEventListener("click" , ()=>{
    navMenu.classList.toggle("nav-active");
})