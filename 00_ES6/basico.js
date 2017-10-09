var data = [{precio:12},{precio:34},{precio:19}];

data.forEach( elem => {
    if (true) {
         const iva = 1.16;
         let precioFinal = elem.precio * iva;
        // Nos creamos un string especial 
         console.log(`Oferta:
         El precio final es ${precioFinal}`);
    }
})