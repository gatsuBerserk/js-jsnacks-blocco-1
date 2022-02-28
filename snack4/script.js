/**
 *
   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */

// Svolgimento

// inizializiamo l'array
const guests= ["Carmine", "Luca", "Maria", "Loredana", "Alessandro", "Riccardo", "Francesco", "Pietro", "Erica", "Sonia" ]; 
console.log(guests);

// Inizializiamo una costante per prendere l'input dall'utete
const userName= prompt("inserisci il nome di un'invitato: ");

//Creiamo una variabile flag inizializzandola con false
let isGuest = false;

// Creiamo il nostro ciclo for. Non deve superere gli elementi del nostro array(.lenght)
// diamo la condizione tale da far diventare isGuest = true
for (i = 0; i < guests.length; i++){
    if (guests[i] === userName ){
        isGuest= true;
    }
} 

// Se isGuest== true

if (isGuest == true){
    console.log("Il nome inserito è tra gli invitati");
} else{
    console.log("Il nome non è tra gli invitati");
}