/*
 * Reto #39
 * TOP ALGORITMOS: QUICK SORT
 * Fecha publicación enunciado: 27/09/22
 * Fecha publicación resolución: 03/10/22
 * Dificultad: MEDIA
 *
 * Enunciado: Implementa uno de los algoritmos de ordenación más famosos: el "Quick Sort",
 * creado por C.A.R. Hoare.
 * - Entender el funcionamiento de los algoritmos más utilizados de la historia nos ayuda a
 *   mejorar nuestro conocimiento sobre ingeniería de software. Dedícale tiempo a entenderlo,
 *   no únicamente a copiar su implementación.
 * - Esta es una nueva serie de retos llamada "TOP ALGORITMOS", donde trabajaremos y entenderemos
 *   los más famosos de la historia.
 *
 *
 */

// DIRECCION DE YOUTUBE DONDE EXPLICAN EL FUNCIONAMIENTO DEL ALGORITMO
// https://youtu.be/YzHDIvxOQcI


// ||||||||||||||||||||||||||||||||||||||||||
// ***** FUNICIONES AUXILIARES **************
// ||||||||||||||||||||||||||||||||||||||||||


// Ubicar Pivote es la parte más impotante de este algoritmo.
const ubicarPivote = (sublista, ini, fin) =>{

    let p = ini;
    let aux = 0;

    while (ini < fin)
    {
        while ((sublista[p]<= sublista[fin] && (ini < fin))) 
            fin--;
        aux = sublista[fin];
        sublista[fin] = sublista[p];
        sublista[p] = aux;
        p = fin;
    
        while ((sublista[p]>= sublista[ini]) && (ini < fin)) 
            ini++;
        aux = sublista[ini];
        sublista[ini] = sublista[p];
        sublista[p] = aux;
        p = ini;
    
    }
    return ini;
}
const subQS = (sublista, ini, fin) =>{

    if(ini>=fin) // CASO BASE
        return;
    
    let pivote = ubicarPivote(sublista, ini, fin);
    subQS(sublista, ini, pivote-1); // ordena parte izquierda
    subQS(sublista, pivote + 1, fin); // ordena parte derecha
}

// ||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||


// Ordena por este metodo.
const quickSort = (numeros) =>{
       
    if(numeros.length < 2)
        return;

    subQS(numeros, 0, numeros.length-1);
    return;   

}

let numeros = [5,3,10,4,7,4,8,-2,1,1];
quickSort(numeros);
console.log(numeros);