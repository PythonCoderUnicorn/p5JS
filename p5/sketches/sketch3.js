
// random circles and colors
//---------- global variables
let x, y;
let r, g, b;

//-------------------- setup
function setup() {
  createCanvas(1200, 1200);
  // createCanvas(windowHeight, windowWidth);
  background(0);
}


//-------------------- draw
function draw() {

  // circle colors
  // r = 255
  r = random(0, 255);
  g = 20
  // b = 255
  b = random(0,255)
  // x = 100
  x = random(0,600)
  // y = 100
  y = random(0,800)
  stroke(102, 255, 153)
  fill(r, g, b, 100)
  circle( x, y, 24)

}