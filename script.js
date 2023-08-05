const btnBurger = document.querySelector(".menu");
const sideBar = document.querySelector('.side-bar');
const closed = document.querySelector('.closed');
const btnClosed = document.querySelector('.menu-closed');
const headerItems = document.querySelector(".header-items");

document.addEventListener("DOMContentLoaded", ()=>{
    sideBar.style.display = 'none';
});

btnBurger.addEventListener("click", function(){
    sideBar.style.display = 'flex';
});

btnClosed.addEventListener("click", function(){
    sideBar.style.display = 'none';
});