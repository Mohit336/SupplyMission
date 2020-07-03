var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	boxLeftSprite=createSprite(boxPosition,boxY,20,100);
	boxLeftSprite.shapeColor=color(255,0,0);

	boxLeftBody=Bodies.rectangle(boxPositon+20,boxY,20,100, {isStatic:true});
	World.add(world,boxLeftBody);

	boxBottomSprite=createSprite(boxposition+100, boxY+40, 200,20);
	boxBottomSprite.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20,200,20,{isStatic:true}); 
	World.add(world, boxBottomBody);


	boxRightSprite=createSprite(boxPosition,boxY+40,200,30);
	boxRightSprite.ShapeColor=color(255,0,0);
	
	boxRightBody = Bodies.rectangle(boxPosition+200-20,boxY,20,100,{isStatic:true});
	World.add(world, boxRightBody);



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



