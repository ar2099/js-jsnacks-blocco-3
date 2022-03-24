//Snack1
// Crea un array vuoto e chiedi all’utente un numero 
// da inserire nell’array.Continua a chiedere i numeri 
// all’utente e a inserirli nell’array fino a quando 
// la somma degli elementi è minore di 50. 

let insiemeNumeri = []
let somma = 0;
while(somma < 50) {
let numero = Number(prompt("inserisci numero"));
console.log(numero)

if(numero == "Nan") {

} else {
    insiemeNumeri.push(numero)
    }

somma = somma + numero;

if (somma >= 50){
    alert("La somma dei tuoi numeri è uguale o maggiore di 50")
}
}