/**
 *
   Chiedi un numero di 7 cifre all'utente
   e calcola la somma di tutte le cifre che compongono il numero.
   
 *
 */

// Svolgimento

// Inizializiamo una variabile che ci dia i dati inseriti dall'utente
const userNumber = prompt("inserisci un numero di 7 cifre:");

// Inizializiamo la variabile let sum = 0
let sum = 0;

// Creiamo il nostro ciclo for , il quale dovrà essere inferiore della nostra stringa 
for (let i = 0; i < userNumber.length; i++){
    // convertiamo la stringa in un numero Intero e sommiamo i suoi valori
    sum +=parseInt(userNumber.charAt(i)); 
    
}; 

console.log(sum);