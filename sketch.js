const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
//var drop;
var drop=[];

function setup(){
   var canvas = createCanvas(300,500);

    engine = Engine.create();
    world = engine.world;

    //drop=new Drop(0,30)

}

var maxDrop=100;


for(var i=0; i<maxDrop; i++){
    drop.push(new Drop(random(0,400),random(0,400)));
}

function draw(){

    background(0,0,0);

    Engine.update(engine);

    //drop.display();
    drop.update();

    
    
}   

