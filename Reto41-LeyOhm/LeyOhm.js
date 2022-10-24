/*
 * Reto #41
 * LA LEY DE OHM
 * Fecha publicación enunciado: 10/10/22
 * Fecha publicación resolución: 17/10/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que calcule el valor del parámetro perdido correspondiente a la ley de Ohm.
 * - Enviaremos a la función 2 de los 3 parámetros (V, R, I), y retornará el valor del tercero (redondeado a 2 decimales).
 * - Si los parámetros son incorrectos o insuficientes, la función retornará la cadena de texto "Invalid values".
 */
 


const ohm = (volt = null, res = null, inte = null) => {
    if((volt == null && res == null && inte == null || (volt != null && res != null && inte != null)))
        return "Invalid values";

    if(volt != null && res != null)
        return Number.parseFloat(volt/res).toFixed(2);
    else if(volt != null && inte != null)
        return Number.parseFloat(volt/inte).toFixed(2);
    else if(res != null && inte != null)
        return Number.parseFloat(inte * res).toFixed(2);
    else 
        return "Invalid values";


}

console.log(ohm(null, 5.25, 3.25));
