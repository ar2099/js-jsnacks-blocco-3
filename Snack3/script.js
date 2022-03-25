// Snack3
// Il software deve chiedere per 5 volte all’utente 
// di inserire un numero.Il programma stampa la somma 
// di tutti i numeri inseriti.
contatore = 0;
let somma = 0;
while (contatore < 5){
    let numero = Number(prompt("Inserisci numero"))
    if(numero != Number(numero)){
        contatore = contatore;
        alert("Valore non valido, inserisci un numero");
    } else {
        contatore = contatore +1;
        somma = somma + numero;
    }
}
console.log(somma)
document.getElementById("stampa").innerHTML = `<p>La somma dei 5 numeri è ${somma}</p>`