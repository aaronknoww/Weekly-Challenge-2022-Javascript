
class Point
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
}

const lineas = [
    [new Point(0,0),new Point(1,0), new Point(2,0)],
    [new Point(0,0),new Point(0,1), new Point(0,2)],
    [new Point(0,0),new Point(1,1), new Point(2,2)],
    [new Point(1,0),new Point(1,1), new Point(1,2)],
    [new Point(2,0),new Point(2,1), new Point(2,2)],
    [new Point(2,0),new Point(1,1), new Point(0,2)],
    [new Point(0,1),new Point(1,1), new Point(2,1)],
    [new Point(0,2),new Point(1,2), new Point(2,2)]    

];   


const posicion ={
    0: [0,1,2],
    1: [0,3],
    2: [0,4,5],
    3: [6,1],
    4: [7,5,1],
}

lineas[0].shift();
lineas[0].shift();
lineas[0].shift();
lineas[0].shift();
let num = posicion[0].at(0);
//lineas[posicion.at(0)];
lineas[num];
let res = null + true;

let matrix = [3][3];
matrix = [["1","2","3"],["4","O","O"],["","X","O"]];
let element;
for (let i = 0; i < 3; i++) 
{
    for (let j = 0; j < 3; j++) 
    {
        element = matrix[i][j];
        
        
    }
    
}

if(res)
   console.log("VERDADERO");
else
    console.log("datos");