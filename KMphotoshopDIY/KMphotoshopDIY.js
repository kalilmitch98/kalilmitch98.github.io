var img;
var initials ='km'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 60; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
img = loadImage('https://kalilmitch98.github.io/CodeImages/NewTool2.png');
// you can link to an image on your github account
//img = loadImage('https://dma-git.github.io/images/74.png');
img2 = loadImage('https://kalilmitch98.github.io/CodeImages/StarTool2.png');
img3 = loadImage('https://kalilmitch98.github.io/CodeImages/RiverTool.png');

}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    noStroke();
    fill(2, 61, 255, 20);
    ellipse(mouseX, mouseY, 60, 60);
    
  } else if (toolChoice == '2') { // second tool

    noStroke();
    fill(23, 14, 51, 15);
    ellipse(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '3') { // third tool

    noStroke();
    fill(111, 101, 106, 10);
    ellipse(mouseX, mouseY, 30, 30);
  } else if (toolChoice == '4') {

    stroke(255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
    stroke(0, 0, 255);
    testbox(40, 40, 200);
    testbox(30, 20, 20);
    
    
    
    
    // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    strokeWeight(0.25);
    stroke(193, 201, 231);
    fill(78, 69, 92);
    ellipse(mouseX, mouseY, 10, 10);
  } else if (toolChoice == '7') {

    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '8') {

    noStroke();
    fill(60, 20);
    ellipse(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '9') {

    image(img2, mouseX, mouseY);
    
  } else if (toolChoice == '0') {
   
    image(img3, mouseX, mouseY);
    tint(255, 128);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  ellipse(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
