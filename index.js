var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('I am a second year Master of Public Health Student at the University of Florida and Legislative Fellow in the Office of U.S. Representative Darren Soto') //Add your own tagline
  .pauseFor(3000)
  .start()


var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: 'assets/capitol2.jpg', //change image for intro section if desired
        blendingMode: 'multiply',
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 8000
        }
    }
});

//BUTTON for Public Health Experience (PHE)
var modalPHE = document.getElementById("modalPHE");

// Get the button that opens the modal
var btnModalPHE = document.getElementById("btnPHE");

// Get the <span> element that closes the modal
var spanModalPHE = document.getElementsByClassName("closeModalPHE")[0];

// When the user clicks on the button, open the modal
btnPHE.onclick = function() {
  modalPHE.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalPHE.onclick = function() {
  modalPHE.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalPHE) {
    modalPHE.style.display = "none";
  }
}

//BUTTON for Applied Practice Experience Internship (APE)
var modalAPE = document.getElementById("modalAPE");

// Get the button that opens the modal
var btnModalAPE = document.getElementById("btnAPE");

// Get the <span> element that closes the modal
var spanModalAPE = document.getElementsByClassName("closeModalAPE")[0];

// When the user clicks on the button, open the modal
btnModalAPE.onclick = function() {
  modalAPE.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalAPE.onclick = function() {
  modalAPE.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalAPE) {
    modalAPE.style.display = "none";
  }
}

//BUTTON 3 -- links to outside website
var btn3 = document.getElementById("btn3");
btn3.onclick = function() { 
  window.open("https://www.nintendo.com", "_blank") //TODO add your link
}

//BUTTON 4
var modal4 = document.getElementById("modal4");

// Get the button that opens the modal
var btnModal4 = document.getElementById("btn4");

// Get the <span> element that closes the modal
var spanModal4 = document.getElementsByClassName("closeModal4")[0];

// When the user clicks on the button, open the modal
btnModal4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}

//BUTTON 5
var modal5 = document.getElementById("modal5");

// Get the button that opens the modal
var btnModal5 = document.getElementById("btn5");

// Get the <span> element that closes the modal
var spanModal5 = document.getElementsByClassName("closeModal5")[0];

// When the user clicks on the button, open the modal
btnModal5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModal5.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}

//BUTTON 6 -- links to outside website
var btn6 = document.getElementById("btn6");
btn6.onclick = function() { 
  window.open("https://www.arduino.cc", "_blank") //TODO add your link
}

//HOBBY MODALS

//BUTTON HOBBY 1
var modalHobby1 = document.getElementById("modalHobby1");

// Get the button that opens the modal
var btnHobby1 = document.getElementById("hobbyBtn1");

// Get the <span> element that closes the modal
var spanModalHobby1 = document.getElementsByClassName("closeModalHobby1")[0];

// When the user clicks on the button, open the modal
btnHobby1.onclick = function() {
  modalHobby1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalHobby1.onclick = function() {
  modalHobby1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHobby1) {
    modalHobby1.style.display = "none";
  }
}

//BUTTON HOBBY 2
var modalHobby2 = document.getElementById("modalHobby2");

// Get the button that opens the modal
var btnHobby2 = document.getElementById("hobbyBtn2");

// Get the <span> element that closes the modal
var spanModalHobby2 = document.getElementsByClassName("closeModalHobby2")[0];

// When the user clicks on the button, open the modal
btnHobby2.onclick = function() {
  modalHobby2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalHobby2.onclick = function() {
  modalHobby2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHobby2) {
    modalHobby2.style.display = "none";
  }
}

//BUTTON HOBBY 3
var modalHobby3 = document.getElementById("modalHobby3");

// Get the button that opens the modal
var btnHobby3 = document.getElementById("hobbyBtn3");

// Get the <span> element that closes the modal
var spanModalHobby3 = document.getElementsByClassName("closeModalHobby3")[0];

// When the user clicks on the button, open the modal
btnHobby3.onclick = function() {
  modalHobby3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalHobby3.onclick = function() {
  modalHobby3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHobby3) {
    modalHobby3.style.display = "none";
  }
}

//BUTTON HOBBY 4
var modalHobby4 = document.getElementById("modalHobby4");

// Get the button that opens the modal
var btnHobby4 = document.getElementById("hobbyBtn4");

// Get the <span> element that closes the modal
var spanModalHobby4 = document.getElementsByClassName("closeModalHobby4")[0];

// When the user clicks on the button, open the modal
btnHobby4.onclick = function() {
  modalHobby4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalHobby4.onclick = function() {
  modalHobby4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHobby4) {
    modalHobby4.style.display = "none";
  }
}

//BUTTON HOBBY 5
var modalHobby5 = document.getElementById("modalHobby5");

// Get the button that opens the modal
var btnHobby5 = document.getElementById("hobbyBtn5");

// Get the <span> element that closes the modal
var spanModalHobby5 = document.getElementsByClassName("closeModalHobby5")[0];

// When the user clicks on the button, open the modal
btnHobby5.onclick = function() {
  modalHobby5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalHobby5.onclick = function() {
  modalHobby5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHobby5) {
    modalHobby5.style.display = "none";
  }
}

//BUTTON HOBBY 6
var modalHobby6 = document.getElementById("modalHobby6");

// Get the button that opens the modal
var btnHobby6 = document.getElementById("hobbyBtn6");

// Get the <span> element that closes the modal
var spanModalHobby6 = document.getElementsByClassName("closeModalHobby6")[0];

// When the user clicks on the button, open the modal
btnHobby6.onclick = function() {
  modalHobby6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanModalHobby6.onclick = function() {
  modalHobby6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalHobby6) {
    modalHobby6.style.display = "none";
  }
}
