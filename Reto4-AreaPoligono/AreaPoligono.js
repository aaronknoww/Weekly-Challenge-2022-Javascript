
class Poligono
{
 
  area()
  {}
}

class Triangulo extends Poligono
{
  constructor(lado, altura)
  {
    super();
    this._lado = lado;
    this._altura = altura;
  }
  area()
  {
    return (this._lado * this._altura)/2
  }
}

class Cuadrado extends Poligono
{
  constructor(lado)
  {
    super();
    this._lado = lado;
       
  }
  area()
  {
    return this._lado * this._lado;
  }
}

class Rectangulo extends Poligono
{
  constructor(lado1,lado2)
  {
    super();
    this._lado1 = lado1;
    this._lado2 = lado2;
  }

  area()
  {
    return this._lado1 * this._lado2;
  }
}

let tri = new Triangulo(10,5);
let cua = new Cuadrado(10);
let rec = new Rectangulo(10,2);

let poligon = new Poligono();
poligon = tri;

let calculaArea = (Poligono)=> Poligono.area();


console.log("El area del triangulo es: " + calculaArea(poligon));
console.log("El area del cuadrado es: " + calculaArea(cua));
console.log("El area del rectangulo es: " + calculaArea(rec));