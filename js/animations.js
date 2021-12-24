"use strict"

const titleBlock = document.querySelector("div.welcome-title");
const imageBlock = document.querySelector("div.welcome-images");

window.addEventListener("scroll", () => {
    titleBlock.style.transform = `translate(${scrollY / -5}px, ${scrollY / -5}px)`;
    titleBlock.style.opacity = `${Math.cos(scrollY / 100)}`;

    imageBlock.style.transform = `translate(${scrollY / 5}px, ${scrollY / -2}px)`;
    imageBlock.style.opacity = `${Math.cos(scrollY / 100)}`;

});
