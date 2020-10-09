let mx = 1;
let my = 1;
let easing = 0.02;
let radius = 30;
let edge = 0;
let d = int(dist(mouseX, mouseY,mouseX, mouseY));

function setup() {
  createCanvas(800, 600);
  noStroke();
  ellipseMode(RADIUS);

}

function draw() {
  background(230);

  if (abs(mouseX - mx) > 3) {
    mx = mx + (mouseX - mx) * easing;
    
  }
  if (abs(mouseY - my) > 3) {
    my = my + (mouseY - my) * easing;
  
  }

 fill(0);
 
  ellipse(mx, my, radius, radius);


 
  
  }
