import Timer from './timer.js'
import Sounds from './sounds.js'

const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const increaseButton = document.querySelector('.increase')
const decreaseButton = document.querySelector('.decrease')

const forestButton = document.querySelector('.forest')
const rainingButton = document.querySelector('.rain')
const coffeeStoreButton = document.querySelector('.coffee-store')
const fireplaceButton = document.querySelector('.fireplace')

const timer = Timer({
  displayMinutes,
  displaySeconds,
  resetControls
})

const sounds = Sounds({
  forestButton,
  rainingButton,
  coffeeStoreButton,
  fireplaceButton
})


playButton.addEventListener('click', function() {
  playButton.classList.add('hide')
  pauseButton.classList.remove('hide')

  timer.countdown()
})

pauseButton.addEventListener('click', function() {
  resetControls()
  timer.pauseDisplay()
})

stopButton.addEventListener('click', function() {
  resetControls()
  timer.resetDisplay()
})

increaseButton.addEventListener('click', function() {
  let newMinutes = Number(displayMinutes.innerText) + 5
  timer.updateMinutesDisplay(newMinutes)
  timer.updateTotalMinutes('sum')
})

decreaseButton.addEventListener('click', function() {
  let newMinutes = Number(displayMinutes.innerText) - 5
  
  if (newMinutes > 0) {
    timer.updateMinutesDisplay(newMinutes)
    timer.updateTotalMinutes('subtraction')
  } else {
    return
  }
})

function resetControls() {
  playButton.classList.remove('hide')
  pauseButton.classList.add('hide')
}
