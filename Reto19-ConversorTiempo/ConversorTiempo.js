/*
 * Reto #19
 * CONVERSOR TIEMPO
 * Fecha publicación enunciado: 09/05/22
 * Fecha publicación resolución: 16/05/22
 * Dificultad: FACIL
 *
 * Enunciado: Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.
 *
 */


const diaM = 86400000; //Milisegundos en un dia.
const horaM = diaM/24;
const minutosM = horaM/60;

const dateToMilliseconds = ( dias, horas, minutos, segundos ) =>{

return dias*diaM + horas*horaM + minutos*minutosM + segundos*1000;

}


console.log(dateToMilliseconds(365,0,0,0));
    