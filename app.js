let btn = document.querySelector('#my_btn')
let msg1 = document.querySelector('#message1') 
let msg2 = document.querySelector('#message2') 
let msg3 = document.querySelector('#message3')

let compGuess = Math.floor(Math.random() * 100) + 1
let guessedNumbers = []
let numberOfGuesses = 0
let input = document.querySelector('#guess')


btn.addEventListener('click', playGame)

function playGame() {
 let userGuess = document.querySelector('#guess').value 

 if (userGuess < 1 || userGuess > 100) {
  alert('Please enter a number between 1 and 100')
 } else if(userGuess=== '' || isNaN(userGuess)) {
  alert('Enter only NUMBERS!!!')
  input.value = ''
  input.focus()
 }else if (userGuess < compGuess) {
  numberOfGuesses += 1
  guessedNumbers.push(userGuess)
  msg1.textContent = 'Your guess is too LOW'
  msg1.style.color = 'red'

    if(numberOfGuesses === 1) {
     msg2.textContent = 'You guessed: ' + numberOfGuesses + ' time'
    }else {
     msg2.textContent = 'You guessed: ' + numberOfGuesses + ' times'
    }

  msg3.textContent = 'Your numbers are: ' + guessedNumbers
   input.value = ''
   input.focus()
 } else if (userGuess > compGuess) {
   numberOfGuesses += 1
  guessedNumbers.push(userGuess)
  msg1.textContent = 'Your guess is too HIGH'
  msg1.style.color = 'red'

    if(numberOfGuesses === 1) {
     msg2.textContent = 'You guessed: ' + numberOfGuesses + ' time'
    }else {
     msg2.textContent = 'You guessed: ' + numberOfGuesses + ' times'
    }

  msg3.textContent = 'Your numbers are: ' + guessedNumbers
  input.value = ''
  input.focus()
 } else if (userGuess == compGuess) {
  msg1.textContent = 'You WON!!!'
  msg1.style.color = 'green'
  numberOfGuesses += 1

   if(numberOfGuesses === 1) {
     msg2.textContent = 'You guessed: ' + numberOfGuesses + ' time'
   }else {
    msg2.textContent = 'You guessed: ' + numberOfGuesses + ' times'
   }
 
  msg3.textContent = 'The winning number is: ' + userGuess
  btn.disabled = true
  btn.style.opacity = '0.5'
  input.disabled = true;
 } 

  if (numberOfGuesses >= 10) {
  msg1.textContent = 'You Lost , computer Won!!!'
  btn.disabled = true
  btn.style.opacity = '0.5'
  input.disabled = true
 }
}

let resetBtn = document.querySelector('#reset')

resetBtn.addEventListener('click', reset)

function reset() {
  guessedNumbers = []
  numberOfGuesses = 0
  input.disabled = false
  input.value = ''
  input.focus()
  msg1.textContent = ''
  msg2.textContent = 'Number of Guesses: 0'
  msg3.textContent = 'Your numbers: ' 
  btn.disabled = false
  btn.style.opacity = '1'
  compGuess = Math.floor(Math.random() * 100) + 1
}
