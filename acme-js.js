// Developer: Sergio Pacheco (6/11/2021)

// Swaps between Hamburger Icon to 'X' and displays the 'Site Links' dropdown
const hamburger = document.querySelector(".hamburger");
const darkOverlay = document.getElementById("screenOverlay");
const pageBody = document.body;
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() 
{
    hamburger.classList.toggle("active");
    darkOverlay.classList.toggle("darken");
    pageBody.classList.toggle("no-scroll");
}

// JS to initialize Swiper for Mobile Carousels
const swiper = new Swiper('.swiper-container', 
{
    // Number of slides + slide spacing
    slidesPerView: 1,
    spaceBetween: 10,

    // Functional parameters
    direction: 'horizontal',
    loop: true,

    // Pagination activation
    pagination: {el: '.swiper-pagination',},
});