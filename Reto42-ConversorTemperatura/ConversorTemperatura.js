/*
 * Reto #42
 * CONVERSOR DE TEMPERATURA
 * Fecha publicación enunciado: 17/10/22
 * Fecha publicación resolución: 24/10/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que transforme grados Celsius en Fahrenheit y viceversa.
 * - Para que un dato de entrada sea correcto debe poseer un símbolo "°" y su unidad ("C" o "F").
 * - En caso contrario retornará un error.
 * - ¿Quieres emplear lo aprendido en este reto?
 *   Revisa el reto mensual y crea una App: https://retosdeprogramacion.com/mensuales2022
 */ 



const regex =  new RegExp(/^\d+[°]{1}[ForC]{1}$/, 'g'); // Regular expresion to check strig like: 35°C o 100°F
//const regNumber = new RegExp(/\d/, 'g');
const regNumber = new RegExp(/\d+/,'g');
const regChar = /[ForC]/g;


const tempConvertor = (temp) =>{

    if(!regex.test(temp))
        return "Error en la expresion";

    let number = Number.parseFloat(temp.match(regNumber));
    
    let car = temp.match(regChar);
    if(temp.match(regChar) == "C")
        return (number * 1.8 + 32).toFixed(2);
    else
        return ((number - 32) / 1.8).toFixed(2);
}

console.log(tempConvertor("10°C"));