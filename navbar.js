let navbar = document.querySelector(".bar");
let mobileNavbar = document.querySelector("#mobile_navbar");
let closeNavbar = document.querySelector(".cross")

navbar.addEventListener("click", () => {
    mobileNavbar.style.display = "block"
})

closeNavbar.addEventListener("click", () => {
    mobileNavbar.style.display = "none"
})
