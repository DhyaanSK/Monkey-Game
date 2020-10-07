
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var group;
var Play = 1
var End = 0
var gameState = Play
var time = 0
function preload(){
  

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(400,310);
  monkey = createSprite(50,280,170,20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.06;

   ground = createSprite(400,350,900,100);
  bananaGroup = new Group();
obstacleGroup = new Group();
}


function draw() {
background("white");
  
  ground.velocityX = -4
  
  
  if(gameState===Play){
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12
  
  }
  monkey.velocityY = monkey.velocityY + 0.8
}else if(gameState===End){
  textSize(24)
  text("Game Over",150,150)
  score = 0;
  obstacleGroup.destroyEach();
  bananaGroup.destroyEach();
  monkey.destroy();
  ground.velocityX=0;
  score.destroy();
}
  if(monkey.isTouching(obstacleGroup)){
    obstacleGroup.destroyEach();
    gameState = End;
  }
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    
  }
  
  stroke("white")
  textSize(20);
  score = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ score, 200,20 );
  
  monkey.collide(ground);
  bananas();
  obstacles();
  drawSprites();

}
function obstacles(){
if(frameCount%110===0){
   
   
   
  
 obstacle = createSprite(400,285,25,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-6;
  obstacle.scale=0.1
  obstacle.lifetime = 65;
   
  
   
   obstacleGroup.add(obstacle)
   
   
   
   
}

}
function bananas(){
if(frameCount%80===0){
   
   
   
  
   banana= createSprite(400,Math.round(random(150,200)),25,20);
  banana.addImage(bananaImage);
  banana.velocityX=-6;
  banana.scale=0.1
  banana.lifetime = 65;
   
  
   
   bananaGroup.add(banana)
   
   
   
   
   }

}