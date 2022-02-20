
// random 

// random square and color
//-- global variables
// cmd + /     = comments

// let squareSize = 150;
let squareSize;
//let lineWidth = 4;


function setup() {
  createCanvas(800, 800);
  background(0);
  //squareSize = random(50, 400);
}

function draw() {
  lineWidth = random(4, 28);
  squareSize = random(5, 250);
  rectMode(CENTER);
  strokeWeight(lineWidth); // var above

  stroke(153, 255, 51); // lime
  fill(153, 51, 255); // purple
  square(400, 350, squareSize); // location of square

}