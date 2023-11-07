var torre, imagemTorre;
var porta,imagemPorta,grupoPorta;
var grade,imagemGrade,grupoGrade;
var fantasma,imagemFantasma;
var blocoInvisivel, blocoInvisivelGp;
var gameState = "play"

function preload(){
  imagemTorre = loadImage("tower.png");
  imagemPorta = loadImage("door.png");
  imagemGrade = loadImage("climber.png");
  imagemFantasma = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  //spookySound.loop();
  torre = createSprite(300,300);
  torre.addImage("tower",imagemTorre);
  torre.velocityY = 10;

  fantasma=createSprite(200,200, 50, 50 )
  fantasma.addImage("ghost",imagemFantasma)
  fantasma.scale=0.3

}

function draw(){
  background(0);

  if (gameState=="play") {
    if (keyDown("left_arrow")) {

    fantasma.x=fantasma.x-3
      
    }

    if (keyDown("right_arrow")) {
      fantasma.x=fantasma.x+3
      
    }

    if (keyDown("space")) {
      fantasma.velocityY=-10
    }

    fantasma.velocityY+=0.8
    
  }
  
    
    if(torre.y > 400){
      torre.y = 300
    }
   

    
    createAll()
   
    
    drawSprites();
  }

  function createAll(){
    if (frameCount%50==0) {
      porta=createSprite(200, -50)
      grade=createSprite(200, 10)

      porta.x=Math.round(random(120,400))
      grade.x=porta.x

      

      porta.velocityY=10
      grade.velocityY=10

      porta.addImage(imagemPorta)
      grade.addImage(imagemGrade)

      porta.lifetime=800
      grade.lifetime=800
      
    }
  }


  



    
   
  


