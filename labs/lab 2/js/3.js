function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(121, 119, 125)
    circle( mouseX,mouseY,30)
  
  
    if(mouseX < 200){
        fill(52, 76, 235)
    }

    if( mouseX> 200){
        fill( 235, 52, 52)
    }
}