/* =========================================
   PANTALLAS
========================================= */

const pantallaInicio =
    document.getElementById("pantallaInicio");

const pantallaSueno =
    document.getElementById("pantallaSueno");

const pantallaAbordaje =
    document.getElementById("pantallaAbordaje");

const pantallaVuelo =
    document.getElementById("pantallaVuelo");

const pantallaCiudad =
    document.getElementById("pantallaCiudad");

const pantallaExperiencia =
    document.getElementById("pantallaExperiencia");

const pantalla10 =
    document.getElementById("pantalla10");


/* =========================================
   BOTONES
========================================= */

const comenzar =
    document.getElementById("comenzar");

const pregunta =
    document.getElementById("pregunta");

const cerrar =
    document.getElementById("cerrar");

const abordar =
    document.getElementById("abordar");

const continuarViaje =
    document.getElementById("continuarViaje");

const continuarVuelo =
    document.getElementById("continuarVuelo");

const seguirVuelo =
    document.getElementById("seguirVuelo");

const continuarExperiencia =
    document.getElementById("continuarExperiencia");


/* =========================================
   MODAL
========================================= */

const modal =
    document.getElementById("modal");


/* =========================================
   ELEMENTOS DE LA EXPERIENCIA
========================================= */

const frasesSecuencia =
    document.querySelectorAll(".frase-secuencia");

const mensajeFinal =
    document.getElementById("mensajeFinal");


/* =========================================
   PANTALLA 1 → PANTALLA 2
========================================= */

comenzar.addEventListener("click", () => {

    pantallaInicio.classList.remove("activa");

    setTimeout(() => {

        pantallaSueno.classList.add("activa");

    }, 350);

});


/* =========================================
   ABRIR MODAL DEL ?
========================================= */

pregunta.addEventListener("click", () => {

    modal.classList.add("visible");

});


/* =========================================
   CERRAR MODAL
========================================= */

cerrar.addEventListener("click", () => {

    modal.classList.remove("visible");

    mostrarAbordar();

});


/* =========================================
   CERRAR MODAL TOCANDO AFUERA
========================================= */

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {

        modal.classList.remove("visible");

        mostrarAbordar();

    }

});


/* =========================================
   MOSTRAR BOTÓN ABORDAR
========================================= */

function mostrarAbordar() {

    setTimeout(() => {

        abordar.classList.add("visible");

    }, 450);

}


/* =========================================
   PANTALLA 2 → PANTALLA 3
========================================= */

abordar.addEventListener("click", () => {

    pantallaSueno.classList.remove("activa");

    setTimeout(() => {

        pantallaAbordaje.classList.add("activa");

    }, 450);

});


/* =========================================
   PANTALLA 3 → PANTALLA 4
========================================= */

continuarViaje.addEventListener("click", () => {

    pantallaAbordaje.classList.remove("activa");

    setTimeout(() => {

        pantallaVuelo.classList.add("activa");

    }, 450);

});


/* =========================================
   PANTALLA 4 → PANTALLA 5
========================================= */

continuarVuelo.addEventListener("click", () => {

    pantallaVuelo.classList.remove("activa");

    setTimeout(() => {

        pantallaCiudad.classList.add("activa");

    }, 450);

});


/* =========================================
   PANTALLA 5 → PANTALLA 6
========================================= */

seguirVuelo.addEventListener("click", () => {

    pantallaCiudad.classList.remove("activa");

    setTimeout(() => {

        pantallaExperiencia.classList.add("activa");

        iniciarExperiencia();

    }, 700);

});


/* =========================================
   PANTALLA 6
   TODAS LAS FRASES
========================================= */

let temporizadorFrase = null;
let temporizadorSiguiente = null;
let temporizadorFinal = null;
let temporizadorBoton = null;


function iniciarExperiencia() {

    /* -----------------------------------------
       Limpiar temporizadores anteriores
    ----------------------------------------- */

    clearTimeout(temporizadorFrase);
    clearTimeout(temporizadorSiguiente);
    clearTimeout(temporizadorFinal);
    clearTimeout(temporizadorBoton);


    /* -----------------------------------------
       Reiniciar visualmente todo
    ----------------------------------------- */

    frasesSecuencia.forEach((frase) => {

        frase.classList.remove("visible");

    });

    mensajeFinal.classList.remove("visible");

    continuarExperiencia.classList.remove("visible");


    let indice = 0;


    /* -----------------------------------------
       MOSTRAR SIGUIENTE FRASE
    ----------------------------------------- */

    function mostrarSiguienteFrase() {

        if (indice >= frasesSecuencia.length) {

            mostrarMensajeFinal();

            return;

        }


        const fraseActual =
            frasesSecuencia[indice];


        /* Mostrar */

        fraseActual.classList.add("visible");


        /* Esperar 5 segundos */

        temporizadorFrase = setTimeout(() => {

            /* Ocultar */

            fraseActual.classList.remove("visible");

            indice++;


            /* Pausa entre frases */

            temporizadorSiguiente = setTimeout(() => {

                mostrarSiguienteFrase();

            }, 700);

        }, 5000);

    }


    mostrarSiguienteFrase();

}


/* =========================================
   MOSTRAR MENSAJE FINAL
========================================= */

function mostrarMensajeFinal() {

    temporizadorFinal = setTimeout(() => {

        mensajeFinal.classList.add("visible");

    }, 700);


    temporizadorBoton = setTimeout(() => {

        continuarExperiencia.classList.add("visible");

    }, 5700);

}


/* =========================================
   PANTALLA 6 → PANTALLA 10
========================================= */

continuarExperiencia.addEventListener("click", () => {

    pantallaExperiencia.classList.remove("activa");

    setTimeout(() => {

        pantalla10.classList.add("activa");

    }, 700);

});