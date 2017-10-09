let oPrueba = {
    precio: 12,
    iva: 1.16,
}

oPrueba.calcularIvaAsync_Arrow = function() {
    setTimeout(() => {
        let precioFinal= this.precio + this.iva;
        console.log(`Usando un arrow function:
        El precio final es ${precioFinal}`)
    }, 1000)
}