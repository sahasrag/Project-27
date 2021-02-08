const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1,rope;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var roof1 = new Roof(400, 200, 800, 30);
	var bobObject1 = new Bob(150,400,30);
	var bobObject2 = new Bob(210,400,30);
	var bobObject3 = new Bob(270,400,30);
	var bobObject4 = new Bob(330,400,30);
  var bobObject5 = new Bob(390,400,30);
  var rope = new Roof(bobObject1.body,roofObject.body, -bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}