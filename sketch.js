var cat;
var cat_sitting;
var cat_walking;
var cat_stopped;

var mouse;
var mouse_sitting;
var mouse_teasing;
var mouse_stopped;

var garden,gardenimg;

var gameState = "sitting";
function preload() {
    //load the images here
    cat_sitting = loadAnimation("cat1.png");
    cat_walking = loadAnimation("cat2.png","cat3.png");
    cat_stopped = loadAnimation("cat4.png");
    mouse_sitting = loadAnimation("mouse1.png");
    mouse_teasing = loadAnimation("mouse2.png","mouse3.png");
    mouse_stopped = loadAnimation("mouse4.png");
    gardenimg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(200,300,20,20);
    garden.addImage("back",gardenimg);
    garden.scale = 1.5;

    //create tom and jerry sprites here
    cat = createSprite(700,700,40,20);
    cat.addAnimation("sitting",cat_sitting);
    cat.scale = 0.1;
    cat.addAnimation("walking",cat_walking);
    cat.addAnimation("stopped",cat_stopped);

    mouse = createSprite(200,700,40,20);
    mouse.addAnimation("sitting",mouse_sitting);
    mouse.scale = 0.1;
    mouse.addAnimation("teasing",mouse_teasing);
    mouse.addAnimation("stopped",mouse_stopped);

}

function draw() {

    background(255);
    console.log(cat.width);

    cat.width = 40;
    mouse.width = 40;

    //Write condition here to evalute if tom and jerry collide
    keyPressed();

    if(cat.x - mouse.x < cat.width/2 + mouse.width/2 && gameState === "walking"){
      cat.velocityX = 0;
      cat.changeAnimation("stopped",cat_stopped);
      mouse.changeAnimation("stopped",mouse_stopped);
      gameState = "stopped";
    }

    drawSprites();
}


function keyPressed(){
  if(keyDown(UP_ARROW)){
     cat.changeAnimation("walking",cat_walking);
     mouse.changeAnimation("teasing",mouse_teasing);
     cat.velocityX = -3;
     gameState = "walking";
  }
  //For moving and changing animation write code here


}
