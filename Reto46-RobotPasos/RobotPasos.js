/*
 * Reto #46
 * ¿DÓNDE ESTÁ EL ROBOT?
 * Fecha publicación enunciado: 14/11/22
 * Fecha publicación resolución: 21/11/22
 * Dificultad: MEDIA
 *
 * Enunciado: Calcula dónde estará un robot (sus coordenadas finales) que se encuentra en una cuadrícula
 * representada por los ejes "x" e "y".
 * - El robot comienza en la coordenada (0, 0).
 * - Para idicarle que se mueva, le enviamos un array formado por enteros (positivos o negativos)
 *   que indican la secuencia de pasos a dar.
 *  - Por ejemplo: [10, 5, -2] indica que primero se mueve 10 pasos, se detiene, luego 5, se detiene,
 *    y finalmente 2. El resultado en este caso sería (x: -5, y: 12)
 * - Si el número de pasos es negativo, se desplazaría en sentido contrario al que está mirando.
 * - Los primeros pasos los hace en el eje "y". Interpretamos que está mirando hacia la parte
 *   positiva del eje "y".
 * - El robot tiene un fallo en su programación: cada vez que finaliza una secuencia de pasos gira
 *   90 grados en el sentido contrario a las agujas del reloj.
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */


// NOTA: El punto x = 0 y = 0, es como en un plano carteciano.
// El robot inicia mirando hacia arriba, avanza primero en el eje y.
// El robot avanza hacia donde mira cuando recibe numero positivo 

'use strict';


//let array = [4, 0, 3, 6, 1, 4];
let array = [10,5,-2];
const direccion = {
    arriba : 1,
    abajo : 2,
    derecha : 3,
    izquierda : 4
}

let arriba = true; // Para controlar si el robot mira arriba o abajo
let dercha = true;

let x = 0;
let y = 0;
let robotVista = direccion.arriba;
array.forEach(el => {

    if(robotVista == direccion.arriba)// se mueve en el eje y
    {    
        y += el;
        robotVista = direccion.izquierda;
    }
    else if ( robotVista == direccion.abajo )
    {        
        y -= el;        
        robotVista = direccion.derecha;
    }
    else if (robotVista == direccion.derecha)
    {       
        x += el;     
        robotVista = direccion.arriba;
    }
    else
    {       
        x -= el;            
        robotVista = direccion.abajo;
    }
})

console.log(`el robot se encuentra en el punto x: ${x} y: ${y}`);