console.log("\nPROGRAMA QUE IMPRIME LOS PRIMEROS 50 NUMEROS FIBONACCI\n");

const array = Array(51);

array[0]=0;
array[1]=1;
for (let i = 2; i < array.length; i++)
    array[i]=array[i-1]+array[i-2];  
    
console.log("\NRESULTADO");
console.log({array});
