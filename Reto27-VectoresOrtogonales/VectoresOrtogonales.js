/*
 * Reto #27
 * VECTORES ORTOGONALES
 * Fecha publicación enunciado: 07/07/22
 * Fecha publicación resolución: 11/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 *
*/




class Vector
{ 
  constructor(x , y)
  {
    this.x = x;
    this.y = y;

  }
}

const areOrthogonal = (vector1, vector2) =>{

  let resultado = (vector1.x * vector2.x) + (vector1.y * vector2.y);
  return (resultado == 0) ? true : false; 
}

let v1 = new Vector(1, -3);
let v2 = new Vector(-2, 4);
let v3 = new Vector(-1, 2);
let v4 = new Vector(2, 1);

console.log(areOrthogonal(v1,v2));
console.log(areOrthogonal(v3,v4));