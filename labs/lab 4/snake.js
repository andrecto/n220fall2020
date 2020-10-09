let num = 10;
let mx = [0,0,0,0,0,0,0,0,0,0];
let my = [0,0,0,0,0,0,0,0,0,0];

function setup() {
  createCanvas(800, 600);
 
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
    mx.shift();
    my.shift()
}
}

function draw() {
  background(117, 43, 115);

 
  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (let i = 0; i < num; i++) {
    let index = (which + 1 + i) % num;
    fill(111, 115, 201);
    circle(mx[index], my[index], 30);
  
  }}