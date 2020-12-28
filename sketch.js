var tree;
var tree_load;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
var stone;
var boy, boy_load;
var mango1;
var mango2;
var mango3;
var mango4;
var sling
function preload()
{
	tree_load = loadImage("images/tree.png");
	boy_load = loadImage("images/boy.png");
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	stone = new Stone(180, 1300, 200, 200);
	tree = createSprite(1900, 1800, 20,20);
	mango1 = new Mango(6000,4000, 10, 20);
	mango2 = new Mango(7000,4000, 10, 20);
	mango3 = new Mango(6000,6000, 10, 20);
	mango4 = new Mango(7000,6000, 10, 20);
	boy = createSprite(600, 1900, 10, 1);
	boy.addImage(boy_load);
	tree.addImage(tree_load);
	ground = createSprite(2000, 2500, 8000, 70);
	sling = new Sling(stone.body,{x:180, y:1300});
	sling.attach(stone.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  scale(0.27);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  sling.display();
  drawSprites();
 
}

function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();

}
