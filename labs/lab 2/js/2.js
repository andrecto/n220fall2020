


let a = 1;


function setup() {
  createCanvas(800, 600);
  stroke(140, 104, 212);
   strokeWeight(10)
 
  rectMode(CENTER);
}

function draw() {
  background(0);

  a = a + .01;
  s = cos(a) * 1;

  translate(width / 2, height / 2);
  scale(s);
  fill(42, 176, 102);
  circle(0, 0, 200, 1);
  
}


