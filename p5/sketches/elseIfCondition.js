
//----------------------------------
// ELSE IF  COLOR FILL RECTANGLE

// src: https://github.com/CodingTrain/website/blob/main/beginners/p5js/3.3-else-elseif-and-or/P5/sketch.js
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
  
    
  
    // if statement
    if (mouseX > 300 && mouseX < 400) { 
      fill(0, 153, 255)
    }
  
    
    // shape
    rect(300, 200, 100, 100);
    
  
  
  }