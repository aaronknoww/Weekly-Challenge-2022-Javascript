/*
 * Reto #33
 * CICLO SEXAGENARIO CHINO
 * Fecha publicación enunciado: 15/08/22
 * Fecha publicación resolución: 22/08/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un función, que dado un año, indique el elemento y animal correspondiente
 * en el ciclo sexagenario del zodíaco chino.
 * - Información: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos madera,
 *   fuego, tierra, metal, agua y los animales rata, buey, tigre, conejo, dragón, serpiente,
 *   caballo, oveja, mono, gallo, perro, cerdo (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 *
*/

// 0 y 1 Metal
// 2 y 3 Agua
// 4 y 5 Madera
// 6 y 7 Fuego
// 8 y 9 Tierra

// 1900 rata
// rata, buey, tigre, conejo, dragon, serpiente,
// caballo, oveja, mono, gallo, perro, cerdo. 


const elementos = ["Metal", "Metal", "Agua", "Agua", "Madera", "Madera", "Fuego","Fuego", "Tierra", "Tierra"];
const animales = ["Rata", "Buey", "Tigre","Conejo", "Dragon","Serpiente","Caballo", "Oveja", "Mono", "Gallo", "Perro", "Cerdo"];


let ciclos = [];
let an = 4;
for (let i = 0; i < 40; i++)
{
	ciclos[i]= an+=60;	
	
}
console.log(ciclos);

const zodiacoChino = (anio) =>{

	

	let elemento = elementos[anio % 10];
	let animal = animales[(anio%60-4)%12];

	console.log(`Tú animal es: ${animal}, Tú elemento es: ${elemento}`);
} 

zodiacoChino(2020);