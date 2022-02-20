

// red dots with mouse
function setup() {
    createCanvas(800, 800);
    background(0);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(235, 64, 52);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }



