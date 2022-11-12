const arrayPorductos = [];

const producto1 = new Producto (1, 'vino', 900);
const producto2 = new Producto (2, 'sanguche', 600);
const producto3 = new Producto (3, 'torta', 1000);

arrayPorductos.push (producto1, producto2, producto3);

//Funcion para ordenar precio de menor a mayor

const ordenarMenorMayor = () => {
    arrayPorductos.sort((a,b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

const ordenarMayorMenor = () => {
    arrayPorductos.sort((a,b) => b.precio - a.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () =>{
    let array = [];
    arrayPorductos.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('Lista de precios:'+'\n'+array.join('\n'));   
};





function comprarProductos() {
    // Iniciar variables
    let seguirComprando = false;
    let productoNombre = '';
    let productoCantidad = 0;
    let totalCompra = 0;
    let total = 0;
    let precioTotal = 0;


    do{
        productoNombre = prompt('¿Queres comprar vino, sanguche o torta?');
        productoCantidad = parseInt(prompt('¿Que cantidad de ' +productoNombre+ ' quiere?'));
            
        const producto = arrayPorductos.find(producto => producto.nombre === productoNombre);
        
        
        if (producto) {
            total += producto.precio * productoCantidad; 
        }else{
            alert('El producto no se encuentra en stock');
        }
        
        console.log(producto);

        seguirComprando = confirm('¿Queres agregar otro producto?');
    }
    while (seguirComprando);

    aplicarDescuento(total);

    
};

function aplicarDescuento(totalCompra) {
    if (totalCompra >= 3000){
        totalCompra = totalCompra * 0.80 ;
        alert('Tenes %20 de descuento!');
    }

    alert('El total de la compra es: '+totalCompra);
}

function comprar() {
    const quieroOrdenar = confirm('¿Queres ordenar la lista de productos del mas barato al mas caro?');
    if (quieroOrdenar) {
        ordenarMenorMayor();
    }else{
        ordenarMayorMenor();
    }

    comprarProductos();
}

comprar();

// function sumarIva(precioTotal){
//     return ( precioTotal + (precioTotal * 0.21));
// }



// function validarCantidad(cantidad) {
//     while(Number.isNaN(cantidad) || cantidad === 0){
//         if (cantidad != 0){
//             alert('Debe agregar un numero')
//         }else{
//             alert('Debe agregar un numero distinto de cero')
//         }
//         cantidad = parseInt(prompt('¿Cuantos queres comprar?')); 
//     }

//     return cantidad;
// }


