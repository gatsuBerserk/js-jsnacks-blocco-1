/**
 * 
   Crea un array vuoto.
   Chiedi per 6 volte all'utente di inserire un numero,
   se è dispari inseriscilo nell'array.
 * 
 */
// Svolgimento
// Dichiariamo l'array vuoto
const numbers= []; 

//Creiamo il nostro ciclo for
for(let i = 0; i < 6; i++){
  
  // creiamo il prompt per inserire i numeri all'interno del ciclo
  const currentNumber= parseInt(prompt("inserisci numero"));
    
  // Creiamo la condizione nella quale dichiariamo quali numeri devovo riempire il nostro array 
    if (!(currentNumber % 2 === 0)){
        
      // Inseriamo i numeri nell'array
        numbers.push(currentNumber);
    }
};

console.log(numbers);