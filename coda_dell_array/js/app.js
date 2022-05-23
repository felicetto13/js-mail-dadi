/* 
Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
Attenzione #1: quanti elementi minimo dovrà contenere l’array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
Extra Bonus
Creiamo un array chiedendo all’utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
Attenzione #3: quali controlli dobbiamo fare sull’input dell’utente?
Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo dell’array.
 */

const numeriCasuali =[22,45,22,65,88,76,34,12,3,77,98,79,5,2,39];

if(numeriCasuali.length > 5){
    for  (let i = numeriCasuali.length-1; i>((numeriCasuali.length-1)-5);i--){
        let liNum = document.createElement("li");
        liNum.append(numeriCasuali[i].toString());
        document.getElementById("elementiEstratti").prepend(liNum);
        console.log(numeriCasuali[i]);
}
}else {
    alert("Gli elementi che vuoi estrarre sono meno del numero da te richiesto");
}
