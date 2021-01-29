var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  

fixedRect=createSprite(400,200,40,20);
movingRect=createSprite(200,200,20,20);
fixedRect.shapeColor="black"
movingRect.shapeColor="black"
}




function draw() {
  background("white");  
 
 movingRect.x=World.mouseX
 movingRect.y=World.mouseY
 
 if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2||fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2||movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2||movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2){
  movingRect.shapeColor="red"
}
else{
movingRect.shapeColor="black"
} 

 
 
  drawSprites();
}