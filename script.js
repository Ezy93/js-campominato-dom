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
            let squareElement = document.createElement("div");
            squareElement.innerHTML = i + 1;
            squareElement.classList.add("squareElement" , "hundred");
            mineField.appendChild(squareElement);
            squareElement.addEventListener("click" , function(){
                squareElement.classList.toggle("active");
            })
        }

    }else if(selectedDifficulty.value === "intermediate"){

        for(let i = 0; i < 80; i++){
            let squareElement = document.createElement("div");
            squareElement.innerHTML = i + 1;
            squareElement.classList.add("squareElement" , "eighty");
            mineField.appendChild(squareElement);
            squareElement.addEventListener("click" , function(){
                squareElement.classList.toggle("active");
            })
        }

    }else{

        for(let i = 0; i < 50; i++){
            let squareElement = document.createElement("div");
            squareElement.innerHTML = i + 1;
            squareElement.classList.add("squareElement" , "fifty");
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


