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
var ball;
var count = 0;
var gameState = "play";

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
 text("Score: "+score,690,30);
  Engine.update(engine);
 
  console.log(gameState);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
    
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     ground.display();
   }
   
   for(var i = 25;i<305;i=i+80) {
     text("500",i,570);
   }

   for(var k = 340;k<550;k = k+80) {
    text("100",k,570);
   }

   for(var j = 585;j<785;j = j+80) {
    text("200",j,570);
   }
   
   if(ball!=null)
   {
      ball.display();
       
       if (ball.body.position.y>760)
       {
             if (ball.body.position.x < 300) 
             {
                 score=score+500;      
                 ball=null;
                 if ( count>= 5) gameState ="end";                          
             }


             else if (ball.body.position.x < 600 && ball.body.position.x > 301 ) 
             {
                   score = score + 100;
                   ball=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (ball.body.position.x < 900 && ball.body.position.x > 601 )
             {
                   score = score + 200;
                   ball=null;
                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }

     if(gameState==="end") {
       text("Game Ended",350,340);
     }
}

function mousePressed() {
  if(gameState!="end") {
   ball = new Particle(mouseX,1,10);
   count++
  }
}