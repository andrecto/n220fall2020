// setup canvas
function setup(){
    createCanvas(400, 300);

background("#ccb8a7");

    drawFace("#ebdd4b");
    drawMouth("#875c39");

} 
//homer's face
function drawFace (homercolor){
    fill(homercolor);


    circle(200,150,100);


}
//homer's mouth
function drawMouth(mouth){
    fill(mouth);
    ellipse(200, 220, 140);
}

function draw(){
    //eyes
    fill("ffffff");
    circle(160,120,30);
    circle(240,120,30);
//pupils
    fill(0);
    circle(160,120,10);
    circle(240,120,10);

   //mouth
    line(150, 230, 250, 230);
    strokeWeight(5);
//hair
    noFill();
    arc(210, 100, 150, 130, PI + QUARTER_PI, TWO_PI);
    arc(190, 100, 120, 140, PI + QUARTER_PI, TWO_PI);


}