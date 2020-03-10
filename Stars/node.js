function node (size,speed,c,pos,) {
  this.size = size;
  this.c = c;
  this.speed = random(speed/2, speed);
  this.pos = pos;
  this.r = random(size/3,size);
  this.img = loadImage("https://raw.githubusercontent.com/MrDerman/Backgrounds/master/Star50x.png");

  if(this.pos == null) {
    this.pos = createVector(random(0,windowWidth),0 - size)
  }

  this.move = function() {
    this.pos.y += this.speed;
  }

  this.render = function() {
    this.c = color(red(this.c),green(this.c),blue(this.c));
    push();
    tint(this.c);
    image(this.img,this.pos.x, this.pos.y, this.r, this.r);
    pop();
  }

  this.alive = function() {
    if(this.pos.y < (windowHeight+this.size)){
      return false;
    }else{
      return true;
    }
  }

}
