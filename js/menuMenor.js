function abrirMenuMenor() {
    setTimeout(() => {
        menuMenor()
    }, 200);
}

function menuMenor() {
    var menuMenor = document.getElementById("menuMenor");
    var menuMenorOpacity = document.getElementById("menuMenorOpacity");
    var bodyOverflow = document.querySelector(".body")
    
    menuMenor.classList.toggle("fechar");
    menuMenorOpacity.classList.toggle("fechar");
    bodyOverflow.classList.toggle("overflow")
}