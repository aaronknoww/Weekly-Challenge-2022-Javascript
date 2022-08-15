let decimal = 255;
let binario = "";
let iterador = decimal;

do 
{
    binario = iterador%2+binario;
    iterador = Math.trunc(iterador=iterador/2);

} while ( iterador >=1 );


console.log(binario);
