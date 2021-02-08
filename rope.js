class Rope{
    constructor(bodyA,bodyB, offsetX, offsetY){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
           
            stiffness:0.04,
            length:10
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(2);
        var Anchor1X=pointA.x
        var Anchor1Y=pointA.y

        var Anchor2X=pointB.x+this.offsetX
        var Anchor2Y=pointB.y+this.offsetY

        line(pointA.x,pointA.y,pointB.x,pointB.y);
    
    }
}