var f,m;
function setup() {
  createCanvas(800,400);
  f=createSprite(400, 200, 50, 50);
  m=createSprite(400,100,60,80);
  f.shapeColor="red";
  m.shapeColor="green";
}

function draw() {

  background("orange"); 
 m.x=mouseX;
 m.y=mouseY;
 if (m.x-f.x<f.width/2+m.width/2
   && f.x-m.x<f.width/2+m.width/2
   &&m.y-f.y<f.height/2+m.height/2
   &&f.y-m.y<f.height/2+m.height/2) {
   m.shapeColor="black";
 } 
 else{
   m.shapeColor="green";
 }
  drawSprites();
}