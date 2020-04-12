function setup() {
createCanvas(600,600)
}

function draw() {
background(11, 64, 73);

//hair
noStroke()
fill(194, 159, 37);
rect(110,100,360,600,200);

 //Body
noStroke();
fill(235, 218, 191);
rect(230,300,120,300);
noStroke();
fill(138, 132, 119);
rect(110, 500, 360, 600, 65);
noStroke();
fill(144,55,54);
rect(110, 560, 360, 600);
noStroke();
fill(78, 116, 151);
rect(215, 500, 150, 600);

//shirt neck
noStroke()
fill(235, 218, 191);
ellipse(290, 425, 189, 245);

//neckshadow
noStroke()
fill(227, 200, 143);
ellipse(290, 320, 300, 320);

//hair2
noStroke();
fill(194, 159, 37);
rect(130, 170, 100, 300, 600);
fill(194, 159, 37);
rect(170, 420, 60, 50);
fill(194, 159, 37);
rect(350, 170, 100, 300, 600);
fill(194, 159, 37);
rect(350, 420, 60, 50);
fill(194, 159, 37);
rect(350, 425, 60, 75);
fill(194, 159, 37);
rect(170, 420, 60, 80);

//Head
noStroke()
fill(235, 218, 191);
ellipse(290, 300, 300, 320);

//bangs
noStroke()
fill(194, 159, 37);
beginShape();
vertex(190, 210);
vertex(450, 210);
vertex(380, 150);
vertex(320, 130);
vertex(150, 168);
vertex(130, 270);
endShape();

//bangs part 2
noStroke()
fill(194, 159, 37);
beginShape();
vertex(430, 210);
vertex(190, 200);
vertex(210, 220);
vertex(230, 230);
vertex(255, 230);
vertex(290, 230);
vertex(340, 240);
vertex(382, 255);
vertex(420, 270);
vertex(440, 290);
endShape();

//eyebrow 1
noStroke()
fill(69, 55, 7);
beginShape();
vertex(185, 290);
vertex(200, 275);
vertex(210, 270);
vertex(255, 270);
vertex(260, 273);
vertex(260, 279);
vertex(255, 279);
vertex(210, 279);
endShape();

//eyebrow 2
noStroke()
fill(69, 55, 7);
beginShape();
vertex(320, 279);
vertex(330, 279);
vertex(370, 279);
vertex(400, 290);
vertex(380, 274);
vertex(370, 270);
vertex(330, 270);
vertex(323, 272);
vertex(320, 279);
endShape();

//Eyes
strokeWeight(3);
stroke(0);
fill(255);
ellipse(230,320,63,48);
strokeWeight(3);
stroke(0);
fill(255);
ellipse(350,320,63,48);

//Iris
strokeWeight(2);
stroke(23,57,70);
fill(95, 166, 192);
ellipse(230,320,40,40);
strokeWeight(2);
stroke(23,57,70);
fill(95, 166, 192);
ellipse(350,320,40,40);

//pupil
noStroke();
fill(0);
ellipse(230,320,24,24);
noStroke();
fill(0);
ellipse(350,320,24,24);
strokeWeight(1)
stroke(0);
fill(255);
ellipse(220,310,10,10);
strokeWeight(1)
stroke(0)
fill(255);
ellipse(340,310,10,10);

//eyelashes eye 1
strokeWeight(3);
stroke(0);
line(200, 290, 205, 297);
line(205, 297, 210, 300);

line(190, 290, 195, 297);
line(195, 297, 207, 305);

line(185, 295, 190, 302);
line(190, 302, 202, 310);

line(180, 300, 185, 307);
line(185, 307, 197, 315);

//eyelashes eye 2
strokeWeight(3);
stroke(0);
line(378, 310, 390, 304);
line(390, 303, 395, 296);

line(376, 305, 385, 300);
line(385, 300, 388, 296);

line(371, 300, 380, 295);
line(380, 295, 382, 293);

line(366, 298, 373, 292);

//nose
strokeWeight(2);
stroke(201,177,120);
line(300, 370, 290, 330);
line(300, 370, 290, 376);

//mouth
strokeWeight(2);
stroke(0)
line(258, 400, 275, 410);
line(275, 410, 310, 410);
line(310, 410, 320, 405);

}
