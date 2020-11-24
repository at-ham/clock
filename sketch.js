var hr,ms,sc;
var hrA,msA,scA;


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}
function draw() {
  background(255,255,255);  
  translate(200,200);
  rotate(-90);
  hr=hour();
  ms=minute();
  sc=second();
hrA=map(hr%12,0,12,0,360);
msA=map(ms,0,60,0,360);
scA=map(sc,0,60,0,360);

push();
rotate(hrA);
stroke (0,0,255);
strokeWeight(7);
line (0,0,50,0);
pop();

push();
rotate(msA);
stroke (0,255,0);
strokeWeight(7);
line (0,0,75,0);
pop();

push();
rotate(scA);
stroke (255,0,0);
strokeWeight(7);
line (0,0,100,0);
pop();

stroke(255,0,255);
point(0,0);

strokeWeight(10);
noFill();
stroke (0,0,255);
arc (0,0,260,260,0,hrA);

stroke (0,255,0);
arc (0,0,280,280,0,msA);
stroke (255,0,0);
arc (0,0,300,300,0,scA);
}