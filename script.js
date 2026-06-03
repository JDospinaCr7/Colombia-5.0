let slideActual = 0;

const slides = document.querySelectorAll(".slide");

/* =========================
   SLIDER
========================= */

function mostrarSlide(numero){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[numero].classList.add("active");
}

function moverSlide(direccion){

    slideActual += direccion;

    if(slideActual >= slides.length){
        slideActual = 0;
    }

    if(slideActual < 0){
        slideActual = slides.length - 1;
    }

    mostrarSlide(slideActual);
}

/* =========================
   CAMBIO IDIOMA
========================= */
function cambiarIdioma(idioma){

    const textosES = document.querySelectorAll(".es");
    const textosEN = document.querySelectorAll(".en");

    if(idioma === "es"){

        textosES.forEach(texto =>{
            texto.style.display = "block";
        });

        textosEN.forEach(texto =>{
            texto.style.display = "none";
        });

    }else{

        textosES.forEach(texto =>{
            texto.style.display = "none";
        });

        textosEN.forEach(texto =>{
            texto.style.display = "block";
        });

    }
}

/* =========================
   MENU PERFIL
========================= */

function toggleMenu(){

    const menu = document.getElementById("menu");

    if(menu.style.display === "block"){

        menu.style.display = "none";

    }else{

        menu.style.display = "block";
    }
}

/* =========================
   MODALES CONFERENCIAS
========================= */

function abrirModal(id){

    document.getElementById(id).style.display = "block";

}

function cerrarModal(id){

    document.getElementById(id).style.display = "none";

}

/* =========================
   CERRAR MODAL AFUERA
========================= */

window.onclick = function(event){

    let modales = document.querySelectorAll(".modal");

    modales.forEach(function(modal){

        if(event.target == modal){

            modal.style.display = "none";

        }

    });

}