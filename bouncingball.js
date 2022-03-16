var balls = [];
var totalBalls = 30;
var counter = 0;

function setup() {
  createCanvas(1470, 700);
  for (var i = 0; i < totalBalls; i++) {
    balls[i] = new Ball();
  }
}

function draw() {
  background(51);
  for (var i = 0; i < totalBalls; i++){
    balls[i].show();
    balls[i].bounc();
  }

  stroke(255);
  strokeWeight(5);
  noFill();
  rect(200, 350, 1050, 40);
  
  noStroke();
  fill(255, 70);
  var w = 150 * counter / totalBalls;
  if (w >= 1050)
    w = 1050;
  rect(200, 350, w, 40);
  // if (w >= 1450) {
  //   background(0, 255, 0);
  // }
  
}
