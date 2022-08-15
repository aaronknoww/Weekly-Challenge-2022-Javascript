/*
 * Reto #15
 * ¿CUÁNTOS DÍAS?
 * Fecha publicación enunciado: 11/04/22
 * Fecha publicación resolución: 18/04/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.
 */


const mesDia = 
{
    1:31,
    2:28,
    3:31,
    4:30,
    5:31,
    6:30,
    7:31,
    8:31,
    9:30,
    10:31,
    11:30,
    12:31
}
const diaM = 86400000; //Milisegundos en un dia.

// 
const daysBetween = (fecha1, fecha2) =>
{
    if(!(evaluarCadena(fecha1) && evaluarCadena(fecha2)))
        throw "invalid string";
    let f1=cadenaAfecha(fecha1);
    let f2=cadenaAfecha(fecha2);
    return Math.abs((f1-f2)/diaM);    
};

const evaluarCadena = (cadena) =>
{
    probe = RegExp(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/. ])(0?[1-9]|1[1-2])\1\d{4}$/); // revisa el formato de fecha dd/mm/yyyy -> 14/09/2000

    if(!probe.test(cadena))
        return false;
    
    let dia = cadena[0] + cadena[1];
    let mes = cadena[3] + cadena[4];
    
    if(mesDia[parseInt(mes)] >= dia) // Revisa que cada mes solo admita la cantidad de dias que tiene en el calendario.
        return true;
    return false;
        
}
const cadenaAfecha = (cadena)=>
{
    let dia = parseInt(cadena[0] + cadena[1]);
    let mes = parseInt(cadena[3] + cadena[4])-1;
    let year = parseInt(cadena[6] + cadena[7] + cadena[8] + cadena[9]);
    fecha = new Date(year,mes,dia);
    
    return fecha;   

}
    
console.log(daysBetween("aa14/09/1984", "11/08/2022"));
    