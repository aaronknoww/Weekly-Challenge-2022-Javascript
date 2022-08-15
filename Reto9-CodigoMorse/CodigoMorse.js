let texto = 
 `A;.-;B;-...;C;-.-.;D;-..;E;.;F;..-.;
 G;--.;H;....;I;..;J;.---;K;-.-;L;.-..;
 M;--;N;-.;O;---;P;.--.;Q;--.-;R;.-.;
 S;...;T;-;U;..-;V;...-;W;.--;X;-..-;
 Y;-.--;Z;--..;Á;.--.-;É;..-..;Ñ;--.--;Ó;---.;
 0;-----;1;.----;2;..---;3;...--;4;....-;5;.....;
 6;-....;7;--...;8;---..;9;----.;
 .;.-.-.-;,;--..--;?;..--..;';.----.;!;-.-.--;/;-..-.;
 (;-.--.;);-.--.-;&;.-...;:;---...;=;-...-;
 +;.-.-.;-;-....-;_;..--.-;$;...-..-;@;.--.-.;
 ¿;..-.-;¡;--...-;`; // faltaron """";.-..-.;";";-.-.-.;						

 // CODIGO PARA LEER DESDE UN ARCHIVO 
// let fs = require("fs");
// let archivo = fs.readFileSync('../Reto9-CodigoMorse/codigoMorse8.csv', 'UTF-8');
// let nuevoA = archivo.replaceAll(/\n/g,"").replaceAll(/\s+/g,"").replaceAll(/;{3,}/g, "");
// let caracteres = nuevoA.split(";");


//Crea una arbol binario donde la clave es la letra y el contenido es su morse.
const textoAMorse = (texto)=>
{

    let nuevo = texto.replaceAll(/\n/g,"").replaceAll(/\s+/g,"");
    let caracteres = nuevo.split(";");
    
    if(Array.isArray(caracteres))
    console.log("Es arreglo");
    
    let codigo = new Map();
    for (let index = 0; index < caracteres.length-1; index+=2)
    {
        codigo.set(caracteres[index], caracteres[index+1]);
    }
    codigo.set(" ", "/");
    return codigo;
}


//Crea un árbol binario donde su clave es el código morse y su contido es la letra. 
const morseAtexto = (texto)=>
{
    
    let nuevo = texto.replaceAll(/\n/g,"").replaceAll(/\s+/g,"");
    let caracteres = nuevo.split(";");
    
    if(Array.isArray(caracteres))
    console.log("Es arreglo");
    
    let codigo = new Map();
    for (let index = 0; index < caracteres.length-1; index+=2)
    {
        codigo.set(caracteres[index+1], caracteres[index]);
    }
    codigo.set("/", " ");
    return codigo;
}


let cod; 
//let entrada = ".- .- .-. --- -. / -.. . .-.. / -.-. .-. ..- --.. / .- --.. ..- .-..";
let entrada = "Aaron";
let traduccion ="";


//TODO: ENCONTRAR FORMA DE SABER SI ES UNA CADENA EN MORSE O EN LETRAS.
const globalRegex = new RegExp(/\w+/, 'g');


if(globalRegex.test(entrada))
{
    cod = textoAMorse(texto);
    for (const letra of entrada.toLocaleUpperCase())
        traduccion +=  cod.get(letra)+" ";    

}
else
{
    cod = morseAtexto(texto);
    let arrayL = entrada.split(" ");
    for (const letra of arrayL)
        traduccion +=  cod.get(letra);    



}

console.log(traduccion);   



