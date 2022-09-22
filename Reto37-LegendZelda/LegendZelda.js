/*
* Reto #37
 * LOS LANZAMIENTOS DE "THE LEGEND OF ZELDA"
 * Fecha publicación enunciado: 14/09/22
 * Fecha publicación resolución: 19/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: ¡Han anunciado un nuevo "The Legend of Zelda"! Se llamará "Tears of the Kingdom"
 * y se lanzará el 12 de mayo de 2023.
 * Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos "The Legend of Zelda" de la historia?
 * Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda que tú selecciones.
 * - Debes buscar cada uno de los títulos y su día de lanzamiento (si no encuentras el día exacto
 *   puedes usar el mes, o incluso inventártelo)
 *
 */


// const dateToMilliseconds = ( dias, horas, minutos, segundos ) =>{

// return dias*diaM + horas*horaM + minutos*minutosM + segundos*1000;

// }


// console.log(dateToMilliseconds(365,0,0,0));

const diaM = 86400000; //Milisegundos en un dia.
const horaM = diaM/24;
const minutosM = horaM/60;



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


// Regresa la cantidad de dias entre 2 fechas, no cuenta años bisiestos 
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
    probe = RegExp(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/. ])(0?[1-9]|1[0-2])\1\d{4}$/gm); // revisa el formato de fecha dd/mm/yyyy -> 14/09/2000

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

// Recibe el titulo y fecha de dos juegos de zelda y muestra cuanto tiempo ha pasado entre cada uno.
const distanciaJuegos = ( titulo1, fecha1, titulo2, fecha2) =>{

    if(!(evaluarCadena(fecha1) && evaluarCadena(fecha2)))
        throw "invalid date";
    
    let totalDias = daysBetween(fecha1, fecha2);
    let totalAnios=0;
    let year1 = parseInt(fecha1[6] + fecha1[7] + fecha1[8] + fecha1[9]);
    let year2 = parseInt(fecha2[6] + fecha2[7] + fecha2[8] + fecha2[9]);
    
    let inicial = 0;
    let final = 0;

    // *** inicia -- Para agregar el dia extra de los años bisiestos.

    if(year1<=year2)
    {
        inicial = year1;
        final = year2;
    }
    else
    {
        inicial = year2;
        final = year1;        
    }
    let bis = 0;

    for (let year = inicial; year < final; year++)
    {
        if(year % 4 ==0)
            bis++;                
    }
    totalDias+=bis;
    // TERMINA 
    
    totalAnios = Math.floor(totalDias/365)
    totalDias = totalDias % 365;
    console.log("Entre " + titulo1 + " y "+ titulo2 + " han pasado: "+ totalAnios + " años y "+ totalDias + " dias");
}
    
console.log(distanciaJuegos("The legend of Zelda", "22/08/1987", "Ocarina of Time", "23/10/1998"));



