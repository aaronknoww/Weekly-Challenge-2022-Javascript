/*
 * Reto #16
 * EN MAYÚSCULA
 * Fecha publicación enunciado: 18/04/22
 * Fecha publicación resolución: 25/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 */


// 
const capitalaize = (cadena) =>
{
    //probe = RegExp(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/. ])(0?[1-9]|1[1-2])\1\d{4}$/); // revisa el formato de fecha dd/mm/yyyy -> 14/09/2000
    let array = cadena.split(/\s+/);
    let resultado="";

  
    array.forEach(element => {
       element = element.replace(element[0], element[0].toUpperCase());
       resultado+= element+" ";
    });

    return resultado.trimEnd();
    
};

let cadena = "aaron    del cruz azul";

console.log(cadena);
cadena = capitalaize(cadena);
console.log(cadena);
    