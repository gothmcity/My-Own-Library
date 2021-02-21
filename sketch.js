var fixedRect,movingRect, box1
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  box1 = createSprite(100,200,50,50)

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (isTouching(movingRect, fixedRect)){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  } else if(isTouching(movingRect, box1)){
    movingRect.shapeColor="blue"
    box1.shapeColor="blue"

  }
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    box1.shapeColor="black"
  }

  drawSprites();
}
