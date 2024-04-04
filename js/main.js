const navbtn = document.getElementById("nav__trigger__btn");
const navMenu = document.getElementById("nav__ul");

navbtn.addEventListener("click" , ()=>{
    navMenu.classList.toggle("nav-active");
})
const swiper = new Swiper('.m-yaown-swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 3, // Change slidesPreview to slidesPerView
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1, // Change slidesPreview to slidesPerView
        },
        768: {
            slidesPerView: 2, // Change slidesPreview to slidesPerView
        },
        960: {
            slidesPerView: 3, // Change slidesPreview to slidesPerView
        },
    }
});
