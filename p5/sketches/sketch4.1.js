

// random painting with mouse function

// src: https://editor.p5js.org/codingtrain/sketches/IyyJ1QYKh

//---------- global variables



//-------------------- setup
function setup() {
    // createCanvas(800, 800);
    createCanvas(windowWidth, windowHeight);
    background(0);
  }
  
  
  //-------------------- draw
  function draw() {
  
    noStroke();
    // fill(r, g, b, 100);
    fill(
      random(50, 255),
      random(50, 150),
      random(50, 255),
      100);
  
    // circle(mouseX, mouseY, diameter);
    circle(mouseX, mouseY, random(24,64));
  
  }
  
  //---------- mouse
  function mousePressed() {
    // background
  background(0)
  }