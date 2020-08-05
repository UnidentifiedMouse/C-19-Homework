var fixedrec, movingrec;

function setup() {
  createCanvas(800,400);
 fixedrec=createSprite(200,200,100,100);
 movingrec=createSprite(300,200,40,50);
 movingrec.shapeColor="salmon";
 fixedrec.shapeColor="skyblue"
}

function draw() {
  background("black");  
  movingrec.y=mouseY;
  movingrec.x=mouseX;

if(movingrec.x-fixedrec.x<movingrec.width /2+fixedrec.width /2 &&
  fixedrec.x-movingrec.x<fixedrec.width /2+movingrec.width /2 &&
   movingrec.y-fixedrec.y<movingrec.height /2+fixedrec.height /2 &&
   fixedrec.y-movingrec.y<movingrec.height /2+fixedrec.height/2){
movingrec.shapeColor="white"
fixedrec.shapeColor="white"
}
else{
  movingrec.shapeColor="salmon";
  fixedrec.shapeColor="skyblue";
}
  drawSprites();
}