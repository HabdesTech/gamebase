function generadorNumeroAleatorio() {
    numero_aleatorio = Math.round(Math.random() * 10)
    return console.log(numero_aleatorio)
}

export { generadorNumeroAleatorio }