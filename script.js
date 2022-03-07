/* Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro. */

let selectedDifficulty = document.getElementById("difficultySelector");
let mineField = document.getElementById("field");
let button = document.getElementById("playButton");
let resetButton = document.getElementById("resetButton");
let squareElement = "";

button.addEventListener("click" , function(){
    
    
    resetButton.classList.remove("d-none")
    if(selectedDifficulty.value === "easy"){

        for(let i = 0; i < 100; i++){
            squareElement = document.createElement("div");
            squareElement.innerHTML = i + 1;
            squareElement.classList.add("squareElement" , "hundred", "d-flex", "align-items-center", "justify-content-center");
            squareElement.style.width = `calc(100% / ${squareRoot(100)})`
            squareElement.style.height = `calc(100% / ${squareRoot(100)})`
            mineField.appendChild(squareElement);
            squareElement.addEventListener("click" , function(){
                squareElement.classList.toggle("active");
            })
        }

    }else if(selectedDifficulty.value === "intermediate"){

        for(let i = 0; i < 81; i++){
            let squareElement = document.createElement("div");
            squareElement.innerHTML = i + 1;
            squareElement.classList.add("squareElement" , "eighty", "d-flex","align-items-center", "justify-content-center");
            squareElement.style.width = `calc(100% / ${squareRoot(81)})`
            squareElement.style.height = `calc(100% / ${squareRoot(81)})`
            mineField.appendChild(squareElement);
            squareElement.addEventListener("click" , function(){
                squareElement.classList.toggle("active");
            })
        }

    }else{

        for(let i = 0; i < 49; i++){
            let squareElement = document.createElement("div");
            squareElement.innerHTML = i + 1;
            squareElement.classList.add("squareElement" , "fifty", "d-flex", "align-items-center", "justify-content-center");
            squareElement.style.width = `calc(100% / ${squareRoot(49)})`
            squareElement.style.height = `calc(100% / ${squareRoot(49)})`
            mineField.appendChild(squareElement);
            squareElement.addEventListener("click" , function(){
                squareElement.classList.toggle("active");
            })
        }

    }
});



resetButton.addEventListener("click", function(){
    window.location.reload()
})

function squareRoot(number){
    return Math.sqrt(number);
}

/* Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
    - abbiamo calpestato una bomba
    - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b. */


