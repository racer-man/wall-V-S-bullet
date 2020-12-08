var chiron,wall; 

var speed,weight;





function setup() {

  createCanvas(1600,400);
  
  chiron = createSprite(50, 200, 50, 50);
chiron.shapeColor = "white"
chiron.velocityX = Math.round(random(55,90));


wall = createSprite(1400,200,60,height/2);
wall.shapeColor = "green";


weight = random(400,1500)
}

function draw() {
  background("black");  
  
  if(wall.x - chiron.x < (chiron.width + wall.width)/2)
  {
    chiron.velocityX = 0;
    var wreck = 0.5 * weight * speed * speed/22509;

    if(wreck > 180)
    {
      chiron.shapeColor = "red";
    }
    if(wreck < 180 && wreck > 100)
    {
      chiron.shapeColor = "yellow";
    }
    if(wreck < 100)
    {
      chiron.shapeColor = "lime";
    }
  }
     









  drawSprites();
}