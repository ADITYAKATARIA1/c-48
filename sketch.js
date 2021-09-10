var wall , wallImg1,wallImg2,wallImg3
var ground,groundImg
var aditya,adityaImg
var enemy , enemyImg
var tressure,tressureImg
var sidewall1 , sidewall2
var bgImg
var star1,star2,star3;
var life=3
var PLAY=1;
var END=0;
var gameState=1;
function preload(){
  groundImg=loadImage("ground.png")
 wallImg1=loadImage("aditya maze wall.jpg")
 wallImg2=loadImage("wall2.png")
 wallImg3=loadImage("wall3.jpg")
 adityaImg=loadImage("boy1 (1).png")
 tressureImg=loadImage("tressure.png")
 enemyImg=loadImage("dino1.PNG")
 bgImg=loadImage("bg.png")
 restartImg=loadImage("restart.png")
 gameOverImg=loadImage("gameOver.png")
}

function setup() {
  var canvas=createCanvas(1800,900);
  
  ground=createSprite(900,875,1800,30);
  ground.addImage(groundImg)

  aditya=createSprite(50,800,40,40)
  aditya.addImage(adityaImg)
  aditya.scale=0.3

  restart=createSprite(900,405,200,100);
  restart.addImage(restartImg)

  gameOver=createSprite(900,405,200,100);
  gameOver.addImage(gameOverImg)

  wall1=createSprite(100,200,150,75)
  wall1.addImage("wall",wallImg3)
  wall1.scale=0.2
  wall1.velocityX=-3;
  
  wall2=createSprite(300,795,75,150)
  wall2.addImage("wall",wallImg2)
  wall2.scale=0.6
  wall2.velocityX=3;
  
  wall3=createSprite(750,200,525,75)
  wall3.addImage("wall",wallImg1)
  wall3.scale=0.5
  wall3.velocityX=3;

  wall4=createSprite(350,400,525,75)
  wall4.addImage("wall",wallImg1)
  wall4.scale=0.7
  wall4.velocityX=-3;

  wall5=createSprite(750,650,525,75)
  wall5.addImage("wall",wallImg3)
  wall5.scale=0.2
  wall5.velocityX=3;

  wall6=createSprite(1200,450,525,75)
  wall6.addImage("wall",wallImg2)
  wall6.scale=0.4
  wall6.velocityX=-3;

  wall7=createSprite(1000,750,525,75)
  wall7.addImage("wall",wallImg1)
  wall7.scale=0.5
  wall7.velocityX=3;

  sidewall1=createSprite(0,0,50,2000)
  sidewall1.visible=false;
   
  sidewall2=createSprite(1405,0,55,2000)
  sidewall2.visible=false;

  sidewall3=createSprite(1305,400,1800,20)
  sidewall3.visible=false;
  
  sidewall4=createSprite(1305,0,1800,20)
  sidewall4.visible=false;
  
  sidewall5=createSprite(1305,250,1800,20)
  sidewall5.visible=false;
  
  sidewall6=createSprite(1305,600,1800,20)
  sidewall6.visible=false;
  
  sidewall7=createSprite(1800,0,50,1775)
  sidewall7.visible=false;
  
  sidewall8=createSprite(900,10,1800,20)
  sidewall8.visible=false;
  
  sidewall9=createSprite(900,890,1800,20)
  sidewall9.visible=false;
  
  sidewall10=createSprite(0,450,50,1800)
  sidewall10.visible=false;

  tressure=createSprite(1650,100,75,75)
  tressure.addImage(tressureImg)
  tressure.scale=0.3

  enemy1=createSprite(1450,60,0,50)
  enemy1.addImage("enemy",enemyImg)
  enemy1.scale=0.7
  enemy1.velocityY=3
  
  enemy2=createSprite(1650,300,0,50)
  enemy2.addImage("enemy",enemyImg)
  enemy2.scale=0.7
  enemy2.velocityY=3
  
  star1=createSprite(100,100,20,20)

  star2=createSprite(1750,850,20,20)

  star3=createSprite(900,450,20,20)
}

function draw() {
  background(bgImg);  
  if(gameState===PLAY){
    restart.visible=false;
    gameOver.visible=false;
 
    if(keyDown("UP")){
      aditya.velocityY=-3
      aditya.velocityX=0
    }
    if(keyDown("DOWN")){
      aditya.velocityY=3
      aditya.velocityX=0
    } 
    if(keyDown("LEFT")){
      aditya.velocityX=-3
      aditya.velocityY=0
    }
    if(keyDown("RIGHT")){
      aditya.velocityX=3
      aditya.velocityY=0
    }
  wall1.bounceOff(sidewall1)
  wall1.bounceOff(sidewall2);
  wall1.bounce(wall3);

  wall2.bounceOff(sidewall1)
  wall2.bounceOff(sidewall2);
  wall2.bounce(wall7);

  wall3.bounceOff(sidewall1)
  wall3.bounceOff(sidewall2);
  wall3.bounce(wall1);

  wall4.bounceOff(sidewall1)
  wall4.bounceOff(sidewall2);
  wall4.bounce(wall6);
  
  wall5.bounceOff(sidewall1)
  wall5.bounceOff(sidewall2);
  wall5.bounce(wall3);

  wall6.bounceOff(sidewall1)
  wall6.bounceOff(sidewall2);
  wall6.bounce(wall4);
  
  wall7.bounceOff(sidewall1)
  wall7.bounceOff(sidewall2);
  wall7.bounce(wall2);
  
  enemy1.bounceOff(sidewall3)
  enemy1.bounceOff(sidewall4);
  
  enemy2.bounceOff(sidewall5)
  enemy2.bounceOff(sidewall6);

  aditya.bounceOff(sidewall10)
  aditya.bounceOff(sidewall7);
  aditya.bounceOff(sidewall8)
  aditya.bounceOff(sidewall9);
  


  if(aditya.isTouching(wall1) || aditya.isTouching(wall2) ||aditya.isTouching(wall3) || aditya.isTouching(wall4) || aditya.isTouching(wall5) || aditya.isTouching(wall6) || aditya.isTouching(wall7) || aditya.isTouching(enemy1) ||aditya.isTouching(enemy2)){
    gameState=END
    life=life-1;
    
  }
  
  if(aditya.isTouching(tressure)){
    gameOver.visible=true;
    gameOver.scale=0.6;
    textSize(35);
    fill("red")
    text("Conagratualtions!!! You have won the Tressure Hunt!!!")
  }
  }
  else if(gameState===END){
    restart.visible=true; 
   if(life===0){
    gameOver.visible=true; 
    restart.visible=false; 
   }
   
   if(mousePressedOver(restart)  && life>0   ){
     reset();
   }


   wall1.velocityX=0;
   wall2.velocityX=0;
   wall3.velocityX=0;
   wall4.velocityX=0;
   wall5.velocityX=0;
   wall6.velocityX=0;
   wall7.velocityX=0;

    enemy1.velocityY=0;
    enemy2.velocityY=0;
    
    aditya.velocityX=0;
     
    aditya.velocityY=0;

    wall4.depth=gameOver.depth;
    gameOver.depth+=1;

    wall6.depth=gameOver.depth;
    gameOver.depth+=1;
  }
  

  
  drawSprites();

}

function reset(){
  gameState=PLAY;
  wall1.velocityX=-3;
  wall2.velocityX=3;
  wall3.velocityX=3;
  wall4.velocityX=-3;
  wall5.velocityX=3;
  wall6.velocityX=-3;
  wall7.velocityX=3;

  enemy1.velocityY=3;
  enemy2.velocityY=3;

 aditya.x=50;
 aditya.y=800

  restart.visible=false;
}