const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".ul-apple");
const liContact = document.querySelector(".li-contact");
const buyIndex = document.querySelector(".li-buy-index");
const contactProd = document.querySelector(".contact-prod");
const liCarrito = document.querySelector(".li-carrito");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    liContact.classList.toggle("nav-menu_visible");
    buyIndex.classList.toggle("nav-menu_visible");

    
    navToggle.classList.toggle("is-active");


    contactProd.classList.toggle("nav-menu_visible");
    liCarrito.classList.toggle("nav-menu_visible");
    

})

