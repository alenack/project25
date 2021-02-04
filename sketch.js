
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperobj;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(800,680,1600,50);
	dustbinObj = new dustbin(1200,650);
	paperobj = new paper(100,200,40);
//	paperobj.scale = -1;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperobj.display();
  groundObject.display();
  dustbinObj.display();
 

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:450,y:-320});
	}

}

