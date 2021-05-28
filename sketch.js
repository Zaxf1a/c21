function setup() {
  createCanvas(1200,800);
  a = createSprite(400, 200, 50, 50);
  a.velocityY = 8 
  b = createSprite(400,600,30,30)
  b.velocityY = -8
}

function draw() {
  background(255,255,255); 
  

  if(a.y-b.y<a.height/2+b.height/2&&b.y-a.y<b.height/2+a.height/2) {
    a.velocityY = a.velocityY*(-1)
    b.velocityY = b.velocityY*(-1)
   }
  
  
  drawSprites();
}