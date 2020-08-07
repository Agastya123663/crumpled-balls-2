
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

        
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,650,1200,10);
	

	 var options={
	isStatic:true	 
	 }


	 rightSide = Bodies.rectangle(1100,600,10,100,options);
	 World.add(world,rightSide);

	 bottomSide = new Dustbin(1000,650,100,10);

	 leftSide = Bodies.rectangle(920,600,10,100,options);
	 World.add(world,leftSide);

	 ball = new Ball(100,600,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ground.display();

  rect(rightSide.position.x,rightSide.position.y,10,100);

  bottomSide.display();

  rect(leftSide.position.x,leftSide.position.y,10,100);

  ball.display();
 
  drawSprites();


}

function keyPressed(){
if(keyCode === UP_ARROW);
Matter.Body.applyForce(ball.body,ball.body.position,{x : 85,y :-85 })	;
}

