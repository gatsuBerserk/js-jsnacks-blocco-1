/**
 * 
   L'utente inserisce due parole in successione, con due prompt.
   Il software stampa prima la parola più corta, poi la parola più lunga.
 */

const parolaUno = prompt(" inserisci la prima parola"); 
const parolaDue = prompt("inserisci la seconda parola");  

if (parolaUno.length > parolaDue.length){
    console.log(parolaDue); 
    console.log(parolaUno); 

}else if (parolaDue.length > parolaUno.length){
    console.log(parolaUno); 
    console.log(parolaDue); 
}else{
    console.log("le parole hanno lungezza uguale")
}