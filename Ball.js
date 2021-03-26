class Ball
{
    constructor(x, y, r)
    {
        var options = {
            isStatic:false,
            resitiution:0.3,
            friction:0.5,
            density:1.2
        }
        
        
        this.x = x;
        this.y = y;
        this.r = r;  
        this.body=Bodies.circle(this.x, this.y,this.r/1.5, options);
        

        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill ("green");
        circle(0, 0, this.r)
        pop ();
       

    }
}