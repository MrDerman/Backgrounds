var nodes = [];
var minNodes = 30;
var tSize = 150;
var speed = 2;
var c1; c2; c3; c4; c5; c6; c7;

function setup() {
  createCanvas(windowWidth,windowHeight);
  minNodes = round((floor((width + height / 2) / 100)/23) * minNodes);
  console.log(minNodes);
  c1 = color(249,153,186); //pink
  c2 = color(166,216,241); //light blue
  c3 = color(165,224,229); //blue
  c4 = color(224,173,203); //purple
  c5 = color(192,199,223); //purple2
  c6 = color(222,217,145); //yellow

  for (var i = 0; i < minNodes; i++) {
    r = floor(random(1,8));
    pos = createVector(random(0,windowWidth), random (0,windowHeight));
    if(r==1){
      nodes.push(new node(tSize,speed,c1, pos));
    }else if (r==2){
      nodes.push(new node(tSize,speed,c2, pos));
    }else if (r==3){
      nodes.push(new node(tSize,speed,c3, pos));
    }else if (r==4){
      nodes.push(new node(tSize,speed,c4, pos));
    }else if (r==5){
      nodes.push(new node(tSize,speed,c5, pos));
    }else if (r==6) {
      nodes.push(new node(tSize,speed,c6, pos));
    }
  }
}

function draw() {
  background(255,255,255);
  if(nodes.length < minNodes) {
    r = floor(random(1,7))
    if(r==1) {
      nodes.push(new node(tSize,speed,c1));
    }else if (r==2) {
      nodes.push(new node(tSize,speed,c2));
    }else if (r==3) {
      nodes.push(new node(tSize,speed,c3));
    }else if (r==4) {
      nodes.push(new node(tSize,speed,c4));
    }else if (r==5) {
      nodes.push(new node(tSize,speed,c5));
    }else if (r==6) {
      nodes.push(new node(tSize,speed,c6));
    }
  }
  
  for (var i = 0; i < nodes.length; i++) {
    if(nodes[i].alive()) {
      nodes.splice(i, 1);
    }
    nodes[i].render();
    nodes[i].move();
  }

}
