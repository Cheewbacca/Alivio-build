'use strict';

window.onload = function(){
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

    const header = document.getElementById("header");
    const how_it_works_section_pos = document.getElementById("how_it_works").offsetTop;

    const how_it_works_h2 = document.getElementById("how_it_works_h2");
    const how_it_works_p = document.getElementById("how_it_works_p");

    const steps = document.getElementsByClassName("step");
    const steps_top_pos = steps[0].offsetTop;
    const steps_bottom_pos = steps[1].offsetTop;

    const footer_height = document.getElementById("footer").offsetHeight;
    const last_section = document.getElementById("last_section");

    last_section.style.marginBottom = footer_height + "px";

    window.addEventListener("scroll", () => {
        var lastScrollTop = 0;
        let state = window.pageYOffset || document.documentElement.scrollTop;

        if (state > lastScrollTop) {
            header.style.transform = "translate(0, -80%)";
        } else {
            header.style.transform = "translate(0, 0)";
        }

        lastScrollTop = state <= 0 ? 0 : state;

        if (window.pageYOffset > how_it_works_section_pos - document.documentElement.clientHeight / 2){
            how_it_works_h2.style.transform = "translate(0)";
            how_it_works_p.style.transform = "translate(0)";
        }

        if (window.pageYOffset > steps_top_pos - document.documentElement.clientHeight / 2){
            steps[0].style.opacity = 1;
            steps[2].style.opacity = 1;
        }

        if (window.pageYOffset > steps_bottom_pos - document.documentElement.clientHeight / 2){
            steps[1].style.opacity = 1;
        }

    }, false);

    header.addEventListener("mouseover", () => {
        header.style.transform = "translate(0, 0)";
    });

    header.addEventListener("mouseout", () => {
        if ( document.documentElement.scrollTop > 100){
            header.style.transform = "translate(0, -80%)";
        } 
    });

    const preloader = document.getElementById("preloader");

    setTimeout( () => preloader.style.display = "none", 2000 );
};

