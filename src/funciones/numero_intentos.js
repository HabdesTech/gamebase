let numero_intentos = 1;
let texto_intentos = "";
let numeroIngresado = document.getElementById("#00001");
let botonIntentos = document.getElementById("#00002");


function numeroIntentos() {
    botonIntentos.addEventListener("click", () => {
        numero_intentos++
    })
    document.getElementById("numeroIntentos").innerHTML = `Lo has intentado ${numero_intentos} veces`
}

