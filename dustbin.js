class Dustbin{
    constructor(x,y,w,h){

        var options = {
            'isStatic' : true
        }
        this.x = x;
        this.y = y;
        this.width= w;
        this.height = h;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
        this.image = loadImage("dustbingreen.png");

    }

    display(){
        //rectMode(CENTER);
        var pos = this.body.position;
        fill("red");
        imageMode(CENTER);
        //rect(this.body.position.x,this.body.position.y,this.width,this.height);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}