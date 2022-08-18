/*
 * Reto #18
 * TRES EN RAYA
 * Fecha publicación enunciado: 02/05/22
 * Fecha publicación resolución: 09/05/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 *
 */


// Nota: Para evaluar la matriz, primero, se tiene que ingresar al arreglo de puntos
// después con la información de los puntos se tiene que ir al arreglo de posiciones,
// el cual indica cuales líneas se tienen que evaluar.

//Ejemplo de cómo evalúa el programa. 
//PuntosEvaluar --> posición --> líneas 


class Point
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}

//Estos puntos son los que se deben evaluar para sabar si hay ganador o no.
const puntosEvaluar = [
    new Point(0,0),
    new Point(1,0),
    new Point(2,0),
    new Point(0,1),
    new Point(0,2)]



// Buscar en lineas cada punto señalado por posicion.    
const posicion ={
    0: [1,2,3],
    1: [1,4],
    2: [1,5,6],
    3: [7,2],
    4: [8,6,2],
}

            
const lineas = {
    1 : [new Point(0,0),new Point(1,0), new Point(2,0)],
    2 : [new Point(0,0),new Point(0,1), new Point(0,2)],
    3 : [new Point(0,0),new Point(1,1), new Point(2,2)],
    4 : [new Point(1,0),new Point(1,1), new Point(1,2)],
    5 : [new Point(2,0),new Point(2,1), new Point(2,2)],
    6 : [new Point(2,0),new Point(1,1), new Point(0,2)],
    7 : [new Point(0,1),new Point(1,1), new Point(2,1)],
    8 : [new Point(0,2),new Point(1,2), new Point(2,2)]    

};             


                  
            

// const ticTacToe = (matrix) =>
// {
    
    // }
    
    // Revisa que la cantidad de X y O sean las correctas.
    const testMatrix = (matrix) =>
    {
        let countX = 0;
        let countY = 0;
        
        for (let i = 0; i < 3; i++)
        {
            for (let j = 0; j < 3; j++)
            {
                if(matrix[i][j] == "X")
                countX++;
                else if (matrix[i][j] == "O")
                countY++; 
            }       
            
        }
        
        return ((Math.abs(countX-countY) < 2) && (countX>2 || countY>2)) ? true : false;
        
    }
    
    // Para encontrar si hay linea ganadora en un punto
    const findWinning = (matrix) =>{
        
        if (!testMatrix(matrix))
        return null;
        
        let lineasXY = lineas;
        let resX = false;
        let resO = false;
        let contadorX = 0;
        let contadorO = 0;
        
        for (let i = 0; i < puntosEvaluar.length; i++)
        {
            if(matrix[puntosEvaluar[i].y][puntosEvaluar[i].x] == "X") // Para evaluar los 5 puntos donde puede estar la solucion.
            {
                

                for (let j = 0; j < posicion[i].length; j++)
                {
                    let puntos = lineasXY[posicion[i].at(j)]; // ***##"$$%" Está mal esta linea no pasa cada linea
                    
                    for (let p = 0; p < puntos.length; p++) 
                    {
                        //TODO: REVISAR PORQUE LA MATRIZ ESTA ARROJANDO UN VALOR DIFERENTE AL QUE DEBE TENER EN LA CORDENADA
                        if(!(matrix[puntos[p].y][puntos[p].x]=="X") && (puntos[p] != null))
                        {
                            resX= false;
                            break;
                            
                        }
                        resX = true;
                    }
                    contadorX = (resX) ? contadorX+1 : contadorX;
                    lineasXY[posicion[i].at(j)].shift();
                    lineasXY[posicion[i].at(j)].shift();
                    lineasXY[posicion[i].at(j)].shift();
                }
                
            }
            else if(matrix[puntosEvaluar[i].y][puntosEvaluar[i].x] == "O")
            {
                for (let j = 0; j < posicion[i].length; j++)
                {
                    let puntos = lineasXY[posicion[i].at(j)]; // ***##"$$%" Está mal esta linea no pasa cada linea
                    
                    for (let p = 0; p < puntos.length; p++) 
                    {
                        //TODO: REVISAR PORQUE LA MATRIZ ESTA ARROJANDO UN VALOR DIFERENTE AL QUE DEBE TENER EN LA CORDENADA
                        if(!(matrix[puntos[p].y][puntos[p].x]=="O") && (puntos[p] != null))
                        {
                            resO=false;
                            break;
                            
                        }
                        resO = true;
                    }
                    contadorO = (resO) ? contadorO+1 : contadorO;
                    lineasXY[posicion[i].at(j)].shift();
                    lineasXY[posicion[i].at(j)].shift();
                    lineasXY[posicion[i].at(j)].shift();
                }
        }       
        
    }
    if(contadorX >= 1 && contadorO >= 1) // Si hay mas de un ganador en X u O. 
        return null;

    if(contadorX == 0 && contadorO == 0)
        return "EMPATE";
    
    if (contadorX==1) 
        return "X";
    else if (contadorO == 1) 
        return "O";
    return null;
    
}


let matrix = [3][3];
matrix = [["O","O","O"],["X","X","X"],["X","O","X"]];

console.log(findWinning(matrix));
//console.log(testMatrix(matrix));