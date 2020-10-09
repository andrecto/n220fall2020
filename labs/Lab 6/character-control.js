var myCircle = {
    x: 200,
    y: 150,
    r: 20,
    color: [156, 17, 31],
    update: function (){

        fill(myCircle.color);
    circle(myCircle.x, myCircle.y, myCircle.r); 
            if (keyIsDown(LEFT_ARROW)) {
              myCircle.x -= 2;
            }
          
            if (keyIsDown(RIGHT_ARROW)) {
              myCircle.x += 2;
            }
          
            if (keyIsDown(UP_ARROW)) {
              myCircle.y -= 2;
            }

            if (keyIsDown(DOWN_ARROW)) {
                 myCircle.y += 2;
                 }


    }
}


function setup(){
    createCanvas(400, 300);
    background ([179, 179, 143],)
  
}

function draw(){
    

    myCircle.update();
}
