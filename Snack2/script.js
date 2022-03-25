//Snack2
// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali 
// da 1 a 100. Ogni volta che ne crei uno, stampalo.


//Elenchiamo le varie funzioni richieste
// 1- Generare un numero casuale da 1 a X
// 2- Generale un array di y numeri
// 3- Generale N array con y elementi


//1 funzione: Geneare un numero casuale da 1 a X

function numeriCasuali(x){
    let numeroCasuale = Math.floor(Math.random() * x) + 1;
    return numeroCasuale
}

// Verifica funzionalità 1 funzione
console.log(numeriCasuali(100))

//2 funzione: generale un array di y numeri


function arrayY(y, x){
    let an = [] //in maniera che si azzeri ogni volta che deve generare un array
    while(an.length < y){
        an.push(`${numeriCasuali(x)}`);
       
    }
    return an
}


// Verifica funzionalità 2 funzione
console.log(arrayY(3, 100))

//creiamo il bottone per l'evento finale
let bottone = document.getElementById("bottone")

bottone.addEventListener("click",

function(){
// estraiamo i valori dai pannelli sulla pagina
let x = Number(document.getElementById("input-x").value);
let y = Number(document.getElementById("input-y").value);
let n = Number(document.getElementById("input-n").value);


let contatore = 0; //serve per azzerrare il while ogni volta che clicchi


//serve a dividere le operazioni stampate da ogni click
document.getElementById("stampa").innerHTML += `<div class="line-big"></div>` 

//stampiamo i dati inseriti a schermo
document.getElementById("stampa").innerHTML += `<span class="riga-array">${n} file composte da ${y} numeri casuali da 1 a ${x}</span>`

//serve a dividere le linee all'interno dei dati stampati nello stesso click
document.getElementById("stampa").innerHTML += `<div class="line"></div>`

//usiamo il while per stampare le righe
while(contatore < n){

// utilizziamo il for per stampare il contenuto delle righe
for(i = 0; i < y; i++){
    let stringa = arrayY(y, x);
    console.log(stringa)
    if(i < (y-1)){
     document.getElementById("stampa").innerHTML += `<span class="riga-array"> | ${stringa[i]} | </span>`}
    else {
      document.getElementById("stampa").innerHTML += `<span class="riga-array"> | ${stringa[i]} | </span>`
        document.getElementById("stampa").innerHTML += `<div class="line"></div>` 
    }
}
contatore = contatore +1;
}
}
)

// ora creiamo l'evento per pulire la pagina senza refreshare

let pulizia = document.getElementById("bottone2");

pulizia.addEventListener("click",
function(){
    document.getElementById("stampa").innerHTML += `<span class="riga-array"> | ${stringa[i]} | </span>`
}
)