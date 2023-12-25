
// Targetting the element from index.html - under the nav -> div 
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".humburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}