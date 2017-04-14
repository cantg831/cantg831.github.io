function setup() {
	// gets done once
	createCanvas(640, 480);

}

function draw() {
	// gets done over and over
	ellipse(50, 50, 80, 80);
	 if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

  
