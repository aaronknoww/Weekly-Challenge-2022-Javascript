/*
 * Reto #44
 * BUMERANES
 * Fecha publicación enunciado: 02/10/22
 * Fecha publicación resolución: 07/11/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que retorne el número total de bumeranes de un array de números
 * enteros e imprima cada uno de ellos.
 * - Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, en el que el
 *   primero y el último son iguales, y el segundo es diferente. Por ejemplo [2, 1, 2].
 * - En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2] y [4, 2, 4]).
 *
 */


'use strict';


const bumeranes = (array) =>{

    //let result = [][3]; // TODO: VER SI TENGO QUE ASIGNAR MEMORIO COMO EN C++.
    let result = new Array();
    let counter = 0;

    for (let i = 0; i < array.length; i++)
    {
        if( (i+2) >= array.length)
            break;
        
        if((array[i] == array[i+2]) && (array[i] != array[i+1]))
        {
            result[counter] = new Array();
            result[counter].push(array.slice(i, i+3));
            counter++; 
            
        }
        
    }
    console.log("La cantidad de Bumeranes encontrados es: "+ counter);
    console.log(result);

}

let array = [2, 1, 2, 1, 3, 4, 2, 4];

bumeranes(array);


