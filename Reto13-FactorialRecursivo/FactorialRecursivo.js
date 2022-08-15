/*
 * Reto #13
 * FACTORIAL RECURSIVO
 * Fecha publicación enunciado: 28/03/22
 * Fecha publicación resolución: 04/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.
 */


//
const factorial = (numero) =>
{
    if(numero<0)
        return null;
    if(numero == 0)
        return 1;
    
    if(numero == 1)
        return 1;
    return factorial(numero-1)*numero;

};


console.log(factorial(15));

