/**
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */

const numberOne = parseInt(prompt("inserisci primo numero")); 
const numberTwo = parseInt(prompt("inserisci secondo  numero")); 

if (numberOne > numberTwo){
    console.log("il numero più grande è: " + numberOne); 
}else if (numberTwo > numberOne) {
    console.log("il numero più grande è: " + numberTwo);
}else{
    console.log("numeri uguali");
}