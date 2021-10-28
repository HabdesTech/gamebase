let numero_ingresado = document.getElementById("#00001");
let botonIntentos = document.getElementById("#00002");
let texto_para_insertar = document.getElementById("#00003")
let contenedor_boton_ejecutador = document.getElementById("#00004")
let boton_ejecutador = document.getElementById("#00005")
let game_interaction = document.getElementById("#00006")
let pistas = document.getElementById("#00007")
let numero_intentos = 0;
let texto_intentos = "";
let numero_aleatorio = 0;
let numeros_ingresados = []


function funcionSuprema() {
    generadorNumeroAleatorio()
    iterarSecciones()
    botonIntentos.addEventListener("click", () => {
        if (numero_ingresado.value == "" || numero_ingresado.value > 100) {
            alert("Ingresa un número entre 1 a 100")
        } else {
            numeros_ingresados.push(numero_ingresado.value)
            funcionValidadora()
            generadorDePistas()
        }
    })
}


//SUB-FUNCIONES
function iterarSecciones() {
    contenedor_boton_ejecutador.removeChild(boton_ejecutador)
    game_interaction.classList.remove("game_interaction")
}
function funcionValidadora() {
    if (numero_ingresado.value == numero_aleatorio) {
        alert("¡Felicidades!, has ganado el juego")
        location.reload();
    } else {
        do {
            numeroIntentos()
            insertarIntentos()
        } while (numero_intentos == 11)
    }
    if (numero_intentos > 10) {
        alert("¡Lo sentimo!, has perdido el juego")
        location.reload();
    }
}
function generadorNumeroAleatorio() {
    numero_aleatorio = Math.round(Math.random() * 100)
    return console.log(numero_aleatorio)
}
function numeroIntentos() {
    numero_intentos++
    document.getElementById("numeroIntentos").innerHTML = `Lo has intentado ${numero_intentos} veces`
}
function insertarIntentos() {
    document.getElementById("#00003").innerHTML = `<div>${numeros_ingresados}</div>\n`
}

function generadorDePistas() {
    if ((numero_ingresado.value - numero_aleatorio) >= 80 || (numero_ingresado.value - numero_aleatorio) <= -80) {
        document.getElementById("#00007").innerHTML = "Diferencia mayor a 40"
    } else if ((numero_ingresado.value - numero_aleatorio) >= 60 || (numero_ingresado.value - numero_aleatorio) <= -60) {
        document.getElementById("#00007").innerHTML = "Diferencia mayor a 30"
    } else if ((numero_ingresado.value - numero_aleatorio) >= 40 || (numero_ingresado.value - numero_aleatorio) <= -40) {
        document.getElementById("#00007").innerHTML = "Diferencia mayor a 80"
    } else if ((numero_ingresado.value - numero_aleatorio) >= 30 || (numero_ingresado.value - numero_aleatorio) <= -30) {
        document.getElementById("#00007").innerHTML = "Diferencia mayor a 60"
    } else if ((numero_ingresado.value - numero_aleatorio) >= 20 || (numero_ingresado.value - numero_aleatorio) <= -20) {
        document.getElementById("#00007").innerHTML = "Diferencia mayor a 10"
    } else if ((numero_ingresado.value - numero_aleatorio) >= 10 || (numero_ingresado.value - numero_aleatorio) <= -10) {
        document.getElementById("#00007").innerHTML = "Diferencia mayor a 20"
    } else if ((numero_ingresado.value - numero_aleatorio) >= 5 || (numero_ingresado.value - numero_aleatorio) <= -5) {
        document.getElementById("#00007").innerHTML = "Diferencia mayor a 5"
    }

}