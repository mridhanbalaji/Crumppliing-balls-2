var fixedrect , movingrect;
var toprect ,downrect ;

function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 30, 80);
 movingrect = createSprite (600,200, 80, 30);
 toprect = createSprite (200 , 0 ,20 , 50);
 downrect = createSprite( 200, 400 , 30 , 20);
 fixedrect.shapeColor = "red";
 movingrect.shapeColor ="red";
 toprect.velocityY= 5;
 downrect.velocityY = -3;
 toprect.debug = true;
 downrect.debug = true;
}

function draw() {
  background(0);  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  if (movingrect.width/2 + fixedrect.width/2 > movingrect.x - fixedrect.x && movingrect.width/2 +fixedrect.width/2 > fixedrect.x - movingrect.x &&  movingrect.height/2 + fixedrect.height/2 > movingrect.y - fixedrect.y && movingrect.height/2 + fixedrect.height/2 > fixedrect.y - movingrect.y  ){
    movingrect.shapeColor= "blue";
    fixedrect.shapeColor = "blue";
  }
  else {
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  if (toprect.width/2 + downrect.width/2 > toprect.x - downrect.x && toprect.width/2 +downrect.width/2 > downrect.x - toprect.x ){
    toprect.velocityX = toprect.velocityX * (-1);
    downrect.velocityX = downrect.velocityX * (-1);
    }
    if ( toprect.height/2 + downrect.height/2 > toprect.y - downrect.y && toprect.height/2 + downrect.height/2 > downrect.y - toprect.y ){
      toprect.velocityY = toprect.velocityY *(-1);
      downrect.velocityY = downrect.velocityY *(-1);
        }


  
  drawSprites();
}