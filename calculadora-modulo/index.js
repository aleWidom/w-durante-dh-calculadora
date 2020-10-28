


function sumar (resultadoParcial,numero=0) {

    if (typeof resultadoParcial!=="number" || typeof numero!=="number") {
        throw new Error ("El argumento debe ser númerico")
    }

     return resultadoParcial + numero;

}



function restar (resultadoParcial, numero=0) {
    
    if (typeof resultadoParcial!=="number" || typeof numero!=="number") {
        throw new Error ("El argumento debe ser númerico")
    }

    return resultadoParcial - numero;

}



function multiplicar (resultadoParcial, numero=1) {

    if (typeof resultadoParcial!=="number" || typeof numero!=="number") {
        throw new Error ("El argumento debe ser númerico")
    }

    return resultadoParcial * numero;

}


function dividir (resultadoParcial, numero=1) {

    if (typeof resultadoParcial!=="number" || typeof numero!=="number") {
        throw new Error ("El argumento debe ser númerico")
    }

    if (numero===0) {
        throw new Error ("No puede dividirse un número sobre cero")
    }

    return resultadoParcial / numero;

}



module.exports = {
    suma : sumar,
    resta : restar,
    multiplicacion: multiplicar,
    division : dividir,
 /*    operacion: operaciones, */
} 

