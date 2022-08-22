/*
 * Reto #24
 * ITERATION MASTER
 * Fecha publicación enunciado: 13/06/22
 * Fecha publicación resolución: 20/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno). ¿De cuántas maneras eres capaz de hacerlo? Crea el código para cada una de ellas.
 *
*/

let numeros = new Array(100);

console.log(" CON FOR");
for (let i = 1; i <= 100; i++) {
    numeros[i] = i;
    console.log(i);    
}

console.log("FOREACH");
numeros.forEach(element => {
    console.log(element);
    
});

console.log(" CON FOR IN");
for (const key in numeros)
{
    
    console.log(key);
}

console.log(" CON FOR OF");
for (const iterator of numeros)
{
    console.log(iterator);
    
}

console.log("CON WHILE");

let i=1;
while (i<=100)
{
    console.log(i);
    i++;    
}

console.log(numeros);
