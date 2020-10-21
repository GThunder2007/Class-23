
const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ourworld,ourengine, ground, box1,box2;

function setup() {
  createCanvas(400,400);
  ourengine = Engine.create();
  ourworld = ourengine.world;

  box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);

  ground = new Ground(200,390,400,20);

 
}

function draw() {
  Engine.update(ourengine);
  background(0);  
box1.display();
box2.display();
ground.display();
  
}