class Paper{
    constructor(x,y,r){

		var options={
			isStatic:false,
			restitution:0.3,
			friction:1,
			density:1.2

			
			}
        this.x = x;
        this.y = y;
        this.radius = r;
        
        this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2, options)
        World.add(world,this.body);
        this.image = loadImage("paper (1).png");
    }

    display(){

        var paperpos=this.body.position;		

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0,0,this.radius, this.radius)
        //ellipse(0,0,this.r, this.r);
        pop()
        
    }
}