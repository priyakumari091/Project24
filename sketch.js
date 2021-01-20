
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cBall,dBin,dBin1,dBin2, ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	cBall = new Paper(160,688.8,30);
	
	dBin = new Dustbin(600,670,198,10);
	dBin1 = new Dustbin(494.5,635,10,80);
	dBin2 = new Dustbin(705.5,635,10,80);

	ground = new Ground(450,690,900,30);;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  cBall.display();
  dBin.display();
  dBin1.display();
  dBin2.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(cBall.body,cBall.body.position,{x:110,y:-110})
		Matter.Body.setStatic(cBall.body,false)
	}
}



