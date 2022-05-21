console.log("Script cargado correctamente.")


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

let hamburger = document.querySelector("span");
hamburger.onclick = openNav;
let hamburgerClose = document.querySelector(".closebtn");
hamburgerClose.onclick = closeNav;
