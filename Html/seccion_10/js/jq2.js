$(document).ready(function () {
    //Ocultar y mostrar el texto con un evento click
    $("#toggleButtom").click(function () {
        $("#paragraf").toggle();
    })
    //Animar una caja
    $("#animatedbutton").click(function () {
        $("#box").animate({
            width: "200px",
            height: "200px",
        }, 1000);
    })
})
//Metodo para cambiar el color con un evento del mouse
$("#parrafo2").mouseenter(function () {
    $(this).css("background-color", "yellow");
}).mouseleave(function () {
    $(this).css("background-color", "white");
})



