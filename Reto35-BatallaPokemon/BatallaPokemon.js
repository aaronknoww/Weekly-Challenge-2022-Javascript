/*
 * Reto #35
 * BATALLA POKÉMON
 * Fecha publicación enunciado: 29/08/22
 * Fecha publicación resolución: 06/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule el daño de un ataque durante una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 *Lanza un error si el array de entrada no es correcto.
 *
*/

// electrico --> agua super efectivo;   poco efectivo planta, electrico; neutral fuego
// fuego ------> planta Super efectivo; poco efectivo agua, fuego;   neutral electrico 
// agua -------> fuego super efectivo;  poco efectivo agua, planta;  neutral electrico 
// planta------> agua super efectivo ;  poco efectivo fuego, planta; neutral electrico 

//atacante, ataque, defensa 

const tablaAtaque = {
    "electrico": {"agua":2,  "planta":0.5,"electrico":0.5,"fuego":1},
    "fuego"    : {"planta":2,"agua":0.5,"fuego":0.5,"electrico":1},
    "agua"     : {"fuego":2, "agua":0.5,"planta":0.5,"electrico":1},
    "planta"   : {"agua":2,  "fuego":0.5,"planta":0.5,"electrico":1},
};

const tipo = Object.getOwnPropertyNames(tablaAtaque);

// Tipo de pokemon, cantdiad, tipo, cantidad
const batallaPokemon = (pokemonAt, ataque, pokemonDf, defensa) =>{
  
    if (!(tipo.includes(pokemonAt) && tipo.includes(pokemonDf)))
        throw "ERROR EN EL TIPO DE ELEMENTO";

    let efectividad = tablaAtaque[pokemonAt][pokemonDf];
    let daño = 50 * (ataque / defensa) * efectividad;
    console.log("El daño es: "+daño);           

    return daño;

}

batallaPokemon("fuego", 400, "agua", 200);
batallaPokemon("electrico", 400, "agua", 200);
batallaPokemon("planta", 400, "electrico", 200);
