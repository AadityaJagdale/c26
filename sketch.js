const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;
var mConstraint;
var score =0;
var gamestate="onsling";
var backgroundImg;
var sling,sling1Img,sling2Img;


var engine, world;
var box1, pig1;



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    sling1Img=loadImage("sprites/sling1.png");
    sling2Img=loadImage("sprites/sling2.png");
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,590,1200,20);
    platform =new Ground(150,475,300,240);
    
    box1 = new Box(800,540,70,70);
    box2 = new Box(1000,540,70,70);
    pig1 = new Pig(900, 540);
    log1 = new Log(900,500,280, PI/2);

    box3 = new Box(800,450,70,70);
    box4 = new Box(1000,450,70,70);
    pig2 = new Pig(900, 450);

    log3 =  new Log(900,410,280, PI/2);

    box5 = new Box(900,360,70,70);
    log4 = new Log(840,360,150, PI/7);
    log5 = new Log(960,360,150, -PI/7);
   
    bird = new Bird(270,170);

   // constraintLog1=new Log(230,180,80,PI/2);
    sling=new Slingshot(bird.body,{x:270,y:170});
    var canvasMouse=Mouse.create(canvas.elt);
    canvasMouse.pixelRatio=pixelDensity();
    var options={
        mouse:canvasMouse
    }
mConstraint=MouseConstraint.create(engine,options);
World.add(world,mConstraint);

}

function draw(){
   // if(backgroundImg)
    background(backgroundImg);
    pig1.score();
    pig2.score();
    textSize(30);
    fill("white");
    stroke("black");
    text("score" +score,width-300,50)
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    image(sling1Img,270,157);

    bird.display();

    image(sling2Img,245,157);
    platform.display();

    sling.display();
    if(gamestate === "launched"){
World.remove(world,mConstraint);
    }
}

//function mouseDragged(){
//Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});

//}

//function mouseReleased(){
//sling.fly();

//}
function mouseReleased(){
    setTimeout(function(){
        sling.fly();
    },150);
   gamestate= "launched"
    
    }

    function keyPressed(){
        if(keyCode===32){
            bird.trajectory=[]
            Matter.Body.setPosition(bird.body,{x:270,y:170});
            Matter.Body.setVelocity(bird.body,{x:0,y:0});
         sling.attach(bird.body); 
         Matter.Body.setAngle(bird.body,0);
         gamestate = "onsling";
         World.add(world,mConstraint);
        }
    }

    async function getBackgroundImage(){
        var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responsejson=await response.json();
        var datetime=responsejson.datetime;
        var hour=datetime.slice(11,13);
        var bg ;
        console.log(hour);
        if(hour>6 && hour<18 ){
            bg="sprites/bg.png"
        }

        else{
            bg="sprites/bg2.jpg"
        }
backgroundImg=loadImage(bg);
    }