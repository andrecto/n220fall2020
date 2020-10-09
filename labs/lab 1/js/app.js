function setup() {
   var black = "#000000"
   var white = "#ffffff"

    createCanvas(800,600);
    noStroke();

    background(black);

   
    stroke(84, 80, 80);
    strokeWeight(4);
    let c = color(135, 66, 66);
    fill(c);
    rect(360, 300, 40, 300);
    let value = alpha(c); // Sets 'value' to 102
    fill(value);
    rect(400, 300, 35, 300);
    

    fill( 135, 66, 66);
    stroke(84, 80, 80);
    strokeWeight(8);
    circle(400,300,150);


    line(225, 230, 385, 300);
    line(290, 230, 330, 340);
    
    fill(white);
    stroke(black);
    circle(300,230,18);
    circle(385,290,18);


   
    triangle(450, 50, 300, 150, 525, 180);

    rect(270,150,275,55);

    stroke(59, 57, 189)
    strokeWeight(15);
    point(300, 229);
    point(385, 290);
    
    fill(black)
    stroke(59, 57, 189)
    strokeWeight(9)
    arc(250, 300, 100, 100, 0, PI + QUARTER_PI, CHORD);

    
}