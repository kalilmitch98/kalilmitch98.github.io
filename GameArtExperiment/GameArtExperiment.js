var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;

function preload() {
  img = loadImage('https://kalilmitch98.github.io/CodeImages/StarChaseTool.png');
  img2 = loadImage('https://kalilmitch98.github.io/CodeImages/MoonPhase1.jpg');
  img3 = loadImage('https://kalilmitch98.github.io/CodeImages/MoonPhase2.jpg');
  img4 = loadImage('https://kalilmitch98.github.io/CodeImages/MoonPhase3.jpg');
  img5 = loadImage('https://kalilmitch98.github.io/CodeImages/MoonPhase4.jpg');
  img6 = loadImage('https://kalilmitch98.github.io/CodeImages/MoonPhase5.jpg');
  img7 = loadImage('https://kalilmitch98.github.io/CodeImages/MoonPhase6.jpg');
  img8 = loadImage('https://kalilmitch98.github.io/CodeImages/MoonPhase7.jpg');
  img9 = loadImage('https://kalilmitch98.github.io/CodeImages/MoonPhase8.jpg');
  img10 = loadImage('https://kalilmitch98.github.io/CodeImages/NASAstars.jpg');
} // end preload

function setup() {
  createCanvas(900, 700);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(0);
  
  levelOne();
  
  text(("Phasing: " + score), width/2, 40);
  fill(255);
  

} // end draw


function levelOne(){
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>2){
// level 2
  image(img2, 5, 300);
 text("Shadow Time", width/2, 350);
 fill(255);
  }
  if(score>5){
    image(img3, 80, 220);
    text("Waking out of Hibernation", width/2, 380);
    fill(255);
  }
  if(score>8){
    image(img4, 170, 160);
    text("In Balance", width/2, 410);
    fill(255);
  }
  if(score>11){
   image(img5, 270, 130);
   text("Receiving", width/2, 440);
   fill(255);
  }
  if(score>14){
    image(img6, 370, 115);
    text("Radiating Wholeness", width/2, 470);
    fill(255);
  }
  if(score>17){
    image(img7, 470, 130);
    text("I am full", width/2, 500);
    fill(255);
  }
  if(score>20){
    image(img8, 570, 160);
    text("I say goodbye", width/2, 530);
    fill(255);
  }
  if(score>23){
    image(img9, 670, 220);
    text("Storing the Light", width/2, 560);
    fill(255);
  }
  if(score>26){
    image(img2, 770, 300);
    text("For Another Time", width/2, 590);
    fill(255);
  }
  if(score>28){
    image(img10, 0, 0);
  }
  //line(ballx, bally, mouseX, mouseY);
  image(img, ballx-ballSize/2, bally-ballSize/2);
} // end level one
