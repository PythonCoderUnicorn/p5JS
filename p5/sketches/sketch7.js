
// conditional statements
// src: https://github.com/CodingTrain/website/blob/main/beginners/p5js/3.1-conditional-statements/P5/sketch.js



//---------- global variables


//-------------------- setup
function setup() {
    createCanvas(1000, 800);
    // createCanvas(windowWidth, windowHeight);
    background(0);
  }
  
  
  //-------------------- draw
  function draw() {
  
    stroke(102, 255, 51)
    stroke(3)
    noFill()
  
    if (mouseX > 300) { 
      fill(200,0,200)
    }
    ellipse(300,200,100,100)
    
  
  
  }
  