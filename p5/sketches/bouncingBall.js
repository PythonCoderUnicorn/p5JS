

// BOUNCING BALL
// src: https://github.com/CodingTrain/website/blob/main/beginners/p5js/3.2-bouncing-ball/P5/sketch.js


//---------- global variables
let x = 0
let speed = 3

//-------------------- setup
function setup() {
  createCanvas(1000, 800);
  // createCanvas(windowWidth, windowHeight);
  background(0);
}


//-------------------- draw
function draw() {

  background(0)
  // stroke(102, 255, 51)
  stroke('#66ff99')
  strokeWeight(3)
  noFill()

  // shape
  ellipse(x,200,100,100)

  // if statement
  if (mouseX > 300) { 
    speed = -3;
  }

  x = x + speed
  
  


}