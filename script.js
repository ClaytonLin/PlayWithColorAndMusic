var sounds = {
  'q': new Howl({
    src: ['Music1.mp3']
  }),
  'w': new Howl({
    src: ['Music2.mp3']
  }),
  'e': new Howl({
    src: ['Music3.mp3']
  }),
  'a': new Howl({
    src: ['Music4.mp3']
  }),
  's': new Howl({
    src: ['Music5.mp3']
  }),
  'd': new Howl({
    src: ['Music6.mp3']
  }),
  'r': new Howl({
    src: ['Music7.mp3']
  }),
  'f': new Howl({
      src: ['Music8.mp3']
    }),
  't': new Howl({
      src: ['Music9.mp3']
    }),
  'g': new Howl({
    src: ['Music10.mp3']
  }),
};

document.addEventListener('keydown', function(event) {
  var key = event.key.toLowerCase();

  if (key in sounds) {
    // Play sound for this key
    sounds[key].play();

    // Generate a random color
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);

    // Change background color of body to the random color
    document.body.style.backgroundColor = color;

    // Change color of vertical lines to the random color
    for (var i = 0; i < verticalLines.length; i++) {
      verticalLines[i].style.backgroundColor = color;
    }
  }
});

document.addEventListener('keyup', function(event) {
  var key = event.key.toLowerCase();

  if (key in sounds) {
    // If no keys are being pressed, change background color of body back to black
    if (!document.querySelector('.playing')) {
      document.body.style.backgroundColor = 'black';

      // Change color of vertical lines back to their original colors
      for (var i = 0; i < verticalLines.length; i++) {
        var originalColor = verticalLines[i].getAttribute('data-color');
        verticalLines[i].style.backgroundColor = originalColor;
      }
    }
  }
});

let verticalLine1 = document.getElementById("verticalLine1");
let verticalLine2 = document.getElementById("verticalLine2")
let verticalLine3 = document.getElementById("verticalLine3")
let verticalLine4 = document.getElementById("verticalLine4")
let verticalLine5 = document.getElementById("verticalLine5")
let animationQ = document.getElementById("animationQ")
let animationE = document.getElementById("animationE")
let animationS1 = document.getElementById("animationS1")
let animationS2 = document.getElementById("animationS2")
let animationS3 = document.getElementById("animationS3")
let triangleUp = document.getElementById("triangle-up")
let animationG = document.getElementById("animationG")
let animationF = document.getElementById("animationF")

document.addEventListener("keydown", function(event) {
  if (event.key.toUpperCase() === "Q") {
    verticalLine1.style.background = "linear-gradient(to right, #2c0019, #2c1657)";
    verticalLine1.style.bottom = "200px"
    verticalLine2.style.top = "300px"
    verticalLine4.style.bottom = "100px"
    verticalLine1.style.animation = "verticalLineAnimationQ 4.5s linear infinite";
    verticalLine3.style.animation = "verticalLineAnimationA 2.5s linear infinite";
    animationQ.style.opacity = "100"
    const distance = Math.floor(Math.random() * 801);
    animationQ.style.left = `${distance}px`;
  }
  else if (event.key.toUpperCase() === "W"){
    verticalLine3.style.bottom = "400px"
    verticalLine5.style.animation = "verticalLineAnimationQ 3.5s linear infinite";
    animationQ.style.opacity = "0"
    animationE.style.opacity = "0"
  }
  else if (event.key.toUpperCase() === "E"){
    verticalLine3.style.bottom = "400px"
    verticalLine5.style.animation = "verticalLineAnimationQ 0.25s linear infinite;"
    animationE.style.opacity = "100"
    animationQ.style.opacity = "0"
    triangleUp.style.opacity = "0%"
  }
  else if (event.key.toUpperCase() === "A"){
    animationS1.style.opacity = "0"
    animationS2.style.width = "800px"
    animationS2.style.height = "800px"
    animationS2.style.left = "26vw"
    animationS2.style.top = "2vh"
    animationS2.style.opacity = "100"
    animationS2.style.mixBlendMode = "difference"
    animationS3.style.opacity = "0"
    verticalLine2.style.animation = "verticalLineAnimationA 3s linear infinite";
    verticalLine4.style.animation = "verticalLineAnimationA 2.5s linear infinite";
  }
  else if (event.key.toUpperCase() === "S"){
    animationS1.style.opacity = "100"
    animationS2.style.opacity = "100"
    animationS3.style.opacity = "100"
    triangleUp.style.opacity = "0%"
    verticalLine1.style.animation = "verticalLineAnimationQ 3s linear infinite";
    verticalLine5.style.animation = "verticalLineAnimationQ 2.5s linear infinite";
  }
  else if (event.key.toUpperCase() === "D"){
    animationS1.style.opacity = "0"
    animationS2.style.opacity = "0"
    animationS3.style.opacity = "0"
    triangleUp.style.opacity = "100%"
  }
  else if (event.key.toUpperCase() === "R"){
    triangleUp.style.opacity = "0"
    animationS1.style.opacity = "0"
    animationS2.style.opacity = "0"
    animationS3.style.opacity = "0"
    animationS2.style.left = "500px"
    animationS2.style.top = "500px"
  }

  else if (event.key.toUpperCase() === "F"){
    animationF.style.opacity = "100%"
  }

  else if (event.key.toUpperCase() === "Y"){
    animationY.style.opacity = "100%"
  }

  else if (event.key.toUpperCase() === "H"){
    animationH.style.opacity = "100%"
  }
  else if (event.key.toUpperCase() === "U"){
    animationU.style.opacity = "100%"
  }
  
});
