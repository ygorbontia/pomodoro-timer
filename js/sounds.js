export default function Sounds({
  forestButton,
  rainingButton,
  coffeeStoreButton,
  fireplaceButton
}) {
  const forestSound = new Audio('./assets/audios/forest.wav')
  const rainingSound = new Audio('./assets/audios/raining.wav')
  const coffeeStoreSound = new Audio('./assets/audios/coffee-store.wav')
  const fireplaceSound = new Audio('./assets/audios/fireplace.wav')

  forestSound.loop = true
  rainingSound.loop = true
  coffeeStoreSound.loop = true
  fireplaceSound.loop = true

  forestButton.addEventListener('click', function() {
    activeButton(forestButton)

    if (forestButton.classList.contains('active')) {
      enableAudioButton(forestButton)
    } else {
      disableAudioButton(forestButton)
    }
  })

  rainingButton.addEventListener('click', function() {
    activeButton(rainingButton)

    if (rainingButton.classList.contains('active')) {
      enableAudioButton(rainingButton)
    } else {
      disableAudioButton(rainingButton)
    }
  })

  coffeeStoreButton.addEventListener('click', function() {
    activeButton(coffeeStoreButton)

    if (coffeeStoreButton.classList.contains('active')) {
      enableAudioButton(coffeeStoreButton)
    } else {
      disableAudioButton(coffeeStoreButton)
    }
  })

  fireplaceButton.addEventListener('click', function() {
    activeButton(fireplaceButton)

    if (fireplaceButton.classList.contains('active')) {
      enableAudioButton(fireplaceButton)
    } else {
      disableAudioButton(fireplaceButton)
    }
  })

  function activeButton(myButton) {
    switch (myButton) {
      case forestButton:
        myButton.classList.toggle('active')
    
        rainingButton.classList.remove('active')
        coffeeStoreButton.classList.remove('active')
        fireplaceButton.classList.remove('active')
        break
      case rainingButton:
        myButton.classList.toggle('active')
    
        forestButton.classList.remove('active')
        coffeeStoreButton.classList.remove('active')
        fireplaceButton.classList.remove('active')
        break
      case coffeeStoreButton:
        myButton.classList.toggle('active')
    
        forestButton.classList.remove('active')
        rainingButton.classList.remove('active')
        fireplaceButton.classList.remove('active')
        break
      default:
        myButton.classList.toggle('active')
    
        forestButton.classList.remove('active')
        rainingButton.classList.remove('active')
        coffeeStoreButton.classList.remove('active')
    }
  }

  function enableAudioButton(myButton) {
    switch (myButton) {
      case forestButton:
        forestSound.play()
        rainingSound.pause()
        coffeeStoreSound.pause()
        fireplaceSound.pause()
        break
      case rainingButton:
        forestSound.pause()
        rainingSound.play()
        coffeeStoreSound.pause()
        fireplaceSound.pause()
        break
      case coffeeStoreButton:
        forestSound.pause()
        rainingSound.pause()
        coffeeStoreSound.play()
        fireplaceSound.pause()
        break
      default:
        forestSound.pause()
        rainingSound.pause()
        coffeeStoreSound.pause()
        fireplaceSound.play()
    }
  }

  function disableAudioButton(myButton) {
    switch (myButton) {
      case forestButton:
        forestSound.pause()
        break
      case rainingButton:
        rainingSound.pause()
        break
      case coffeeStoreButton:
        coffeeStoreSound.pause()
        break
      default:
        fireplaceSound.pause()
    }
  }
}