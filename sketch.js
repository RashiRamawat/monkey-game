
var monkey , monkey_running
var BANANA ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstaclesGroup
var score
var survival=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
    //createCanvas(600, 600);  
    
  MONKEY=createSprite(100,250,50,50);
  MONKEY.addAnimation("moving",monkey_running);
  MONKEY.scale=0.1;
  
  ground=createSprite(0,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
 
  
  
  bananaGroup=createGroup()
  obstaclesGroup=createGroup()
}


function draw() {
   background("white")
 if(keyDown("space")){
    MONKEY.velocityY=-4;
  }
   MONKEY.velocityY = MONKEY.velocityY + 0.1
 
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if (MONKEY.isTouching(obstaclesGroup)){
    ground.velocityX=0;
    bananaGroup.setVelocityXEach(0)
    obstaclesGroup.setVelocityXEach(0)
    MONKEY.velocityY=0;
    
  }
   stroke("white")
  textSize(20)
  fill("white")
  
  stroke("black")
  textSize(20)
  fill("black")
  survival=Math.ceil(frameCount/frameRate())
  text("survival"+survival,100,50);
  
  MONKEY.collide(ground);
 
  Banana()
  spwanObstacles()
  drawSprites();
  
}
 function Banana(){
  
if(frameCount%80===0){
   BANANA=createSprite(500,200,20,20)
   BANANA.addImage(bananaImage)
  BANANA.velocityX=-5;
  BANANA.y=Math.round(random(120,200))
   BANANA.scale=0.1;
  BANANA.lifetime=100;
bananaGroup.add(BANANA)
}
 }
function spwanObstacles(){
 if (frameCount % 300 === 0){
   obstacle = createSprite(600,320,10,40);
    obstacle.addImage(obstacleImage)          
    obstacle.velocityX=-5;
   obstacle.scale = 0.2;
    obstacle.lifetime = 100;
    obstaclesGroup.add(obstacle);
 }
}





