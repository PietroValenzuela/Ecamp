//var num_articulo = parseInt(prompt("Numero de articulos que desea comprar"));
// Ciclo For
//for (var inicio=1; inicio <=num_articulo; inicio++) {
//    var precio_articulo = parseInt(prompt("Dame precio de articulo" + inicio))
//    var cantidad_articulo = parseInt(prompt("Dame cantidad" + inicio))
//    console.log("Precio de articulo " + precio_articulo);
//    console.log("Cantidad" + cantidad_articulo);
//    console.log("El subtotal es = " + calcular_subtotal(precio_articulo, cantidad_articulo));
//}
// Ciclo do while
//var numero = parseInt(prompt("Ingresar un numero"));
var numero
var x=1;
do{
    console.log(x)
    x = x + 1;
}while(x < numero )

    //try catch
    var numero2= parseInt(prompt("Ingresa un numero"));
    try{
        if(numero2!=10)throw new Error ("el numero no es 10");
        console.log("La ejecucion fue realizada de forma correcta")
    } catch(error){
console.log(error.name,error.menssage);
}


function calcular_subtotal(precio,cantidad){
    subtotal=(precio * cantidad) *1.19;
    return subtotal;
}