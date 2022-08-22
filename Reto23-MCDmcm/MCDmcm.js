/*
 * Reto #23
 * MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO
 * Fecha publicación enunciado: 07/06/22
 * Fecha publicación resolución: 13/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 *
*/

console.log("\nESCRIBE LOS NÚMEROS PRIMOS ENTRE 1 Y 100\n");

let primos=[];
let iter=0;


function isPrime(number)
{
    
    if(number<2)
        return false;

        if((number==2) || (number==3) || ( number==5) || (number==7))
            return true;
            
        if (sqrIsExact(number))
            return false; 
        
        if((number%2) && (number%3) && ( number%5) && (number%7) !=0)
           return true;

        
        return false;
}
function sqrIsExact(number)
{
    let raiz = Math.sqrt(number);
    let decimals = Math.trunc(raiz);
    if ((raiz-decimals) <= 0)
        return true;
    else
        return false;
}
// Calcula los primeros números del 1 al 100   
for (let number = 1; number < 101; number++) 
{
  if(isPrime(number))
  {
      primos[iter]=number;
      iter++;
  }
}

// Funcion para encotrar los divisores del número entrante
const divisible = (numero) =>{
    
    let n1 = numero;
    let i = 0;
    let p = 0;
    let mul = [];
    do
    {
        if(n1%primos[p] == 0)
        {
            mul[i] = primos[p];
            i++;
            n1 /= primos[p];  
        }
        else
        {
            p++;            
        }

        
    } while (n1 != 1);

    return mul;
}


const mcd = (num1, num2) => {

    let multiplos1 = [];
    let multiplos2 = [];
    let resultado = 1;
    let i = 0;
    
    multiplos1 = divisible(num1);
    multiplos2 = divisible(num2);
    // [2,2,3,5] [2,3,3]

    for (const mul of multiplos1)
    {
        do
        {
            if(mul == multiplos2[i])
            {
                resultado *= mul;
                i++;
                break;
            }

          i++;  
        } while (i < multiplos2.length);
        
        if(i >= multiplos2.length)
            break;
    }

    return resultado;


}

const mcm = (num1, num2) => {

    let n1 = num1;
    let n2 = num2;
    let resultado = 1;
    let i = 0;
    
    do 
    {
        if ( (n1 % primos[i] == 0) && (n2 % primos[i] == 0) )
        {
            n1 /= primos[i];
            n2 /= primos[i];
            resultado *= primos[i];
        }
        else if(n1 % primos[i] == 0)
        {
            n1 /= primos[i];
            resultado *= primos[i];

        }
        else if(n2 % primos[i] == 0)
        {
            n2 /= primos[i];
            resultado *= primos[i];
        }
        else
            i++;
        
    } while ((n1 != 1) || (n2 != 1));
   
    return resultado;

}

console.log(mcd(380, 420));
console.log(mcm(7,13));