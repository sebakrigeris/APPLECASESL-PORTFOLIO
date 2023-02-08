const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".ul-apple");
const liContact = document.querySelector(".li-contact");
const buyIndex = document.querySelector(".li-buy");
;

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    liContact.classList.toggle("nav-menu_visible");
    buyIndex.classList.toggle("nav-menu_visible");

    
    navToggle.classList.toggle("is-active");  

});

