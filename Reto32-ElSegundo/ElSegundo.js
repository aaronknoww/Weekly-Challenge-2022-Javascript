/*
 * Reto #32
 * EL SEGUNDO
 * Fecha publicación enunciado: 08/08/22
 * Fecha publicación resolución: 15/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un listado de números, encuentra el SEGUNDO más grande.
 * tiliza el menor número de líneas para resolver el ejercicio.
 *
*/



const elSegundo = (array) =>{

	array.sort();
	array.reverse();
	for (let i = 1; i < array.length; i++) {
		if(array[0]>array[i])
		{
			console.log(`El segundo mayor es: ${array[i]}`);
			return;
		}		
	}
	console.log(`El segundo mayor es: ${array[0]}`);
}

let array = [5,5,5,1];

elSegundo(array);