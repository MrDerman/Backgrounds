var nodes = [];
var colours = [];
var minNodes = 35;
var tSize = 150;
var speed = 2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  minNodes = round((floor((width + height / 2) / 100)/23) * minNodes);
  colours.push(color(249,153,186),color(166,216,241),color(165,224,229),color(222,217,145),color(224,173,203),color(192,199,223));

  for (var i = 0; i < minNodes; i++) {
    r = floor(random(0,6));
    pos = createVector(random(0,windowWidth), random (0,windowHeight));
    nodes.push(new node(tSize,speed,colours[r], pos));
  }
}

function draw() {
  background(255,255,255);
  if(nodes.length < minNodes) {
    r = floor(random(0,6));
    nodes.push(new node(tSize,speed,colours[r]));
  }
  
  for (var i = 0; i < nodes.length; i++) {
    if(nodes[i].alive()) {
      nodes.splice(i, 1);
    }
    nodes[i].render();
    nodes[i].move();
  }
}