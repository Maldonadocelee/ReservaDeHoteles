let tiempo = "lluvioso";
if (tiempo == "lluvioso") {
    console.log ("salir con paraguas");
}



let edadObligatoria=18;
let edadOptativaMinima=16;
let edadUsuario = parseInt (prompt("Ingresa tu edad"));


if (edadUsuario>=edadObligatoria){
    console.log ("debes Votar");
}
else if (edadUsuario>= edadOptativaMinima) {
    console.log ("podes votar si queres");
}
else {
    console.log ("No podes votar");
}