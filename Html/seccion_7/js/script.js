/* console.log("Hola desde la consola JS");*/
alert("Bienvenido a la calculadora Basica");
console.log("Bienvenido a la calculador Basica");
alert("Opciones: 1. Suma, 2. Resta , 3. Multiplicacion, 4. Division");
opcion = parseInt(prompt("Escribe el numero de la opcion deseada"));
var a;
var b;
a = parseInt(prompt("Ingresa un numero"));
b = parseInt(prompt("Ingresa otro numero"));
if (a == 0 && b == 0) {
    alert("Los numero son 0 , nose puede hacer operaciones")
} else {
    switch (opcion) {
        case 1:
            total = suma(a, b);
            alert("El resultado de la suma es " + total);
            break;
        case 2:
            total2 = resta(a, b);
            alert("El resultado de la resta es " + total2);
            break;
        case 3:
            total3 = multiplicacion(a, b);
            alert("El resultado de la multiplicacion es: " + total3);
            break;
        case 4:
            total4 = division(a, b);
            alert("El resultado de la division es " + total4);
            break;
        default:
            alert("Opcion no valida, leer correctamente las opciones");
            break;
    }
}

alert("Gracias por hacer uso de la calculadora 0077");


function suma(a, b) {
    resultado = a + b;
    return resultado;
}
function resta(a, b) {
    resultado = a - b;
    return resultado;
}
function multiplicacion(a, b) {
    resultado = a * b;
    return resultado;
}
function division(a, b) {
    if (a > b) {
        resultado = a / b;
    } else {
        resultado = 0;
    }
    return resultado;
}