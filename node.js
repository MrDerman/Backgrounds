function node(size, speed, c, img, pos) {
  this.size = size;
  this.c = c;
  this.speed = size / speed / 10;
  this.pos = pos;
  this.img = img;
  this.r = size;

  if (this.pos == null) {
    this.pos = createVector(random(0, windowWidth), 0 - size);
  }

  this.move = function () {
    this.pos.y += this.speed;
  };

  this.render = function () {
    push();
    noStroke();
    this.c = color(red(this.c), green(this.c), blue(this.c), 255);
    /*fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);*/
    tint(this.c);
    translate(this.pos.x, this.pos.y);
    rotate(this.r);
    image(this.img, 0, 0, this.size, this.size);
    pop();
  };

  this.alive = function () {
    if (this.pos.y < windowHeight + this.size) {
      return false;
    } else {
      return true;
    }
  };
}
