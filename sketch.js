var astronaut;
var sleep,gym,bath,brush,drink,eat,BG;

var move;

function preload(){
  BG = loadImage("iss.png");
  sleep = loadImage("sleep.png");
 bath = loadImage("bath1.png","bath2.png");
 gym = loadImage("gym1.png","gym2.png","gym11.png","gym12.png");
 brush = loadImage("brush.png");
 drink = loadImage("drink1.png","drink2.png");
 eat = loadImage("eat1.png","eat2.png");
 move = loadImage("move1.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
 background
background=createSprite(width/2,200);
background.addImage(BG);



//creating  astronaut
astronaut = createSprite(800,400,20,20);
astronaut.addImage(sleep);
astronaut.scale=0.2;
  
  
}

function draw(){
  
  //adding keyevent
  if(keyDown("UP_ARROW")){

    astronaut.addImage(brush);
    astronaut.changeImage(brush);

    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y=400;
    astronaut.x=800;
    
    

  }
    
    if(keyDown("DOWN_ARROW")){

    astronaut.addImage(gym);
    astronaut.changeImage(gym);
    
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y=400;
    astronaut.x=800;
  }
    
  if(keyDown("LEFT_ARROW")){

    astronaut.addImage(eat);
    astronaut.changeImage(eat);
    
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y=400;
    astronaut.x=800;
  }
  
  if(keyDown("RIGHT_ARROW")){

    astronaut.addImage(bath);
    astronaut.changeImage(bath);
    
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y=400;
    astronaut.x=800;
  }

  if(keyDown("D")){

    astronaut.addImage(drink);
    astronaut.changeImage(drink);
    
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y=400;
    astronaut.x=800;
  }

  if(keyDown("M")){

    astronaut.addImage(move);
    astronaut.changeImage(move);
    
    astronaut.velocityX=-2;
  }

  drawSprites();
  



  }

