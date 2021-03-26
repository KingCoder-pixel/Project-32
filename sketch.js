
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var ground1, ground2;
var ball, launcher;
var box1, box2, box3, box4, box5;
var box11, box10, box9, box8, box7, box6;
var box12, box13, box14, box15, box16;
var box17, box18, box19, box20, box21;
var box22, box23, box24, box25;
function preload()
{
	ball = loadImage("gon.png")
}
function setup() {
	var canvas = createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(490, 250, 160, 25);
	ground2 = new Ground(700, 600, 230, 25)
	ball = new Ball(200, 400, 40, 40);
	launcher = new Launcher(ball.body, {x:200, y:400});
	//level 3
	box1 = new Box(435, 235, 30, 40);
	box2 = new Box(460, 235, 30, 40);
	box3 = new Box(490, 235, 30, 40);
	box4 = new Box(520, 235, 30, 40);
	box5 = new Box(550, 235, 30, 40);
	//level 2
	box6 = new Box(460, 195, 30, 40);
	box7 = new Box(490, 195, 30, 40);
	box8 = new Box(520, 195, 30, 40);
	// top
	box9 = new Box(490, 155, 30, 40);
	//level 4
	box10 = new Box(615, 585, 30, 40);
	box11 = new Box(640, 585, 30, 40);
	box12 = new Box(670, 585, 30, 40);
	box13 = new Box(700, 585, 30, 40);
	box14 = new Box(730, 585, 30, 40);
	box15 = new Box(760, 585, 30, 40);
	box16 = new Box(790, 585, 30, 40);
	//level 3
	box17 = new Box(640, 545, 30, 40);
	box18 = new Box(670, 545, 30, 40);
	box19 = new Box(700, 545, 30, 40);
	box20 = new Box(730, 545, 30, 40);
	box21 = new Box(760, 545, 30, 40);
	//level 2
	box22 = new Box(670, 505, 30, 40);
	box23 = new Box(700, 505, 30, 40);
	box24 = new Box(730, 505, 30, 40);
	//level 1
	box25 = new Box(700, 460, 30, 40);
	
	
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground1.display();
  ground2.display();
  ball.display();
  launcher.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}

function mouseReleased()
{
	launcher.fly();
}



  
