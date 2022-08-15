

console.log("\n PROGRAMA PARA SEBER SI 2 PLABRAS SON ANAGRAMAS\n");

let Word1 = "CADena1";
//let Word1 = 18;
let Word2 = "CADena1"


const isAnagrama = (Word1, Word2)=>
{   
    Word1=Word1.toString();
    Word1=Word1.toLocaleLowerCase();
    Word2=Word2.toString();
    Word2=Word2.toLocaleLowerCase();
    
    if(Word1==Word2)
        return false;

    let a1 = Array.from(Word1);
    let a2 = Array.from(Word2);
    a1=a1.sort();
    a2=a2.sort();
    if(a1.toString()==a2.toString())
        return true;     
    return false;
}

console.log(isAnagrama(Word1,Word2));