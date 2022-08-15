/*
 * Reto #12
 * ¿ES UN PALÍNDROMO?
 * Fecha publicación enunciado: 21/03/22
 * Fecha publicación resolución: 28/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */


//
const isPalindrome = (frase) =>
{
    let temp = frase.toLowerCase();
    temp=temp.replaceAll(/\s+/g,""); 
    for (let i = 0; i < temp.length; i++)
    {
        if(temp[i]!==temp[temp.length-i-1])
            return false;
        
    }
    return true;
};

let frase = "ana lleva al oso la avellana";


console.log(isPalindrome(frase));

