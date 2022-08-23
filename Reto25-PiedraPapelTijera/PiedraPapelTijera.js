/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Fecha publicación enunciado: 20/06/22
 * Fecha publicación resolución: 27/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 *
*/

const piedra = "r";
const tijera = "s";
const papel = "p";
const nombre1 = "Player 1";
const nombre2 = "Player 2";

// Clase para crear juador, recibe nombre, R,S o P; y la posicion true player 1 false player 2.
class Player
{
    constructor(name, item, player1)
    {
        this.name = name;
        this.item = item;
        this.player1 = player1; 

    }
}
class Match
{
    constructor(p1, p2)
    {
        this.p1 = p1;
        this.p2 = p2;
    }

    winner()
    {
        if(this.p1.item == this.p2.item)
            return "Tie";
        else if (this.p1.item == "r" && this.p2.item == "s" )
            return this.p1;
        else if (this.p1.item == "r" && this.p2.item == "p" )
            return this.p2;
        else if (this.p1.item == "s" && this.p2.item == "r" )
            return this.p2;
        else if (this.p1.item == "s" && this.p2.item == "p" )
            return this.p1;
        else if (this.p1.item == "p" && this.p2.item == "r" )
            return this.p1;
        else if (this.p1.item == "p" && this.p2.item == "s" )
            return this.p2;
        else
            return "Error en los elementos de juego";
        
    }

}

// Recibe un arreglo de encuntros.
const rockScissorsPaper = (matches) =>{

    let player1 = 0;
    let player2 = 0;
    

    matches.forEach(match => {
        
        let p = match.winner();
        if(p.player1)
            player1++;
        else
            player2++;
        
    });

    if(player1 == player2)
        return "Tie";
    return (player1>player2) ? "Player 1" : "Player 2";


}

// Area de prueba

const p1 = new Player(nombre1, papel, true);
const p2 = new Player(nombre2, piedra, false);
const p3 = new Player(nombre1, tijera, true);
const p4 = new Player(nombre2, piedra, false);
const p5 = new Player(nombre1, piedra, true);
const p6 = new Player(nombre2, tijera, false);

const encuentros = [new Match(p1,p2),new Match(p3,p4), new Match(p5,p6)]; 


console.log(rockScissorsPaper(encuentros));


