var fixedrect, movingrect, obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(1200,800);
 fixedrect=createSprite(300,300,100,125);
 movingrect=createSprite(400,400,150,100);
 obj1=createSprite(100,100,50,50);
 obj2=createSprite(200,100,50,50);
 obj3=createSprite(300,100,50,50);
 obj4=createSprite(400,100,50,50);
 movingrect.shapeColor="green";
 fixedrect.shapeColor="green";
 obj1.shapeColor="green";
 obj2.shapeColor="green";
 obj3.shapeColor="green";
 obj4.shapeColor="green";
 movingrect.velocityY=-4;
 obj4.velocityY=6;
}

function draw() {
  background(0);  

  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY;

if(isTouching(obj3, movingrect)) {
  movingrect.shapeColor="red";
  obj3.shapeColor="red";
  } else {
    movingrect.shapeColor="green";
  obj3.shapeColor="green";
  }
bounceOff(obj4, movingrect);


  drawSprites();
}



