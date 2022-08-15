console.log("\nESCRIBE LOS NÚMEROS PRIMOS ENTRE 1 Y 100\n");

let ar=[];
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
    let decimals= Math.trunc(raiz);
    if ((raiz-decimals) <= 0)
        return true;
    else
        return false;
}
   
for (let number = 1; number < 101; number++) 
{
  if(isPrime(number))
  {
      ar[iter]=number;
      iter++;
  }
}

console.log(ar);



