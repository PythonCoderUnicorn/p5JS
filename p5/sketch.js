
// cmd + /     = comments



//----------------------------------
//  WHILE & FOR LOOP

// src: https://github.com/CodingTrain/website/blob/main/beginners/p5js/4.1-while-for/P5/sketch.js

//-----------------------------------------


//--- global variables
// let x = 0;

//-------------------- setup
function setup() {
  createCanvas(1000, 800);
  // createCanvas(windowWidth, windowHeight);
  //background(0);
}


//-------------------- draw
function draw() {

  background(0)
  stroke(102, 255, 51)
  strokeWeight(3)
  noFill()

  // local var
  var x = 0;

  //-------- while loop
  while (x <= width) {
    ellipse(x, 200, 25, 25);
    x = x+50
  }

  // for loop
  for (var x = 0; x <= width; x += 50){
    fill(255, 20, 200)
    ellipse(x,300,25,25)
  }
  


}
// draw


//---------- mouse
