
// create graphics
// src: https://editor.p5js.org/codingtrain/sketches/7RN7GFD-Y


//---------- global variables
let x = 200
let y = 200
let extraCanvas;


//-------------------- setup
function setup() {
  createCanvas(1000, 800);
  extraCanvas = createGraphics(800, 800);
  extraCanvas.clear();

  // createCanvas(windowWidth, windowHeight);
  background(0);
}


//-------------------- draw
function draw() {

  // extraCanvas
  image(extraCanvas, 0,0)

  // no trails
  background(0)

  // location of shape
  x += random(-5, 5)
  y += random(-5, 5)
  // atrrs for shape
  //fill(255,200)
  // fill(204, 51, 153) // pink
  // stroke(102, 255, 51) // lime
  // rectMode(CENTER)
  // rect(x,y,20,20, 5)

  // trails
  if (mouseIsPressed) {

    //fill(51, 51, 204) // circle for when mouse pressed
    //noStroke()
    // ellipse(mouseX,mouseY, 60 ,60)

    //-- extraCanvas
    extraCanvas.fill(54, 204); //255,150
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 60, 60);
  }

  image(extraCanvas, 0, 0);
  fill(25, 100, 0);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20, 5);

}