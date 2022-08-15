let arreglo = new Array(100);
const parrafo = document.getElementById('resultado');

for (let i = 1; i < arreglo.length; i++)
{
    arreglo[i]=(i%3==0)?"fizz":(i%5==0)?"buzz":i;
    arreglo[i]=((i%5==0)&&(i%3==0))?"fizzbuzz":arreglo[i];
    console.log(`elemento: ${arreglo[i]}`);    
    parrafo.innerHTML+=`Elemento[${i}] = ${arreglo[i]}<br>`;
}
