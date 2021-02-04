class paper {
	constructor(x, y, radius) {
	  var options = {
		isStatic:false,
		  restitution:0.1,
		  friction:1.5,
		  density:1.2
	  }
	  this.image = loadImage("paper.png");
	  this.body = Bodies.circle(x, y, radius, options);
	 // this.width = width;
	  //this.height = height;
	  this.radius = radius;
	  
	  World.add(world, this.body);
	}
	display(){
	  var pos =this.body.position;
	  var angle = this.body.angle;
	  push();
	  translate(pos.x, pos.y);
	  rotate(angle);
	  imageMode(CENTER);
	 // fill("red");
	  image(this.image,0, 0, 40, 50);
	  ellipse(10, 10, 1);
	  pop();
	}
  };
  