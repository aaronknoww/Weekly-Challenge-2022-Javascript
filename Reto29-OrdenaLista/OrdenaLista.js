/*
 * Reto #29
 * ORDENA LA LISTA
 * Fecha publicación enunciado: 18/07/22
 * Fecha publicación resolución: 26/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional
 *   "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
*/



const quickSort= (arreglo)=>// Ingresa un puntero que contiene la direccion a un arreglo.
{
	// arreglo---> Recibe un puntero a un arreglo
	// elementos-> Recibe la cantidad de elementos del arreglo que ingresa.
	
	let inicio = 0;//-------------------> Se obtine la posision inicial del arreglo.
	let fin = arreglo.length - 1;//-----> Se obtiene la posision final del arreglo.
	
	_auxQuick(arreglo, inicio, fin);

	return true;
}

const _auxQuick= (arreglo, inicio, fin) =>
{
	// arreglo-----> Recibe la direccion donde se encuentra el arreglo en el que se esta trabajando
	// inicio------> Recibe la direccion o indice en la que va iniciar el algoritmo.
	// fin---------> Recibe la direccion o indice donde termine el arreglo que se va analizar.

	if (inicio < fin)
	{
		let pivote = _ubicarPivote(arreglo, inicio, fin);

		_auxQuick(arreglo, inicio, pivote - 1);// Analiza el sub arrelgo izquierdo.
		_auxQuick(arreglo, pivote + 1, fin);// Ultimo tiene el ultimo elemento de la sub lista actual.

		

	}
	
}


const _ubicarPivote = (arreglo, inicio, fin) =>// Para ubicar el pivote el algoritmo inicia en la posicion de inicio del arreglo.
{
	// arrglo----> Recibe la direccion donde se encuentra el arreglo a ordenar.
	// inicio----> Recibe la posicion incial o direccion donde se inicia la busqueda de pivote.
	// final-----> Recibe la posicion final donde termina el arreglo el sub arreglo.
	
	let aux = 0;
	while (inicio < fin)
	{
		while (arreglo[inicio] <= arreglo[fin] && inicio < fin)
			fin--;
		aux = arreglo[inicio]; //--------> Inicia intercambio de valores
		arreglo[inicio] = arreglo[fin];
		arreglo[fin] = aux;//------------> Termina intercambio de valores.
		
		while (arreglo[inicio] < arreglo[fin] && inicio < fin)
			inicio++;
		aux = arreglo[inicio];
		arreglo[inicio] = arreglo[fin];
		arreglo[fin] = aux;
	}

	return inicio;// Inicio y fin apuntan a la misma posicion, que es donde debe de quedar el pivote.
}

const sort = (array, asc) =>
{
  quickSort(array);
  if(asc)
    return array;
  else
    return array.reverse();
  

}

let arreglo = [5,4,2,1,7,3];

console.log(sort(arreglo, true));
console.log(sort(arreglo, false));