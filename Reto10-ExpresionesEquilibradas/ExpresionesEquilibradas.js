/*Reto #10
* EXPRESIONES EQUILIBRADAS
* Fecha publicación enunciado: 07/03/22
* Fecha publicación resolución: 14/03/22
* Dificultad: MEDIA
*
* Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
* - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
* - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
* - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
* - Expresión no balanceada: { a * ( c + d ) ] - 5 }
*/

const isBalanced = (expresion) =>
{
    let signos = [];

    for (const element of expresion)
    {

        if(element === "(" || element === "[" || element === "{")
            signos.push(element);
        if(element === ")")
        {
            if(signos.pop() !== "(")
                break;
        }
        else if(element === "]")
        {
            if(signos.pop() !== "[")
                break;
        }
        if(element === "}")
        {
            if(signos.pop() !== "{")
                break;
        }
        
    }

    if(signos.length == 0)
        return true;

    return false;
}

let expresion = "-*/561{8741}{2345}[asdf]({asd[{}]})";

if(isBalanced(expresion))
    console.log("Expresion Balanceada");
else
    console.log("Expresion NO Balanceada");
