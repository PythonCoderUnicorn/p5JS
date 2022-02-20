

//---- horizontal ellipse color mapping
// map() 
// map( mouseX, min, max, min, max)

//---------- global variables
let r = 0;
let b = 255;


//-------------------- setup
function setup() {
  createCanvas(1000, 800);
  // createCanvas(windowWidth, windowHeight);
  background(0);
}


//-------------------- draw
function draw() {

  // background
  r = map(mouseX, 10, 600, 0, 255);
  b = map(mouseX, 10, 600, 255, 0);
  background(r, 0, b);
  
  // ellipse
  fill(250, 118, 222);
  ellipse(mouseX, 300, 64, 64);

}