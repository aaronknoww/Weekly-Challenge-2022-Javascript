let cadena = "Hola Mundo que pasa mother fuckers";
let invertida = "";

const invertir = (cadena)=>
{
    for (const carcter of cadena)
        invertida = carcter + invertida; 
}

invertir(cadena);
console.log(invertida);
