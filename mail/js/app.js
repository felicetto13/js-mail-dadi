/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare includes() o indexOf) */

const buttonElement = document.getElementById("submitButton");
const emailElement = document.querySelector("[name='emailPersonale']");
const emailEsistenti = ["pippo@gmail.com","mario.rossi@icloud.com","mario.rossi@gmail.com","mr1966@libero.it","pinco.pallino@outlook.com"];
let bool = "false";
buttonElement.addEventListener("click", function (){
    for( let i=0; i<emailEsistenti.length; i++){
        const emailCorrente = emailEsistenti[i];
        if ( emailCorrente == emailElement.value ){
            document.location.href="conferma.html";
            bool = "true";
        }
    }
    if (bool == "false"){
        document.getElementById("error").innerHTML = `Ci dispiace, ma l'email inserita non risulta nei nostri archivi.`
    }
})