function playsound(letter){
  switch (letter) {

    case 'w':
      tom1 = new Audio('sounds/tom-1.mp3')
      tom1.play()
      break;

    case 'a':
    tom2 = new Audio('sounds/tom-2.mp3')
    tom2.play()
    break;

    case 's':
    tom3 = new Audio('sounds/tom-3.mp3')
    tom3.play()
    break;

    case 'd':
    tom4 = new Audio('sounds/tom-4.mp3')
    tom4.play()
    break;

    case 'j':
    snare = new Audio('sounds/snare.mp3')
    snare.play()
    break;

    case 'k':
    kick = new Audio('sounds/kick-bass.mp3')
    kick.play()
    break;

    case 'l':
    crash = new Audio('sounds/crash.mp3')
    crash.play()
    break;

    default:console.log(letter)
  }
}

function animateBtn(key){
  var btn = document.querySelector('.' + key)
  btn.classList.toggle('pressed')

  setTimeout(function(){btn.classList.toggle('pressed')},100)
}

var array = document.querySelectorAll('.drum')

var soundsNames = ['sounds/tom-4.mp3', 'sounds/tom-3.mp3', 'sounds/tom-2.mp3', 'sounds/tom-1.mp3', 'sounds/snare.mp3', 'sounds/kick-bass.mp3', 'sounds/crash.mp3']


for(let i = 0; i < array.length; i++) {
  array[i].addEventListener('click', function (){
    var ButtonKeyWord =  this.innerHTML;
    playsound(ButtonKeyWord)
    animateBtn(ButtonKeyWord)
  })
}


document.addEventListener('keydown', function(event){
  playsound(event.key)
  animateBtn(event.key)
})
