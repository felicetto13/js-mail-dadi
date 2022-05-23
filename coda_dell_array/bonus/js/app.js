/*
Creiamo un array chiedendo all’utente quanti elementi dovrà contenere 
e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
Attenzione #3: quali controlli dobbiamo fare sull’input dell’utente?
Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo dell’array. 
*/

const submit = document.getElementById("submit");
const qntNumeriArray = document.querySelector("[name='insertNumber']");
const numeriDaEstrarre = document.querySelector("[name='numeriDaEstrarre']");
const arrayNumber = [];
submit.addEventListener("click", function(){
console.log(isNaN(qntNumeriArray.value))
console.log(isNaN(numeriDaEstrarre.value))
   do{
    for (let i=0; i<qntNumeriArray.value; i++){
            const e = Math.floor(Math.random()*999);
            arrayNumber.push(e);
            let liNum = document.createElement("li");
            liNum.append(arrayNumber[i].toString());
            document.getElementById("numeri-array").append(liNum);
    }
    console.log(arrayNumber.length) 
    for (let y =(arrayNumber.length-1) ; y>(arrayNumber.length-1)-numeriDaEstrarre.value; y--){
        let liNum = document.createElement("li");
        liNum.append(arrayNumber[y].toString());
        document.getElementById("numeri-estratti").append(liNum);
}
   } while(isNaN(qntNumeriArray.value) && isNaN(numeriDaEstrarre.value))

    if(isNaN(qntNumeriArray.value) ||  isNaN(numeriDaEstrarre.value)){
        document.getElementById("error").innerHTML =`Mi dispiace! Devi completare i campi oppure devi inserire un valore numerico valido`;
    }
})