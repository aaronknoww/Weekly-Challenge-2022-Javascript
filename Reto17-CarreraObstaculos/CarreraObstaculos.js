/*
 * Reto #17
 * LA CARRERA DE OBSTÁCULOS
 * Fecha publicación enunciado: 25/04/22
 * Fecha publicación resolución: 02/05/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla) será correcto y no
 *        variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */


const el =
{
    "run" : "_",
    "jump" : "|"
};


// El arreglo y el string debe tener la misma cantidad de elmentos.
const checkRace = ( accion, pista) =>
{
    let resultado = "";
    let prueba = true;

    for (let i = 0; i < pista.length; i++)
    {
        if(el[accion[i]] == pista[i])
            resultado+= pista[i];
        else
        {
            prueba = false;
            switch (accion[i])
            {
                case "run":
                    resultado+="x";
                    break;
                case "jump":
                    resultado+="/";
            
                default:
                    break;
            }
        } 

         
    }
    console.log("El resultado de la carrera es: ", resultado);
    return prueba;
 
};


let accion = ["run","jump","run","run"];
let pista = "_|__";

if(checkRace(accion, pista))
    console.log("LA carrera se completó con existo");
else
    console.log("No se completó bien la carrera");
    