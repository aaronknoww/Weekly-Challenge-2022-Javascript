/* * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
* - Los signos de puntuación no forman parte de la palabra.
* - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
* - No se pueden utilizar funciones propias         del lenguaje que lo resuelvan automáticamente.
*/

let Enunciado = "Crea, un programa que cuente   **--!!**/-/  cuantas veces se repite cada cada cada palabra, es solo un ejemplo de palabras";

class ContarPalabaras
{
    constructor(texto)
    {
        this.cadena = texto;
    }

    //Se encarga de quitar espacios y signos de puntuacion y caracteres que no sean letras.
    formatearCadena()
    {
        let cadFinal = "";
        cadFinal = this.cadena.toLocaleLowerCase();
        cadFinal = cadFinal.replaceAll(/\W+/g," ");
        cadFinal = cadFinal.replace(/\s{2,}/, " ");
        
        return cadFinal;
    }
    
    resultado()
    {
        this.cadena = this.formatearCadena();
        let arreglo = this.cadena.split(" ");
        arreglo.sort();
        let objetos = [];
        let mapa = new Set(arreglo);
        
        
      
        for (const cad of mapa)
        {
            let cantidad = 0;
            for (let i = 0; i < arreglo.length; i++)
            {
                if (cad==arreglo[i])                            
                    cantidad++;                              
            }
            objetos.push({cad,cantidad});                               
                          
        }

        return objetos;       

    }
    
    

}

let cont= new ContarPalabaras(Enunciado);

let obj = cont.resultado();

console.log({obj});
