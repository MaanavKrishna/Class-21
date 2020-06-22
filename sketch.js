var movingrect,fixedrect,a,b;
function setup() {
  createCanvas(400,400);
  movingrect=createSprite(200,300,30,30);
  movingrect.shapeColor="yellow";
  fixedrect=createSprite(200,200,30,30);
  fixedrect.shapeColor="yellow";
  a=createSprite(300,200,30,30);
  b=createSprite(100,200,30,30);
}

function draw() {
  background(0);
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(istouching(movingrect,a)==true)
  {
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  else
  {
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
  }
  drawSprites();
}
