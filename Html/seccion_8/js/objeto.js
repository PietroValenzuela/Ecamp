let mochila = {
    //Propiedades de objeto
    color:"negro",
    tamaño: "20cm",
    numeroBolsillo: 2,
    numeroCierres: 2,
    //metodo del objeto 
    abrir_tapa: function() {
        console.log("La tapa de la mochila esta abierta");
    },
    cerrarTapa: function(){
        console.log("La tapa de la mochila esta cerrada");
    }
};
//Accediendo a las propiedades del objeto
console.log(mochila.color);
console.log(mochila.tamaño);
// Accediendo a los metodos del objeto
mochila. abrir_tapa ();
mochila. cerrarTapa ();
console.log(mochila);