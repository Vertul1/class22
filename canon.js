class canon{
   constructor(x,y,width,height,angle) {
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.angle=angle;
    this.canon_image=loadImage("assets/canon.png")
    this.canon_base=loadImage("assets/cannonBase.png")
   }
   display(){
    push()
    imageMode(CENTER)
    image(this.canon_image,this.x,this.y,this.width,this.height)
    pop()
    image(this.canon_base,70,20,200,200)
    noFill()
   }
}