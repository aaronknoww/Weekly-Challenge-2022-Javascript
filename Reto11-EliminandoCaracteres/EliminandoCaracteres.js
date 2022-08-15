/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 */



//Funición que devuelve los caracteres presentes en strA, pero que no se encuentren en strB
const findNonCommon = (strA, strB) =>
{
    let out = "";
    out = strA;
    for (const caracter of strB)
        out = out.replaceAll(caracter,"");        
    return out;
};

let str1 = "abcdabc";
let str2 = "cd19er";

console.log(findNonCommon(str1,str2));
console.log(findNonCommon(str2,str1));
