function calcular(){
    
    

    //obtenemos el valor de la cantidad de fotos y lo convertimos a numero
    let cantidad = parseInt($('#cantidad').val());
    if (cantidad < 1) {
        swal("La cantidad debe ser mayor a cero");
        return false;
    }
    //obtenemos el valor del tipo de color
    let tipoColor = $('#tipo').val();
    if (tipoColor == "") {
        swal("Debes seleccionar el tipo de color!");
        return false;
    }

    //obtenemos el valor del radio
    let medida = $('input:radio[name=medida]:checked').val();
    if (medida == undefined) {
        swal("Debes seleccionar la medida!");
        return false;
    }


    //calculamos el resultado
    obtenerResultado = calcularPrecio(cantidad, tipoColor, medida);
    $('#cantidadPagar').val("La cantidad a pagar es $" + obtenerResultado + " USD");
    return false;
}


function calcularPrecio(cantidad, tipo, medida) {
    let resultado = 0;
    if (tipo == "blancoNegro") {
        switch (medida) {
            case "3x4":
                resultado = cantidad * 4;
                break;
            case "4x6":
                resultado = cantidad * 5.2;
                break;
            case "5x7":
                resultado = cantidad * 6;
                break;
            case "6x8":
                resultado = cantidad * 7.9;
                break;
        }
    } else if (tipo == "color") {
        switch (medida) {
            case "3x4":
                resultado = cantidad * 5.5;
                break;
            case "4x6":
                resultado = cantidad * 6.2;
                break;
            case "5x7":
                resultado = cantidad * 7.5;
                break;
            case "6x8":
                resultado = cantidad * 9;
                break;
        }
    }

    return resultado;
}

function limpiarFormulario(){
    $('#frmFotos')[0].reset();
}