
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,box,ball
function setup() {
    createCanvas(400,400);
    engine=Engine.create() 
    world=engine.world
    var options={
        isStatic:true
    }
    var ballOptions={
        restitution:1
    }
    box=Bodies.rectangle(200,385,400,20,options)
    World.add(world,box)
    console.log(box)
    ball=Bodies.circle(200,200,20,ballOptions)
    World.add(world,ball)
}   
function draw() 
{

    background("black")
    Engine.update(engine)
    rectMode(CENTER)
    rect(box.position.x,box.position.y,400,20)
    ellipseMode(RADIUS)
    ellipse(ball.position.x,ball.position.y,20)
    

}

