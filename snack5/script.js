/**
 * 
   Crea un array vuoto.
   Chiedi per 6 volte all'utente di inserire un numero,
   se è dispari inseriscilo nell'array.
 * 
 */

const numbers= []; 
console.log(number); 

 

for(i = 0; i < 6; i++){
    const currentNumber= parseInt(prompt("inserisci numero"));
    if (currentNumber % 2 == 0){
        numbers.push(currentNumber);
    }
}