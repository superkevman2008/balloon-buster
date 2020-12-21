










//saving the objects in variable form
  var redballoon,Rgroup
  var greenballoon,Ggroup
  var blueballoon,Bgroup
  var bow, bowImage
  var arrow, arrowImage,Agroup
  var background, backgroundImage
  var score=0
function preload() 
{
//loading images of balloons,bow and arrow 
  redballoon = loadImage("redballoon.png")
  greenballoon = loadImage("greenballoon.png")
  blueballoon = loadImage("blueballoon.png")
  bowImage = loadImage("bow.png")
  arrowImage = loadImage("arrow.png")
  backgroundImage = loadImage("background0.png")
  Rgroup= new Group()
   Ggroup= new Group()
   Bgroup= new Group()
   Agroup= new Group()

}

function setup() 
{
//creating the canvas  
  createCanvas(600, 400);
//creating white background  
  background("white")
  background = createSprite(300, 200, 1200, 400)
  //background = createSprite(300, 300, 600, 600)
//adding image for background
  background.addImage("background", backgroundImage)
  background.x =background.width / 2
  background.velocityX = -10

//creating bow
  bow = createSprite(50, 200, 10, 10)
  bow.addImage("bow", bowImage)
  bow.scale = -1
//creating arrow
  arrow = createSprite(50,mouseY, 10, 10)
  arrow.addImage("arrow", arrowImage)
  arrow.scale = -0.2
  Agroup.add(arrow)
  
  
//creating edges
  edges = createEdgeSprites()

  window.focus();
}

function draw() 
{
//making the bounce off edges
  bow.bounceOff(edges[3])
  bow.bounceOff(edges[2])
  bow.y = mouseY;
  arrow.y = bow.y
  
//resetting the background image when it crosses 0
  if (background.x<0) 
{

  background.x = background.width / 2
}

  // shoot arrow
  if(keyWentDown("space")){
    shootArrow();
  }
  
  //balloon
  if(frameCount % 80 ===0){
    rand = Math.ceil(random(0,3));
   console.log(rand);
    switch(rand){
      case 1: makeRed();
          break;
       case 2: makeBlue();
          break;
      case 3: makeGreen();
          break;
       
        
    }
  }
if(Agroup.isTouching(Bgroup)){
  score = score +1 
  Bgroup.setLifetimeEach(0)
}
  if(Agroup.isTouching(Rgroup)){
  score = score +3
  Rgroup.setLifetimeEach(0)
}
if(Agroup.isTouching(Ggroup)){
  score = score +2 
  Ggroup.setLifetimeEach(0)
}  
  
 
  
  
  
  //drawing the sprites
  drawSprites();
   text(score,200,25)
}

function shootArrow(){
  arrow.velocityX = 15; 
  arrow.lifetime=Math.round(110);
  arrow = createSprite(50, 200, 10, 10)
  arrow.addImage("arrow", arrowImage)
  arrow.scale = -0.2
  Agroup.add(arrow)
   
}


function makeRed(){
  redB=createSprite(600,random(50,350),20,20);
    redB.addImage("red",redballoon);
    redB.scale=0.07;
  redB.velocityX = -6;
  redB.lifeTime = Math.round(600/6);
  Rgroup.add(redB)
}
function makeBlue(){
  blueB=createSprite(600,random(50,350),20,20);
    blueB.addImage("blue",blueballoon);
    blueB.scale=0.07;
  blueB.velocityX = -7;
  blueB.lifeTime = Math.round(600/7);
  Bgroup.add(blueB)
}
function makeGreen(){
    greenB=createSprite(600,random(50,350),20,20);
    greenB.addImage("red",greenballoon);
    greenB.scale=0.07;
  greenB.velocityX = -6;
  greenB.lifeTime = Math.round(600/6);
  Ggroup.add(greenB)
}