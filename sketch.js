const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world, ground;

function setup(){
  var canvas=createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;

  var ground_options={
    isStatic: true
  }
  ground=Bodies.rectangle(200,390,500,10,ground_options);
  World.add(world,ground)

  console.log(ground);
  var Ball_options={
     restitution : 5.0

  }
  Ball = Bodies.circle(200,200,20,Ball_options)
  World.add(world,Ball)
}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,500,10);
  ellipse(Ball.position.x,Ball.position.y,50,50)
  
}
