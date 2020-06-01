function playSound(e){
    
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) //This will bring about the animation for the key that is hit.
        if(!audio) return; //stops function from running if their is no audio concurrent with the key
        audio.currentTime = 0; //rewind to the start of the sound when you hit the key repeatedly
        audio.play() 
        key.classList.add('playing') //this will add the class when the keys are hit
    }


document.addEventListener('keydown', playSound)
function removeTransition(e){
    if(e.propertyName !== "transform") return; //skip it if its not a transform
    this.classList.remove('playing') //This will remove the CSS effects which are triggered when the keys are hit
}
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) //transitionend event is built in event like "click" or "keydown". This loop will run the function for each key