const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg;
var snow1,boy;

function preload()
{
  getBackgroundImg();
}


function setup() {
  createCanvas(1250,500);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  snow1=new Snow(1100,200);
  boy=new Boy(700,500);
  boy.scale=0.1;
}

function draw() {
  if(backgroundImg)
  {
      background(backgroundImg);
  }
  Engine.update(engine);

  //snow1.display();
  boy.display();
  drawSprites();
}

async function getBackgroundImg(){

  // write code to fetch time from API
  var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

  //change the data in JSON format
  var responseJson=await response.json();
  console.log(responseJson);
  var dateTime=responseJson.datetime;

  // write code slice the datetime
  var hour=dateTime.slice(11,13);

  // add conditions to change the background images from sunrise to sunset
  if(hour>=04&&hour<=08)
  {
      bg="snow1.jpg";
  }
  else(hour>=23&&hour<=0)
  {
      bg="snow2.jpg";
  }

  

  //load the image in backgroundImg variable here
  backgroundImg=loadImage(bg);
  
}

