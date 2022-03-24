//Snack1
// Crea un array vuoto e chiedi all’utente un numero 
// da inserire nell’array.Continua a chiedere i numeri 
// all’utente e a inserirli nell’array fino a quando 
// la somma degli elementi è minore di 50. 

// Creiamo bottone invia
let invia = document.getElementById("bottone");

// Creiamo la variabile somma che raccogliera la somma dei numeri inseriti
let somma = 0;

// Creiamo l'evento che invia il numero
invia.addEventListener("click",

    function(){
        //Estraiamo il numero inserito dall'input
        let numeroLetto = Number(document.getElementById("numero").value);
        console.log(numeroLetto);

        //Modifichiamo somma per fare in modo che si aggiorni ad ogni click;
        somma = somma + numeroLetto;
        console.log(somma)

        // stampiamo il risultato e cambiamo la classe della luce
        if (somma >= 50){
            document.getElementById("luce").classList.add("verde")
            document.getElementById("luce").classList.remove("rossa")
            document.getElementById("istruzioni").innerHTML = `<span>Hai vinto!</span>`
        }
        
              }
                      )
