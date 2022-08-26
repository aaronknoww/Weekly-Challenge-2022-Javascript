/*
 * Reto #34
 * LOS NÚMEROS PERDIDOS
 * Fecha publicación enunciado: 22/08/22
 * Fecha publicación resolución: 29/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, crea una función que calcule
 * y retorne todos los que faltan entre el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 *
*/


const numerosPerdidos = (array) =>{

	array.sort(function (a, b) {
		return a - b;
	  });

	let faltantes = [];

	for (let i = 0; i < array.length-1; i++) 
		if(array[i] == array[i+1])
			throw new ("ARREGLO INCORRECTO");
			
	let ini = array[0];
	let fin = array[array.length-1];
	let iter = 0;
	while(ini != fin)
	{
		if(array[iter] != ini)
		{
			faltantes.push(ini);
		}
		else
		{
			iter++;
		}

		ini++;
	}
	
	console.log(faltantes);

}

let arreglo = [15,5,8];
console.log(arreglo);
numerosPerdidos(arreglo);