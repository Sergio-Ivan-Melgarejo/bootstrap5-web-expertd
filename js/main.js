"use strict"

const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 120
});

typewriter
    .typeString("La capital del Sol")
    .pauseFor(300)
    .start();