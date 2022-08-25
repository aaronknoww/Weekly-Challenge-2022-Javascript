/*
 * Reto #28
 * MÁQUINA EXPENDEDORA
 * Fecha publicación enunciado: 11/07/22
 * Fecha publicación resolución: 18/07/22
 * Dificultad: MEDIA
 *
 * Enunciado: Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección del producto.
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor
 *   número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje
 *   y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 *
 *
*/



const monedas = [5, 10, 50, 100, 200];
class Producto
{ 
  constructor(id, nombre, precio)
  {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const p1 = new Producto(1,"Agua", 50);
const p2 = new Producto(2,"Coca-Cola", 100);
const p3 = new Producto(4,"Cerveza", 155);
const p4 = new Producto(5,"Pizza", 200);
const p5 = new Producto(10, "donas", 75);

let inventario = [p1, p2, p3, p4, p5];

const revisarMoneda = (array) =>{
  
  let valido = true;
  
  for (let i = 0; i < array.length; i++){
    
    for (let m = 0; m < monedas.length; m++)
    {
        if(array[i] == monedas[m])
        { 
            valido = true
            break;
        }
        valido = false;

    }
  }

  return valido;


}

const buscarProducto = (id) =>{

  for (let p = 0; p < inventario.length; p++)
  {
    if(id == inventario[p].id)
      return true;   
    
  }
  return false;
}
const converirMonedas = (dinero) =>{

  let resultado = [];
  if(dinero == 0)
    return resultado;

  let restante = dinero;
  let ultimo = monedas.length -1;
  let i = 0;
  do
  {
    if(restante / monedas[ultimo] >= 1)
    {
      resultado[i] = monedas[ultimo];
      restante -= monedas[ultimo];
      i++;      
    }
    else
    {
      ultimo--;
    }

    
  } while (restante != 0);
  
  return resultado;

}
const venta = (dinero, idProducto) =>{

  
  if(!revisarMoneda(dinero))
     throw new ("Hay al menos una moneda falsa ");
  if(!buscarProducto(idProducto))
     throw new ("Ese producto no existe");
    

  let total = dinero.reduce((anterior, actual) => anterior+actual);
  let producto = inventario.find((pro)=> idProducto == pro.id);

  if(producto.precio > total)
    throw new ("Dinero insuficiente");
  
  let resto = total - producto.precio;

   return [converirMonedas(resto), producto.id];
  
}


let dinero = [5,10,50,200];

let entrega = venta(dinero, 5);

console.log(`Tu producto es ${entrega[1]}`);
console.log(`Tu camibio son las monedas: ${entrega[0]}`);