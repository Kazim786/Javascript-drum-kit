document.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) //This will bring about the animation for the key that is hit.
    if(!audio) return; //stops function from running if their is no audio concurrent with the key
    audio.currentTime = 0; //rewind to the start of the sound when you hit the key repeatedly
    audio.play() 
    key.classList.add('play') //this will add the class when the keys are hit
})