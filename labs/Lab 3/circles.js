function setup(){
    createCanvas(300, 300);
}

function draw(){
    background(200);
   

    for( var i=37; i > 0; i--) {
        
        stroke(255 - (i*100));
        
        circle( 150,150, i*4);
        
        
    }
    
}