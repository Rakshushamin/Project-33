class Snow{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.1,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.image = loadImage("snow4.webp");
        this.body = Bodies.rectangle(this.x,this.y,options);    
        World.add(world, this.body);
      }
     
      display()
      {
        //var pos =this.body.position;
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0);
        pop();
      }  
}
