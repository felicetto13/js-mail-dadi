/* 
Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?
*/

const dado =[1,2,3,4,5,6];
const submitButton = document.getElementById("buttonEstrazione");

submitButton.addEventListener("click", function(){
    let index = Math.floor(Math.random()*dado.length);
    const dadoAI = dado[index];
    index = Math.floor(Math.random()*dado.length);
    const dadoPlayer = dado[index];
    if (dadoPlayer === dadoAI) {
    alert("Pareggio! Il numero del dado era uguale per entrambi! Dado computer: "+dadoAI+"; Dado Giocatore: "+dadoPlayer);
}else if(dadoPlayer>dadoAI){
    alert("Il Giocatore ha vinto! Dado vincitore: "+dadoPlayer+"; Dado Perdente: "+dadoAI);
}else{
    alert("Mi dispiace! Il computer ha vinto! Dado vincitore: "+dadoAI+"; Dado Perdente: "+dadoPlayer);
}
})

