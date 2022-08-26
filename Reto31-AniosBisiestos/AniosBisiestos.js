/*
 * Reto #31
 * AÑOS BISIESTOS
 * Fecha publicación enunciado: 01/08/22
 * Fecha publicación resolución: 08/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que imprima los 30 próximos años bisiestos siguientes a uno dado.
 * - Utiliza el menor número de líneas para resolver el ejercicio.
 *
*/


let bisiestos = [];

let anio=1900;

for (let i = 0; i < 31; i++) {
	
	bisiestos[i] = anio;
	anio+=4;
}


console.log(bisiestos);

const imprimeBisiestos = (anio) =>{

	if(anio%4 != 0)
	{
		console.log("No es bisiesto");
		return;
	}
	let a = anio;
	for (let i = 0; i < 30; i++)
		console.log(a+=4);		
	

}

imprimeBisiestos(2024);