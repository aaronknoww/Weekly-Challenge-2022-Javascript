/*
 * Reto #30
 * MARCO DE PALABRAS
 * Fecha publicación enunciado: 26/07/22
 * Fecha publicación resolución: 01/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba un texto y muestre cada palabra en una línea, formando
 * un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 *
*/


const enmarcar = (cadena) =>
{
	let string = cadena.replaceAll(/\s{2,}/g, " ");
	let palabras = string.split(" ");
	let linea = "";
	let lon = 0;

	for (let i = 0; i < palabras.length; i++)
		lon = (lon < palabras[i].length) ? palabras[i].length : lon;
		
	lon += 4; //---->Se agrega longitud para insertar asteriscos y espacio, 

	for (let i = 0; i < lon; i++) //---> dibuja marco superior ************
		linea+="*";
	console.log(linea);
	
	palabras.forEach(p => {

		p = "* "+ p;
		let rep = lon-p.length-1;  

		for (let i = 0; i < rep ; i++){
			p+=" ";			
		}
		p+="*";
		console.log(p);
		
	});
	console.log(linea);
}




let cadena = "Aaron      knoww 19";

enmarcar(cadena);
enmarcar("¿Qué te pareció el reto?");