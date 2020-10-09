let myHat = {

    make: "birthday",
    x1: 100,
    y1: 200,
    x2: 200,
    y2: 40,
    x3: 300,
    y3: 200,
    tri_color: [169, 85, 237]
   
}

let hatDesign = {
    x: 160,
    y: 160,
    r: 15, 

    x2: 200,
    y2: 80,

    x3: 210,
    y3: 130,

    x4: 240,
    y4: 170,


    cir_color: [231, 74, 240]
}

console.log (myHat.make);

function setup() {
    createCanvas(400, 300);
    background(200);
  
}

function draw(){


    fill(myHat.tri_color);
    triangle(myHat.x1, myHat.y1, myHat.x2, myHat.y2, myHat.x3, myHat.y3);

    fill(hatDesign.cir_color);
    circle(hatDesign.x, hatDesign.y, hatDesign.r);
    circle( hatDesign.x2, hatDesign.y2, hatDesign.r);
    circle( hatDesign.x3, hatDesign.y3, hatDesign.r);
    circle( hatDesign.x4, hatDesign.y4, hatDesign.r);

    strokeWeight(3);
    line(180, 20, 220, 60);
    line(220, 20, 180, 60);
    line(170, 20, 225, 60);
    line(225, 20, 170, 60);

}