const randomNum = Math.floor(Math.random() * 101);
const PreviousGuesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const val = parseInt(document.querySelector("#guessField").value)
const submit = document.querySelector('#subt')
submit.addEventListener('click', () => {
    if (randomNum === val) {
        console.log("correct");
        
    }

})


