//scanner and a barcode

let colors = ["#0ef70a", "#000000","#2f00ff"]

let y = 100;


function setup() {

  createCanvas(600, 400); 

  //this is the setup for the scanner
 stroke("#d9003d"); 
  strokeWeight(5);
  frameRate(30);
}

function draw() {
  background(200); 

  //text
  textSize(30);
text('Thank You For Purchase!!!', 200, 200);


 //barcode 
  for( var i = 0; i < colors.length; i ++) {
    fill(colors[i] )
   rect(50*i,100,30,150);

}
   //scanner loop
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);


 
 

}
