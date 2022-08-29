var ig = document.getElementById("ig");
var hamburger = document.getElementById("hamburger");
var menu = document.getElementById("menu");

ig.onclick = function() {
    window.open('https://www.instagram.com/jestem.kacha/');
}

hamburger.onclick = function () {

    console.log("hamburger.onclick");
    
    if (menu.className == "menu") {

        menu.className = "menu on";
    }

    else {
        menu.className = "menu";
    }
}