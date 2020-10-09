var myCircle = {
    x: 20,
    y: 20,
    r: 20,
    color: [149, 168, 106]
}

function setup(){
    createCanvas(400, 300);

    background(126, 106, 168);
}

function draw(){
   fill(myCircle.color);
   myCircle.y += 2;
   circle(myCircle.x, myCircle.y, myCircle.r); 

   myCircle.x += 2;
  
}
