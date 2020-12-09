var tower,towerImg;
var door,doorImg,doorGroup;
var railing,railingImg,railingGroup;
var ghost,ghostImg;
var invisibleBlock,invisibleBlockGroup;
var gameState = "play";
function preload(){
  towerImg= loadImage("tower.png");
  doorImg= loadImage("door.png");
  railingImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
}
function setup(){
  createCanvas(600,600);
  tower = createSprite(300,300,80,100);
  tower.addImage("towerImage",towerImg);
   tower.velocityY= 1;
  ghost= createSprite(200,200,30,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.3;
  doorGroup = new Group();
  railingGroup = new Group();
  invisibleBlockGroup = new Group();
  
}

function draw(){
  if(gameState==="play"){
    
  
if(tower.y > 400){
  tower.y = 300 
}
  if(keyDown("space" )){
    ghost.velocityY = -6;
  }
  ghost.velocityY = ghost.velocityY + 0.6;
  if(keyDown("left_arrow ")){
    ghost.x = ghost.x-4;
  }
  if(keyDown("right_arrow")){
    ghost.x = ghost.x+2;
  }
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState = "end";
  }
  
  if (railingGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  
  spawnDoor();
  
  drawSprites();
  }
  if(gameState==="end"){
    fill("Yellow");
    textSize(30);
    text("Game Over",250,250);
  }
}
function spawnDoor(){
  if(frameCount%250===0){
    door = createSprite(200,-50,40,40);
    door . addImage("doorImage",doorImg);
    door.x=Math.round(random(120,400))
    door.velocityY = 1;
    railing = createSprite(200,10,20,20);
    railing.addImage("Railing Img",railingImg);
    railing.x = door.x;
    railing.velocityY =1;
    door.lifetime = 500;
    railing.lifetime = 500;
    ghost.depth = door.depth;
    ghost.depth = ghost.depth +1;
    invisibleBlock = createSprite(200,15,20,2);
    invisibleBlock.visible = false;
    invisibleBlock.velocityY = 1;
    invisibleBlock.x = railing.x;
    doorGroup.add(door);
    railingGroup.add(railing);
    invisibleBlockGroup.add(invisibleBlock);
    
  }
}