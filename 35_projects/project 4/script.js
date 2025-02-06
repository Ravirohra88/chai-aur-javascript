let randomNumber = parseInt(Math.random() * 100 + 1)


const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const GuessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowORhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')
let previousGuess = []

let numberGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userinput.value)
        console.log(guess);

        validateguess(guess)
    })
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')

    } else if (guess < 1) {
        alert('please enter a number more than 1')

    }
    else if (guess > 100) {
        alert('please enter a number less than 100')

    }
    else {
        previousGuess.push(guess)
        if (numberGuess === 11) {
            displayguess(guess)
            displayMessage(`game over random no. was ${randomNumber}`)
            endgame()
        } else {
            displayguess(guess)
            check(guess)
        }
    }
}
function check(guess) {
    if (guess === randomNumber) {
        displayMessage('guessed no.was right')
        endgame()

    } else if (guess < randomNumber) {
        displayMessage("number is t0000000000000 low ")
    }
    else if (guess > randomNumber) {
        displayMessage("number is t0000000000000 high ")
    }
}
function displayguess(guess) {
    userinput.value = ''
    GuessSlot.innerHTML += `${guess}  , `;
    numberGuess++;
    remaining.innerHTML = `${10 - numberGuess}`;

}
function displayMessage(message) {
    lowORhigh.innerHTML = `<h2>${message}</h2>`
}
function endgame() {
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newgame"> start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newgame()
}

function newgame() {
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        previousGuess = []
        numberGuess = 1
        remaining.innerHTML = `${10 - numberGuess}`
        GuessSlot.innerHTML = ''
        userinput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}
