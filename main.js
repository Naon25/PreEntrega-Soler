function comprarProductos() {
    // Iniciar variables
    let seguirComprando = false;
    let productos = '';
    let precio = 0;
    let cantidad = 0;
    let opc = false;
    let totalCompra = 0;
    let cantidadTotal = 0;
    let precioTotal = 0;


    do{
        do{
            producto = prompt('¿Queres comprar vinos, sandwiches o tortas?');
            cantidad = parseInt(prompt('¿Que cantidad de ' +producto+ ' quiere?'));
            let opc = false;

            let cantidadValidada = validarCantidad(cantidad);
            console.log(+cantidad);

            switch(producto){
                case 'vinos':
                    precio = 900;
                    break;
                case 'sandwiches':
                    precio = 600;
                    break;
                case 'tortas':
                    precio = 1100;
                    break;
                default:
                    alert('Opcion ingresada incorrecta');
                    precio = 0;
                    cantidad = 0;
                    opc = true;
                    break;
            }

        }while(opc)

        precioTotal = precio * cantidad;
        precioIva = sumarIva(precioTotal);
        totalCompra += precioIva;
        cantidadTotal += cantidad;


        console.log('El precio total es: '+totalCompra);

        seguirComprando = confirm('¿Le gustaria seguir comprando?');

    }
    while (seguirComprando)

    alert("El precio total a pagar es: "+totalCompra);

    return totalCompra;
}


function sumarIva(precioTotal){
    return ( precioTotal + (precioTotal * 0.21));
}



function validarCantidad(cantidad) {
    while(Number.isNaN(cantidad) || cantidad === 0){
        if (cantidad != 0){
            alert('Debe agregar un numero')
        }else{
            alert('Debe agregar un numero distinto de cero')
        }
        cantidad = parseInt(prompt('¿Cuantos queres comprar?')); 
    }

    return cantidad;
}



comprarProductos();