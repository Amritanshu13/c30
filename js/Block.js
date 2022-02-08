class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         this.image= loadImage("block.png")
        World.add(world, this.body);
        this.Visiblity=255
      }

      display(){

        var pos= this.body.position;
        imageMode(CENTER);

        if(this.body.speed <4){
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
        else{
console.log(this.body.speed)
          World.remove(world, this.body);
          push();
          
          //this.visiblity = 255;
          this.Visiblity = this.Visiblity-5;
          //this.visiblity = this.x;
          //this.visiblity = this.body.position.x;
        
          
          
          tint(255,this.Visiblity);
          image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
          pop();
        }


        }
}