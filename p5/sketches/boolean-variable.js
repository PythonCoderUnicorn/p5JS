


//----------------------------------
// BOOLEAN VARIABLES 

// src: https://github.com/CodingTrain/website/blob/main/beginners/p5js/3.4-boolean-variables/P5/sketch.js
//-----------------------------------------


//--- global variables


//-------------------- setup
function setup() {
  createCanvas(1000, 800);
  // createCanvas(windowWidth, windowHeight);
  background(0);
}


//-------------------- draw
function draw() {

  background(0)
  stroke(102, 255, 51)
  strokeWeight(3)
  noFill()

  if (mouseX > 150) {
    ellipse(300, 200, 100, 100);
  } else if (mouseX > 150) {
    rect(300, 200, 100, 100);
  } else if (mouseX > 50) {
    line(0, 0, width, height);
  } else {
    point(300, 200);
  }

  // if statement
  // if (mouseX > 300 && mouseX < 400) { 
  //   fill(0, 153, 255)
  // }

  
  // shape
  rect(300, 200, 100, 100);
  


}