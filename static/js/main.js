'use strict';

const burger = document.getElementById("burger");
const hiddenMenu = document.getElementsByTagName("nav")[0];

var isClicked = true;

burger.addEventListener("click", (e) => {
    e.preventDefault(); 
    let children = document.getElementById("burger").children;
    if (isClicked){
        children[0].style.transform = 'rotate(-45deg) translate(2px)';
        children[1].style.transform = 'rotate(45deg) translate(2px)';
        hiddenMenu.style.right = 0;
    } else {
        children[0].style.transform = 'rotate(0deg) translate(0px)';
        children[1].style.transform = 'rotate(0deg) translate(0px)';
        hiddenMenu.style.right = '-100vw';
    }

    isClicked = !isClicked;

});

