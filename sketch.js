var bananaImage,bananaGroup,obstaclesImage,obstaclesGroup,score,monkey,monkeyImage,invisibleGround,obstacles,banana;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
//monkeyImage = loadImage();
}
function setup() {
  createCanvas(500,300);
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  score = 0;
  monkey = createSprite(20,240,20,20);
  invisibleGround = createSprite(250,271,500,5);
}

function draw() {
  background(255);
  stroke("black");
  fill("black");
  textSize(15);
   text("Survival Time: "+ score, 200, 100);
  monkey.collide(invisibleGround);
  if(gameState === PLAY){
    score = score + Math.round(getFrameRate()/60);
   if(keyDown("space") && monkey.y >= 250){
      monkey.velocityY = -15 ;
    }
    monkey.velocityY = monkey.velocityY + 0.8;

  if(World.frameCount % 300 === 0){
    obstacles = createSprite(405,245,250,250);
    obstacles.velocityX = -8;
    obstacles.scale = 0.2;
    obstaclesGroup.add(obstacles);
    obstaclesGroup.setLifetimeEach(120);
  }
   if(World.frameCount % 80 === 0){
     rand = random(120,220 );
    banana = createSprite(405,rand,500,500);
    banana.velocityX = -8;
    banana.scale = 0.05;
    bananaGroup.add(banana);
    bananaGroup.setLifetimeEach(120);
  }
  if(monkey.isTouching(obstaclesGroup)){
    gameState = END;
  }
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }
  
  }
  else if(gameState === END){
    monkey.x = 250;
    monkey.y = 150;
    monkey.scale = 0.9;
  }
  drawSprites();
}