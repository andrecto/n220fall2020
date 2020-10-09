let colors = [ "#de0404","#ebeb21", "#0bd64b"]


function setup(){
 createCanvas(400, 300);

 background(101, 228, 247);

 fill(148, 134, 56);
 stroke(0);
 strokeWeight(4)
 rect(170,5,60,240);


 fill("#de0404");
 noStroke();
 circle(200,35,20);


    for( var i = 1; i < colors.length; i ++) {
        fill(colors[i] );
        noStroke();
       circle(200,100*i,20);

 }
}
