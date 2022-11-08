let nombreUsuario = prompt ("ingrese su nombre") ;
alert ("Hola " + nombreUsuario + ", nos alegra poder ayudarte a elegir el mejor destino!");

//calcular el precio por dia dependiendo
// la cantidad de personas y los dias que se hospedarian
// Los menores de 5 anios no pagan

let cantidadPersonasMenores = parseInt (prompt ("Ingrese la cantidad de personas mayores a 18 anios"))  ;
let cantidadPersonasMayores = parseInt (prompt ("Ingrese la cantidad de personas menores a 5 anios"))  ;

let totalDeDias = parseInt(prompt ("Cuantos dias desea reservar?")) ;

function totalHuespedes (cantidadPersonasMayores, cantidadPersonasMenores) {
    let totalhuespedes = cantidadPersonasMayores + cantidadPersonasMenores;
    return totalhuespedes;
}

if ((cantidadPersonasMayores + cantidadPersonasMenores) <= 6) {
    alert ("La cantidad de huespedes es adecuada") ;
}
else {
    alert ("La cantidad de huespedes supera la capacidad de la habitacion") ;
}

let precioPorPersona = 1500 ;
function precioPorDia () {
    let preciodeldia = cantidadPersonasMayores * precioPorPersona;
    return preciodeldia;
}


function presupuestoTotal () {
    let presupuestos =  precioPorDia * totalDeDias;
    return presupuestos;
}
alert ("Presupuesto por " + totalDeDias + " dias: " + presupuestoTotal);


class Habitacion {
    constructor (nombre, capacidad, precio, jacuzzi) {
        this.nombre = nombre;
        this.capacidad = parseInt (capacidad);
        this.precio = parseInt (precio);
        this.jacuzzi = jacuzzi;
    }
}

const habitaciones = [
    new Habitacion ('sencilla', 1, 500, 'sin jacuzzi'),
    new Habitacion ('doble', 2, 1000, 'sin jacuzzi'),
    new Habitacion ('triple', 3, 500, 'sin jacuzzi'),
    new Habitacion ('matrimonial', 2, 1200, 'sin jacuzzi'),
    new Habitacion ('suit', 2, 500, 'con jacuzzi'),
    new Habitacion ('suit doble', 4, 500, 'con jacuzzi'),
    new Habitacion ('presidencial', 5, 2000, 'con jacuzzi'),
    
]
console.log (habitaciones);