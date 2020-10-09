let colors = [ "#f78f8f","#593a32", "#ffffff"]


function setup(){
 createCanvas(400, 200);

 background(150);


    for( var i = 0; i < colors.length; i ++) {
        fill(colors[i] );
        noStroke();
       rect(100,50*i,200,50);

 }
}