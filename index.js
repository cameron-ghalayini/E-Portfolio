
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('I am a second year Master of Public Health Student at the University of Florida and Legislative Fellow in the Office of U.S. Representative Darren Soto') //Add your own tagline
  .pauseFor(3000)
  .start();


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
var btnModalPHE = document.getElementById("btnPHE");
var spanModalPHE = document.getElementsByClassName("closeModalPHE")[0];

btnModalPHE.onclick = function() {
  modalPHE.style.display = "block";
};

spanModalPHE.onclick = function() {
  modalPHE.style.display = "none";
};

//BUTTON for Applied Practice Experience Internship (APE)
var modalAPE = document.getElementById("modalAPE");
var btnModalAPE = document.getElementById("btnAPE");
var spanModalAPE = document.getElementsByClassName("closeModalAPE")[0];

btnModalAPE.onclick = function() {
  modalAPE.style.display = "block";
};

spanModalAPE.onclick = function() {
  modalAPE.style.display = "none";
};

// Consolidated window.onclick handler
window.onclick = function(event) {
  if (event.target == modalPHE) {
    modalPHE.style.display = "none";
  } else if (event.target == modalAPE) {
    modalAPE.style.display = "none";
  }
};
