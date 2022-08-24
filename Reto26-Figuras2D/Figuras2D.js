/*
 * Reto #26
 * CUADRADO Y TRIÁNGULO 2D
 * Fecha publicación enunciado: 27/06/22
 * Fecha publicación resolución: 07/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 *
 *
*/

// EJEMPLO
//0     *        * * * * 
//1    ***       *     *
//2   *****      *     *
//3  *******     * * * *



class Poligono
{ 
  dibujar(){}
}

class Cuadrado extends Poligono
{
    //lado--> Cantidad de asteriscos por lado.
  constructor(lado)
  {
    super();
    this.lado = lado;
       
  }
  dibujar()
  {
    let swt = true;
    let cadena = "";
    const of = "    ";
    const es = " ";
    const as = "*";


    cadena += of;
    for (let x = 0; x < this.lado*2; x++) 
    {
        cadena += (swt) ? as : es;
        swt = !swt;   
    }
    console.log(cadena);
    cadena = ""; 

    for (let y = 1; y < this.lado-1; y++)
    {
        cadena += of;
        for (let x = 0; x < this.lado*2; x++) 
            cadena += (x == 0 || x== this.lado*2-1) ? as : es;
           
        console.log(cadena);
        cadena = ""; 
               
    }

    cadena += of;
    for (let x = 0; x < this.lado*2; x++) 
    {
        cadena += (swt) ? as : es;
        swt = !swt;   
    }
    console.log(cadena);
    cadena = "";
    
  }
}


//Dibuja triangulos equilateros.
class Triangulo extends Poligono
{
  constructor(lado)
  {
    super();
    this.lado = lado;
  }
  dibujar()
  {
    let cadena = "";
    let totalEspa = this.lado * 2;

    for (let i = 0; i < this.lado; i++)
    {
      for (let e = 0; e < totalEspa; e++)
      cadena += " ";
      for (let a = 0; a < i+i+1; a++)
      cadena += "*";
      
      console.log(cadena);
      cadena = "";
      totalEspa--;            
    }



  }
}



let tri = new Triangulo(20);
let cua = new Cuadrado(4);

let poligon = new Poligono();
//poligon = tri;
tri.dibujar();
cua.dibujar();