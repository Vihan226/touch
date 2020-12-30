var pacman;
var pacmanrImage;
var pacmanlImage;
var pacmanuImage;
var pacmandImage;
var pacmancircleImage;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10;
var food1,food2,food3,food4,food5,food6,food7,food8,food9,food10,food11,food12,food13,food14,food15,food16,food17,food18,food19,food20,food21,food22,food23,food24,food25,food26,food27,food28,food29,food30,food31;
var score;
var gameState = "first"
var button;
var rect1;
function preload(){
  pacmanrImage= loadImage("bgrightpacman.png")
  pacmanlImage= loadImage("bgleftpacman.png")
  pacmandImage= loadImage("bgdownpacman.png")
  pacmanuImage= loadImage("bguppacman.png")
  pacmancircleImage= loadImage("bgusecircle.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  pacman=createSprite(width/1.75-5,height/2+10,width-width/1,100)
  pacman.addImage("pacman", pacmancircleImage)
  pacman.addImage("right",pacmanrImage)
  pacman.addImage("left",pacmanlImage)
  pacman.addImage("up",pacmanuImage)
  pacman.addImage("down", pacmandImage)
  pacman.scale=.15     
  
  line1=createSprite(width/1.75-10,height/2+56,width-width/3,10);
  line1.shapeColor="blue"
 
  
  line2=createSprite(width/1.75-10,height/2-12.5,width-width/3,10);
  line2.shapeColor="blue"
  
  line3=createSprite(width/.9-width/2,height/2+110,10)
  line3.shapeColor="blue"

  line4=createSprite(width/2-50,height/2-height/2.15,width-width/8,10)
  line4.shapeColor="blue"
  
  line5=createSprite(width/2-width/2.109,height/2,10,height-53)
  line5.shapeColor="blue"

  line6=createSprite(width/2-50,height-25,width-width/8,10)
  line6.shapeColor="blue"

  line7=createSprite(width/1.11-width/800,height/2,10,height-53)
  line7.shapeColor="blue"

  line8=createSprite(width/1.75-10,height/2-110,width-width/3,10)
  line8.shapeColor="blue"

  
  line9=createSprite(width/1.37-width/2,height/2-60,10);
  line9.shapeColor="blue"

  food1=createSprite(width/1.45-width/2,height/2-60,15,15)
  food1.shapeColor="yellow"
  

  food2=createSprite(width/1.45-width/2,height/2-90,15,15)
  food2.shapeColor="yellow"
  
  
  food3=createSprite(width/1.45-width/2,height/2-120,15,15)
  food3.shapeColor="yellow"

  
  food4=createSprite(width/1.45-width/2,height/2-150,15,15)
  food4.shapeColor="yellow"

  food5=createSprite(width/1.41-width/2,height/2-150,15,15)
  food5.shapeColor="yellow"
  
  food6=createSprite(width/1.38-width/2,height/2-150,15,15)
  food6.shapeColor="yellow"

  food7=createSprite(width/1.35-width/2,height/2-150,15,15)
  food7.shapeColor="yellow"

  food8=createSprite(width/1.32-width/2,height/2-150,15,15)
  food8.shapeColor="yellow"

  food9=createSprite(width/1.29-width/2,height/2-150,15,15)
  food9.shapeColor="yellow"

  food10=createSprite(width/1.26-width/2,height/2-150,15,15)
  food10.shapeColor="yellow"

  food11=createSprite(width/1.23-width/2,height/2-150,15,15)
  food11.shapeColor="yellow"

  food12=createSprite(width/1.20-width/2,height/2-150,15,15)
  food12.shapeColor="yellow"

  food13=createSprite(width/1.17-width/2,height/2-150,15,15)
  food13.shapeColor="yellow"

  food14=createSprite(width/1.14-width/2,height/2-150,15,15)
  food14.shapeColor="yellow"

  food15=createSprite(width/1.11-width/2,height/2-150,15,15)
  food15.shapeColor="yellow"

  food16=createSprite(width/.6-width/1,height/2+80,15,15)
  food16.shapeColor="yellow"

  food17=createSprite(width/.59-width/1,height/2+80,15,15)
  food17.shapeColor="yellow"

  food18=createSprite(width/.58-width/1,height/2+80,15,15)
  food18.shapeColor="yellow"

  food19=createSprite(width/.57-width/1,height/2+80,15,15)
  food19.shapeColor="yellow"

  food20=createSprite(width/.56-width/1,height/2+80,15,15)
  food20.shapeColor="yellow"


  food21=createSprite(width/.63-width/1,height/2+80,15,15)
  food21.shapeColor="yellow"

  food22=createSprite(width/.64-width/1,height/2+80,15,15)
  food22.shapeColor="yellow"

  food23=createSprite(width/.65-width/1,height/2+80,15,15)
  food23.shapeColor="yellow"


  food24=createSprite(width/.66-width/1,height/2+80,15,15)
  food24.shapeColor="yellow"

  food25=createSprite(width/.67-width/1,height/2+80,15,15)
  food25.shapeColor="yellow"


  food26=createSprite(width/.68-width/1,height/2+80,15,15)
  food26.shapeColor="yellow"

  food27=createSprite(width/.69-width/1,height/2+80,15,15)
  food27.shapeColor="yellow"

  food28=createSprite(width/.70-width/1,height/2+80,15,15)
  food28.shapeColor="yellow"


  food29=createSprite(width/.71-width/1,height/2+80,15,15)
  food29.shapeColor="yellow"

  food30=createSprite(width/.71-width/1,height/2+80,15,15)
  food30.shapeColor="yellow"

  

  score=0
}

function draw() {
 
  if(gameState==="first"){
  background("black");
  fill("red")
  strokeWeight(25)
  textSize(30)
  text("Score: "+score,width/.9-width/1,height/2-200)
  if(keyDown("LEFT_ARROW")){
    pacman.changeImage("left",pacmanlImage)
   // pacman.addImage("left",pacmancircleImage)
    pacman.scale=.25
    pacman.x=pacman.x-10
    pacman.velocityY=0
  }
  if(keyDown("DOWN_ARROW")){
    pacman.changeImage("down",pacmandImage)
    pacman.scale=.25
    pacman.y=pacman.y+10
    pacman.velocityX=0
  }
  if(keyDown("RIGHT_ARROW")){
    pacman.changeImage("right",pacmanrImage)
    pacman.scale=.25
    pacman.x=pacman.x+10
   pacman.velocityY=0

  }
  if(keyDown("UP_ARROW")){
    pacman.changeImage("up",pacmanuImage)
    pacman.scale=.25
    pacman.y=pacman.y-10
    pacman.velocityX=0
  }
  if(pacman.isTouching(food1)){
    score=score+1
    food1.destroy();
  }
  if(pacman.isTouching(food2)){
    score=score+1
    food2.destroy();
  }
  if(pacman.isTouching(food3)){
    score=score+1
    food3.destroy();
  }
  if(pacman.isTouching(food4)){
    score=score+1
    food4.destroy();
  }
  if(pacman.isTouching(food5)){
    score=score+1
    food5.destroy();
  }
  if(pacman.isTouching(food6)){
    score=score+1
    food6.destroy();
  }
  if(pacman.isTouching(food7)){
    score=score+1
    food7.destroy();
  }
  if(pacman.isTouching(food8)){
    score=score+1
    food8.destroy();
  }
  if(pacman.isTouching(food9)){
    score=score+1
    food9.destroy();
  }
  if(pacman.isTouching(food10)){
    score=score+1
    food10.destroy();
  }
  if(pacman.isTouching(food11)){
    score=score+1
    food11.destroy();
  }
  if(pacman.isTouching(food12)){
    score=score+1
    food12.destroy();
  }
  if(pacman.isTouching(food13)){
    score=score+1
    food13.destroy();
  }
  if(pacman.isTouching(food14)){
    score=score+1
    food14.destroy();
  }
  if(pacman.isTouching(food15)){
    score=score+1
    food15.destroy();
  }
  
  if(pacman.isTouching(food16)){
    score=score+1
    food16.destroy();
  }
  if(pacman.isTouching(food17)){
    score=score+1
    food17.destroy();
  }
  if(pacman.isTouching(food18)){
    score=score+1
    food18.destroy();
  }
  if(pacman.isTouching(food19)){
    score=score+1
    food19.destroy();
  }
  if(pacman.isTouching(food20)){
    score=score+1
    food20.destroy();
  }

  if(pacman.isTouching(food21)){
    score=score+1
    food21.destroy();
  }
  if(pacman.isTouching(food22)){
    score=score+1
    food22.destroy();
  }
  if(pacman.isTouching(food23)){
    score=score+1
    food23.destroy();
  }
  if(pacman.isTouching(food24)){
    score=score+1
    food24.destroy();
  }
  
  if(pacman.isTouching(food25)){
    score=score+1
    food25.destroy();
  }
  if(pacman.isTouching(food26)){
    score=score+1
    food26.destroy();
  }

  if(pacman.isTouching(food27)){
    score=score+1
    food27.destroy();
  }
  if(pacman.isTouching(food28)){
    score=score+1
    food28.destroy();
  }
  if(pacman.isTouching(food29)){
    score=score+1
    food29.destroy();
  }
  if(pacman.isTouching(food30)){
    score=score+1
    food30.destroy();
  }

  createEdgeSprites();
  pacman.bounceOff(line1);
  pacman.bounceOff(line2);
  pacman.bounceOff(line3);
  pacman.bounceOff(line4);
  pacman.bounceOff(line5);
  pacman.bounceOff(line6);
  pacman.bounceOff(line7);
  pacman.bounceOff(line8);
  pacman.bounceOff(line9);

  this.left=createButton("Left")
  this.left.position(width/.9-width/1,height/2+80,15);

  this.left.mousePressed(()=>{
    pacman.velocityX=-10
    pacman.velocityY=0
    pacman.changeImage("left",pacmanlImage)
  })
  this.right=createButton("Right")
  this.right.position(width/.8-width/1,height/2+80,15);

  this.right.mousePressed(()=>{
    pacman.velocityX=10
    pacman.velocityY=0
    pacman.changeImage("right",pacmanrImage)
  })
  this.up=createButton("Up")
  this.up.position(width/.85-width/1,height/2+50,15);

  this.up.mousePressed(()=>{
    pacman.velocityY=-10
    pacman.velocityX=0
    pacman.changeImage("up",pacmanuImage)
  })
  this.down=createButton("Down")
  this.down.position(width/.85-width/1,height/2+100,15);

  this.down.mousePressed(()=>{
    pacman.velocityY=10
    pacman.velocityX=0
    pacman.changeImage("down",pacmandImage)
  })


if(score>29){
gameState="second"
}


  }
  
  

if(gameState === "second"){
background("white")
line1.destroy();
line2.destroy();
line3.destroy();
line4.destroy();
line5.destroy();
line6.destroy();
line7.destroy();
line8.destroy();
line9.destroy();
pacman.destroy();

this.level1=createButton("level1")

this.level1.position(width/.9-width/1,height/2+80,15);

this.level2=createButton("level2")

this.level2.position(width/.85-width/1,height/2+80,15);

this.level3=createButton("level3")

this.level3.position(width/.8-width/1,height/2+80,15);

this.level1.mousePressed(()=>{
gameState="level1"
});
fill("blue")
textSize(15)
text("Welcome to the game: Chose your choice of level! Make sure to have as much diamonds as possible! Have fun",width/.98-width/1,height/2-200)

  
}
if(gameState==="level1"){
  background("black")
 // this.level1.destroy();
}
 drawSprites();
    
}



  

