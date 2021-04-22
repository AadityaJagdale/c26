class Slingshot{
constructor(body1,pointB){
var options={
    bodyA :body1,
    pointB :pointB,
    length :10,
    stiffness:0.04
}

this.sling3Img=loadImage("sprites/sling3.png");

this.slingshot=Constraint.create(options);
World.add(world, this.slingshot);

}

display(){
    if(this.slingshot.bodyA){
var pointA=this.slingshot.bodyA.position;
var pointB=this.slingshot.pointB;
stroke(48,22,8);

if(pointA.x<270){
    strokeWeight(7);
line(pointA.x-20,pointA.y,pointB.x-20,pointB.y+15);
line(pointA.x-20,pointA.y,pointB.x+20,pointB.y+15);

image(this.sling3Img,pointA.x-30,pointA.y-15,15,30);
}

else if(pointA.x>275){
    strokeWeight(3);
    line(pointA.x+20,pointA.y+5,pointB.x-10,pointB.y+15);
    line(pointA.x+20,pointA.y+5,pointB.x+30,pointB.y+15);
    
   image(this.sling3Img,pointA.x+20,pointA.y-10,15,30);



}
    }
}

fly(){
this.slingshot.bodyA=null;

}

attach(body1){
this.slingshot.bodyA=body1
}






}
