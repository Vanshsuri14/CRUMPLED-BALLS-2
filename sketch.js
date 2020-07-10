
var paperIMG,ground,dustbinIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;





function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,600,800,10);
	block = new Dustbin(550,570,10,50);
	block1 = new Dustbin(670,570,10,50);
	block2 = new Dustbin(610,590,110,10);

	 
	paper = new Paper(100,590,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  block.display();
  block1.display();
  block2.display();
  
  
   
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-14});

	}
}



