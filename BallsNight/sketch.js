var nodes = [];
var colours = [];
var minNodes = 35;
var tSize = 150;
var speed = 2;

function setup() {
  createCanvas(windowWidth,windowHeight);
  minNodes = round((floor((width + height / 2) / 100)/23) * minNodes);
  colours.push(color(144,96,139),color(69,141,184),color(80,143,174),color(122,111,153),color(99,125,167),color(133,138,120));
 
  for (var i = 0; i < minNodes; i++) {
    r = floor(random(0,6));
    pos = createVector(random(0,windowWidth), random (0,windowHeight));
    nodes.push(new node(tSize,speed,colours[r], pos));
  }
}

function draw() {
  background(153,173,205);
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