/*
* Reto #14
* ¿ES UN NÚMERO DE ARMSTRONG?
* Fecha publicación enunciado: 04/04/22
* Fecha publicación resolución: 11/04/22
* Dificultad: FÁCIL
*
* Enunciado: Escribe una función que calcule si un número dado es un número de Armstrong (o también llamado narcisista).
* Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
*  Un número es de Armstrong si la suma de los dígitos que lo componen al cubo (por ser 3 digitos) es igual al número.
*  Por ejemplo el 153, ya que 13 + 53 + 33 = 1 + 125 + 27 = 153
*/

// Regresa true si es un número armstrong.
const isArmstrong = (numero) =>
{
    let iterador = numero;
    let digitos = [];
    let sum = 0;
    do
    {
        digitos.push(iterador%10);
        iterador = Math.trunc(iterador/10);
        
    } while (iterador != 0);

    let pot = digitos.length

    digitos.forEach(digit => {

        sum += Math.pow(digit,digitos.length);
        
    });

    return (sum==numero)? true : false;

};


console.log(isArmstrong(8208));

