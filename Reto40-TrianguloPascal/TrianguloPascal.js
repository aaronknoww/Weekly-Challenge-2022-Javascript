/*
 * Reto #40
 * TRIÁNGULO DE PASCAL
 * Fecha publicación enunciado: 03/10/22
 * Fecha publicación resolución: 10/10/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea una función que sea capaz de dibujar el "Triángulo de Pascal" indicándole
 * únicamente el tamaño del lado.
 * - Aquí puedes ver rápidamente cómo se calcula el triángulo:
 *   https://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif
 * 
 *            |1231
 *            |  2 2
 *            | 3 3 3

 *            |    1
 *            |   2 2
 *            |  3 3 3
 *            | 4 4 4 4
 *            |5 5 5 5 5 
 */           


let tam = 7;
let cad = "";
//cad = "*"+ cad;

const printData = (arr)=>{

    result="";

    arr.forEach(data => {
        
        result += `${data} `;
        
    });
    
    return result;

}

const trianguloPascal = (tam)=>{

    arriba = [1];
    abajo = [];
       
    for (let i = 0; i < tam; i++) // Para imprimer cada fila.
    {
        for (let c = 0; c < i+2; c++)
        {
            
            if(c-1 < 0)
                abajo.push(arriba[c]);
            else if(c >= arriba.length)
                abajo.push(arriba[c-1]);
            else
                abajo.push(arriba[c]+ arriba[c-1]);
        }
        cad = printData(abajo);
        cad = cad.padStart((tam-i)*2+1+(i*2)," ");
        console.log(cad);
        arriba = [...abajo];
        abajo.splice(0, abajo.length);           

    }

}

trianguloPascal(5);
//TODO: FUNCIONA BINE PERO FALTA ALINEAR EL TRIANGULO.

//NOTA: total = tam-i+1+(i*2); para esa formula primero se calcula cuantos caracteres se imprimen por ejemplo en el 1: 1_, en el 2: 2_2_2_
//de tal forma que la cantidad de caracteres se incrementa en 2, lo que es igual  |carcteres = (i*2)+2;|
//Despues se calcula cuantos espacios hay antes de cada cadena, ejemplo: _-_-_1. en el 2: _-_2_2, por lo que se usa la formula
//|espacios= tam-i-1;| lo que sumando las 2 formulas resulta en la formula del total.