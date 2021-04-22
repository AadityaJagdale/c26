class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity=255;
  }

  display(){

    if(this.body.speed<5){
      super.display();
    }
else{
  World.remove(world,this.body)
  //push()
  tint(255,this.visiblity);
  this.visiblity=this.visiblity-5;
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  noTint();
 
}
//console.log(this.body.speed);

  }

  score(){
    if(this.visiblity<0 && this.visiblity>-1005){
      score=score+1;
    }
  }

};