var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var diameter = 50;
var xBallChange = 5;
var yBallChange = 5;
var xPaddle;
var yPaddle;
var paddleWidth = 100;
var paddleHeight = 25;
var started = false;
var score = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  function draw() {
    background("#18ccf0");
    xBall += xBallChange;
yBall += yBallChange;
    //ball
    fill("#ff0015");
noStroke();
ellipse(xBall, yBall, diameter, diameter);

//ball movement and constraints
if (xBall < diameter/2 || 
    xBall > windowWidth - 0.5*diameter) {
xBallChange *= -1;
}
if (yBall < diameter/2 || 
   yBall > windowHeight - diameter) {
yBallChange *= -1;
}

if ((xBall > xPaddle &&
    xBall < xPaddle + paddleWidth) &&
    (yBall + (diameter/2) >= yPaddle)) {
xBallChange *= -1;
yBallChange *= -1;
score++;
}

//paddle
if (!started) {
    xPaddle = windowWidth / 2;
    yPaddle = windowHeight - 100;
    started = true;
  }

  fill("#ffffff");
noStroke();
rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

//score
fill("#ffffff");
textSize(24);
text("Score: " + score, 10, 25);

  }

  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      xPaddle -= 50;
    } else if (keyCode === RIGHT_ARROW) {
      xPaddle += 50;
    }
  }