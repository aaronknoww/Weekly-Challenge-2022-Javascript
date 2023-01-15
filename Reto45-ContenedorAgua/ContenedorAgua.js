/*
 * Reto #45
 * CONTENEDOR DE AGUA
 * Fecha publicación enunciado: 07/10/22
 * Fecha publicación resolución: 14/11/22
 * Dificultad: MEDIA
 *
 * Enunciado: Dado un array de números enteros positivos, donde cada uno representa unidades
 * de bloques apilados, debemos calcular cuantas unidades de agua quedarán atrapadas entre ellos.
 *
 * - Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].
 *
 *          ⏹
 *          ⏹
 *   ⏹💧 💧⏹
 *   ⏹💧⏹⏹💧 ⏹
 *   ⏹💧⏹⏹💧 ⏹
 *   ⏹💧⏹⏹⏹⏹
 *
 *   Representando bloque con ⏹︎ y agua con 💧, quedarán atrapadas 7 unidades de agua.
 *   Suponemos que existe un suelo impermeable en la parte inferior que retiene el agua.
 */


'use strict';

const agua = "💧";
const cubo = "⏹︎";
let array = [4, 0, 3, 6, 1, 4];


let ren = 0;
let col = 0;
let matrix = [];

//Para obtener el elemento mayor del arreglo.
array.forEach(el => {
    if(el>ren)
        ren = el;
});

let linea = [];
let ini = 0;
let sig = 0;

for (let i = 1; i <= ren; i++)
{
    // Para armar una linea.
    for (let j = 0; j < array.length; j++) {
        
        if(array[j] >= i)
            linea[j] = cubo;
        else
            linea[j]= ' ';
        
    }
    ini = 0;
    sig = 1;

    do
    {
        if( linea[ini] == " ")
        {
            ini++;
            sig++;
        }        
        else if ( (linea[sig] == " ") && (sig < linea.length))
            sig++;
        else
        {
            ini++;
            while(ini<sig)
            {
                linea[ini] = agua;
                ini++;
            }
            if(ini == sig)
                sig++;

        }
        
    }
    while ((ini < array.length) && (sig < array.length));
    matrix.push(linea);
    linea = [];
}

for (let i = 0; i < matrix.length; i++) {
    
    console.log(matrix[matrix.length-1 -i]);
    
}
console.log("matriz completa");
console.log({matrix});
