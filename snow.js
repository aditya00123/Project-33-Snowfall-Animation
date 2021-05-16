class Snow {
    constructor(x,y) {
this.x = x;
this.y = y;
this.radius = 18;

var options = {
  frictionAir: 0.05,
  density: 0.001,
  restitution:0,
  friction:0.01,
  isStatic: false,
}

this.body = Bodies.circle(this.x,this.y,18,options);

this.image = loadImage('snow4.webp');
this.snow1 = loadImage('snow5.webp');

World.add(world, this.body);
    }

    display() {
        var rand = Math.round(random(1,2));

        switch(rand) {

            case 1: push();
                   translate(this.body.position.x,this.body.position.y);
                   angleMode(RADIANS);
                   rotate(PI/9);
                   image(this.image,0,0,36,36);
                   pop();
                   break;
            case 2: push();
                    translate(this.body.position.x,this.body.position.y);
                    angleMode(RADIANS);
                    rotate(PI/9);
                    image(this.snow1,0,0,36,36);
                    pop();
                    break;
            default: break;
        }

    }
}