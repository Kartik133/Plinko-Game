var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var divisions;
var score = 0;
var particle;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
    
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     ground.display();
   }

   text(mouseX + "," + mouseY,200,200);
   text(score,300,200);
   
   for(var i = 25;i<305;i=i+80) {
     text("500",i,570);
   }

   for(var k = 340;k<550;k = k+80) {
    text("100",k,570);
   }

   for(var j = 585;j<785;j = j+80) {
    text("200",j,570);
   }
   
    for (var j = 0; j < particles.length; j++) {
      particles[j].display();
    }
}

function mousePressed() {
   particles.push(new Particle(mouseX,mouseY,10));
}