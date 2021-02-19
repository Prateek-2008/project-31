class Drop{
    constructor(x,y){
        
        var options= {
            isStatic:false
        }
        
        this.body= Bodies.circle(x,y,10,options)
        this.radius=10;
        World.add(world,this.body);
  
       

    }

    update (){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }

    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS);
        fill("blue"); 
        ellipse(0,0,this.radius);

        

        
        pop();
    }

    
}

