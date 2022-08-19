/*
 * Reto #21
 * CALCULADORA .TXT
 * Fecha publicación enunciado: 23/05/22
 * Fecha publicación resolución: 01/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
 *
 */



//EXPRESIONES REGULARES PARA EVALUAR QUE EL TEXTO QUE INGRESA ES CORRECTO
const regexFormat = new RegExp(  /(\d+\s[+\-/*/]{1}\s\d+){1}(\s?[+\-/*]\s{1}\d+)*/, "g");// Revisa que el patron de de la operacion se (num opera num opera num)
const regexPermitidos = new RegExp(/^[\s*0-9+/\-/*/\s*]*$/g); //Expresion regular que solo permite del (0-9) y (+ - * /) 

// CODIGO PARA LEER DESDE UN ARCHIVO
const readFile = ()=>
{
    let fs = require("fs");
    let archivo = fs.readFileSync( "../Reto21-CalculadoraTxt/Challenge21.txt",  "UTF-8");
    let nuevoA = archivo.replaceAll(/\r/g, " ").replaceAll(/\n/g, "");
    return nuevoA;
}    

const operacion= (arreglo,indice)=>
{
    let n1 = parseFloat(arreglo[indice]);
    let n2 = parseFloat(arreglo[indice+2]);
    resultado = 0;

    switch (arreglo[indice+1])
    {
        case "*":
            resultado = n1 * n2;
            arreglo.splice(indice, 3 , resultado.toString());
            break;
        case "/":
            resultado = n1 / n2;
            arreglo.splice(indice, 3 , resultado.toString());
            break;
        case "+":
            resultado = n1 + n2;
            arreglo.splice(indice, 3 , resultado.toString());
            break;
        case "-":
            resultado = n1 - n2;
            arreglo.splice(indice, 3 , resultado.toString());
            break;    
        default:
            break;
    }

}

const calculadoraTxt = (cadena)=>
{
    if(!regexPermitidos.test(cadena))
    {
        console.error("No se puede calcular debido a que contiene caracteres no permitidos"); // Si la cadena contien otra cosa que no sea los caracteres permitidos.
        return;
    }
    if(!regexFormat.test(cadena))
    {
        console.error("No se puede calcular porque el orden de los numeros y operandos es incorrecto")
        return; // Si la cadena no tiene un patron igual a [123 + 157] o [57 * 65 + 21]
    }

    let array = cadena.split(" ");
    
    //Para buscar primero todas las multiplicaciones y divisiones.
    for (let i = 0; i < array.length; i++)
    {
        if(array[i] == "*" || array[i] == "/")
        {
            operacion(array, i-1);
            --i;
        }
    }

    for (let i = 0; i < array.length; i++)
    {
        if(array[i] == "+" || array[i] == "-")
        {
            operacion(array, i-1);
            --i;
        }
    }

    console.log(`el resultado es: ${array[0]}`);   


}


let cadena = readFile();
calculadoraTxt(cadena);





