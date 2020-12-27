class Mango{
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            restitution:0,
            friction:1
        }
        this.x = x;
        this.r = r;
        this.y = y;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        this.image = loadImage("images/mango.png");
        World.add(world, this.body);
    }
    display(){
        var mangopos = this.body.position;
        push();
        scale(0.3);
        translate(mangopos.x, mangopos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        rectMode(CENTER);
        strokeWeight(5);

        pop();
    }
}