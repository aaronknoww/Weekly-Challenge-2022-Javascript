/*
 * Reto #36
 * LOS ANILLOS DE PODER
 * Fecha publicación enunciado: 06/09/22
 * Fecha publicación resolución: 14/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: ¡La Tierra Media está en guerra! En ella lucharán razas leales a Sauron
 * contra otras bondadosas que no quieren que el mal reine sobre sus tierras.
 * Cada raza tiene asociado un "valor" entre 1 y 5:
 * - Razas bondadosas: Pelosos (1), Sureños buenos (2), Enanos (3), Númenóreanos (4), Elfos (5)
 * - Razas malvadas: Sureños malos (2), Orcos (2), Goblins (2), Huargos (3), Trolls (5)
 * Crea un programa que calcule el resultado de la batalla entre los 2 tipos de ejércitos:
 * - El resultado puede ser que gane el bien, el mal, o exista un empate. Dependiendo de la
 *   suma del valor del ejército y el número de integrantes.
 * - Cada ejército puede estar compuesto por un número de integrantes variable de cada raza.
 * - Tienes total libertad para modelar los datos del ejercicio.
 * Ej: 1 Peloso pierde contra 1 Orco, 2 Pelosos empatan contra 1 Orco, 3 Pelosos ganan a 1 Orco.
 */


const razaBondadosa = {
    Pelosos       : 1,
    SureñosBuenos : 2,
    Enanos        : 3,
    Numenoreanos  : 4,
    Elfos         : 5
}

const razaMala = {
    SureñosMalos : 2,
    Orcos        : 2,
    Goblins      : 2,
    Huargos      : 3,
    Trolls       : 5
}


let buenos = [];
let malos = [];

const batalla = (buenos, malos) =>{

    let resultado = buenos.reduce((ant, act) => ant+act) - malos.reduce((ant, act) => ant+act);
    

    if(resultado > 0)
        return "Gana el Bien";
    else if ( resultado < 0 )
        return "Gana el Mal";
    
    return "Empate";


}

buenos = [razaBondadosa.Elfos, razaBondadosa.Pelosos, razaBondadosa.Elfos];
malos = [razaMala.SureñosMalos, razaMala.Orcos, razaMala.Goblins, razaMala.Huargos];

console.log(batalla(buenos, malos));
