/*
 * Reto #43
 * TRUCO O TRATO
 * Fecha publicación enunciado: 24/10/22
 * Fecha publicación resolución: 02/11/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Este es un reto especial por Halloween.
 * Deberemos crear un programa al que le indiquemos si queremos realizar "Truco o Trato" y
 * un listado (array) de personas con las siguientes propiedades:
 * - Nombre de la niña o niño
 * - Edad
 * - Altura en centímetros
 *
 * Si las personas han pedido truco, el programa retornará sustos (aleatorios)
 * siguiendo estos criterios:
 * - Un susto por cada 2 letras del nombre por persona
 * - Dos sustos por cada edad que sea un número par
 * - Tres sustos por cada 100 cm de altura entre todas las personas
 * - Sustos: 🎃 👻 💀 🕷 🕸 🦇
 *
 * Si las personas han pedido trato, el programa retornará dulces (aleatorios)
 * siguiendo estos criterios:
 * - Un dulce por cada letra de nombre
 * - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
 * - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
 * - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
 */


class Kid
{
    //tratoOtruco, verdadero es trato y falso estruco
    constructor(nombre = "", edad = 0, altura = 0)
    {
        this.nombre = nombre;
        this.edad = edad; 
        this.altura = altura;        
    }
    
}

const getSustos = (kids) =>{
    
    let contador = 0;
    let altTotal = 0;
    let totSustos = [];

    kids.forEach(kid => {        
        contador += Math.trunc(kid.nombre.length/2);
        if(kid.edad % 2 == 0)
            contador += 2;

        altTotal += kid.altura;        
    });

    contador += Math.trunc(altTotal/100);
    
    for (let i = 0; i < contador; i++)
        totSustos.push(sustos[Math.floor(Math.random() * 5)]);
    
    return totSustos;
}

const getDulces = (kids) =>{
    let contador = 0;
    let altTotal = 0;
    let totDulces = [];

    kids.forEach(kid => {
        contador += kid.nombre.length;
        if(kid.edad < 10)
            contador += 3;
        else
            contador = Math.trunc(kid.edad/3);
        
        altTotal += (kids.altura > 150) ? 150: kid.altura;        
    });

    contador += Math.trunc(altTotal/50);

    for (let i = 0; i < contador; i++)
        totDulces.push(dulces[Math.floor(Math.random() * 7)]);

return totDulces;
}

const tratoTruco= (kids, trato = true)=>{

    return (trato)? getDulces(kids) : getSustos(kids);
    
}

const sustos = ["🎃", "👻","💀", "🕷", "🕸", "🦇"];
const dulces = ["🍰", "🍬", "🍡", "🍭", "🍪", "🍫", "🧁", "🍩"];
const kids =[new Kid("Aaron", 38, 180), new Kid("Anita", 40, 150), new Kid("zefe", 27, 175)];

console.log(tratoTruco(kids,false));
console.log(tratoTruco(kids,true));





// let max = 15;
// let min = 5;
// let res = Math.floor(Math.random() * (max - min) + min);




