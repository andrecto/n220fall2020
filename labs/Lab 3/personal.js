//personal comp of a ficional solar system.

let distances = [];
let maxDistance;
let spacer;

function setup() {
  createCanvas(800, 600);
  maxDistance = dist(width / 2, height / 2, width, height);
  for (let x = 0; x < width; x++) {
    distances[x] = []; // create nested array
    for (let y = 0; y < height; y++) {
      let distance = dist(width / 2, height / 2, x, y);
      distances[x][y] = (distance / maxDistance) * 255;
    }
  }
  spacer = 14;
  noLoop(); // Run once and stop
}




function draw(){
    background(0);
    
    for (let x = 0; x < width; x += spacer) {
        for (let y = 0; y < height; y += spacer) {
          stroke(distances[x][y]);
          point(x + spacer / 3, y + spacer / 4);
        }

        // depth is shown with the array of fading stars as the universe is infinietly expanding.

    fill(250, 214, 70);
    stroke(255, 43, 43);
    strokeWeight(8)
    circle(100,200,200);
    //sun is yellow and red

 
    for( var i=0; i < 8; i++) {
        
       
        fill(207, 111, 78);
        stroke(51, 32, 32);
        strokeWeight(5)
        circle( i*100,300, 20);
       
      //planets are mars like shows by red and browm

     
        
        
    }
}

}
