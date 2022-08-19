/*
 * Reto #22
 * CONJUNTOS
 * Fecha publicación enunciado: 01/06/22
 * Fecha publicación resolución: 07/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
*/

//Se implementó solamente un algoritmo de fuerza bruta o ingenuo.

const conjuntos = (array1, array2, commond) =>{
    
    return (commond) ? comunes(array1,array2): diferentes(array1, array2);
}
const comunes = (array1, array2) => {


    let resultado = [];
     
    for (let i = 0; i < array1.length; i++)
    {
        for (let j = 0; j < array2.length; j++)
        {
            if(array1[i]==array2[j])
            {
                resultado.push(array1[i]);
                break;
            }
            
        }
        
    }
    return resultado;
}
const diferentes= (array1,array2) =>{

    let resultado = [];
    let test = true;
   
    for (let i = 0; i < array1.length; i++)
    {
        test = true;
        for (let j = 0; j < array2.length; j++)
        {
            if(array1[i]==array2[j])
            {
                test = false;                
                break;
            }
                       
        }
        if(test)
            resultado.push(array1[i])
        
    }
    return resultado;


}


let a1 = [3,5,6,7,1,15];
let b1 = [3,6,1,1,3];

let r1 = conjuntos(a1, b1, true);
let r2 = conjuntos(a1, b1, false);
console.log(r1);
console.log(r2);
