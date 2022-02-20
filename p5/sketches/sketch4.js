

// random painting with mouse function

// src: https://editor.p5js.org/codingtrain/sketches/stERy5a1D

//---------- global variables
let r = 255;
let g = 255;
let b = 255;
let diameter = 32;


//-------------------- setup
function setup() {
  createCanvas(800, 800);
  // createCanvas(windowHeight, windowWidth);
  background(0);
}


//-------------------- draw
function draw() {

  noStroke();
  fill(r, g, b, 100);
  circle(mouseX, mouseY, diameter);

}

//---------- mouse
function mousePressed() {
  // background
  r = random(100,255);
  g = random(100, 255);
  b = random(100, 255);
  diameter = random(16, 64);
}