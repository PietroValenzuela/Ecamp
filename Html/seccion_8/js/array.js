var regiones = ["Santiago", "Antofagasta", "Viña del Mar", "Bio bio"];
// Imprimir arreglo
console.log(regiones);
//obtiene una posicion especifica de un arreglo
console.log(regiones[2])
for (var i = 0; i < regiones.length; i++) {
    console.log("nombre de las regiones:" + regiones[i]);
}
regiones.push("Maule");
console.log(regiones);
console.log("que pasa...")
regiones.pop();
console.log(regiones);
regiones.shift();
console.log(regiones);
regiones.unshift ("Los Lagos");

// Recorriendo un rango
var precios = [802, 910, 1221, 218, 346]

for (var i = 0; i < precios.length; i++) {
    console.log(precios[1]);
    console.log(precios[i] * 1.19);

}