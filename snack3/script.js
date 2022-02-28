/**
 * 
   Il software deve chiedere per 10 volte all'utente di inserire un numero.
   Il programma stampa la somma di tutti i numeri inseriti.
 */


// Svolgimento 
// inizializiamo la variabile sum = 0 in modo da poterla sommare inseguito ad i numeri inseriti
let sum = 0;

// con il seguente ciclo For chiediamo all'utente ( per 10 volte) di inserire un numero
for (i= 0; i < 10; i++){
    const userNumber = parseInt(prompt("inserisci numero")); 
    // sommiamo i numeri inseriti
    sum += userNumber; 
};

console.log(sum);