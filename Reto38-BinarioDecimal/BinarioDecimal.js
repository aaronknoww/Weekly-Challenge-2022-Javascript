/*
 * Reto #38
 * BINARIO A DECIMAL
 * Fecha publicación enunciado: 19/09/22
 * Fecha publicación resolución: 27/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa se encargue de transformar un número binario a decimal sin utilizar
 * funciones propias del lenguaje que lo hagan directamente.
 *
 */

let binario = "10011100111111111"

probe = RegExp(/^[0-1]{1,}$/gm);

const binarioDecimal = (binario) => {

    if(!(probe.test(binario)))
        throw "La cadena no representa un número binario";
    
    let decimal = 0;
    let mul = 1;
    let debuNum = 0;
    for (let i = binario.length-1; i >= 0 ; i--)
    {
        debuNum = parseInt(binario[i]);
        decimal += (parseInt(binario[i]) * mul);
        mul+=mul;
        
    }
    console.log ("El número decimal es: "+decimal);    

}

console.log( "Número Binaro: "+ binario);
binarioDecimal(binario);
//let binario = 0b101;
