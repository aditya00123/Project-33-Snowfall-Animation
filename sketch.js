const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies

var engine;
var world;

var backgroundImg;
var snowArray = [];
var rand2;

function setup() {
  createCanvas(1200,600);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  
 
 

  

}

function preload() {
backgroundImg = loadImage('snow2.jpg');
}

function draw() {
  background(backgroundImg); 
  
  Engine.update(engine);

  rand2 = Math.round(random(1,1200));

  if (frameCount%60 === 0) {
    snowArray.push(new Snow(rand2, 0));
  }

  for(var i = 0;i < snowArray.length;i++) {
    snowArray[i].display();
    snowArray.lifetime = 160;
  }



  drawSprites();
}