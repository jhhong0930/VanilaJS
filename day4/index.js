const body = document.querySelector("body");

function resize() {
    if(body.offsetWidth >= 1000) {
        body.style.background = "#f39c12";
    } else if(body.offsetWidth >= 800){
        body.style.background = "#8e44ad";
    } else {
        body.style.background = "blue";
    }
}

window.addEventListener("resize", resize);