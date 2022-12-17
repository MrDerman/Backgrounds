var nodes = [];
var colours = [];
var minNodes = 35;
var nodeSize = 150;
var nodeSizeMulti = 4;
var nodeSpeed = 4;
var night = false;
var greenScreen = false;
var debug = false;
var old = false;
var circes = false;
var search = window.location.search.replace("?", "");
var settings = search.split("+");
var img;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (settings.length > 0) {
    for (var i = 0; i < settings.length; i++) {
      if (settings[i].includes("size")) {
        nodeSize = settings[i].split("=")[1];
      } else if (settings[i].includes("speed")) {
        nodeSpeed = settings[i].split("=")[1];
      } else if (settings[i].includes("night")) {
        night = settings[i].split("=")[1];
      } else if (settings[i].includes("greenscreen")) {
        greenScreen = settings[i].split("=")[1];
      } else if (settings[i].includes("min")) {
        minNodes = settings[i].split("=")[1];
      } else if (settings[i].includes("debug")) {
        debug = settings[i].split("=")[1];
      } else if (settings[i].includes("old")) {
        old = settings[i].split("=")[1];
      } else if (settings[i].includes("circles")) {
        circes = settings[i].split("=")[1];
      }
    }
  }

  if (circes == false) {
    img = loadImage(
      "https://raw.githubusercontent.com/MrDerman/Backgrounds/master/star.svg"
    );
  }

  minNodes = floor(((width + height / 2) / 100 / 23) * minNodes);
  if (night) {
    colours.push(
      color(144, 96, 139),
      color(69, 141, 184),
      color(122, 111, 153),
      color(99, 125, 167)
    );
  } else {
    colours.push(
      color(249, 153, 186),
      color(166, 216, 241),
      color(222, 217, 145)
    );
  }

  if (old == false) {
    nodeSpeed = nodeSize / nodeSpeed / 10;
  }

  for (var i = 0; i < minNodes; i++) {
    pos = createVector(random(0, windowWidth), random(0, windowHeight));
    nodes.push(
      new node(
        random(nodeSize / nodeSizeMulti, nodeSize),
        nodeSpeed,
        colours[floor(random(0, colours.length))],
        img,
        pos
      )
    );
  }
}

function draw() {
  if (greenScreen) {
    background(0, 255, 0);
  } else if (night) {
    background(153, 173, 205);
  } else {
    background(255, 255, 255);
  }

  if (nodes.length < minNodes) {
    nodes.push(
      new node(
        random(nodeSize / nodeSizeMulti, nodeSize),
        nodeSpeed,
        colours[floor(random(0, colours.length))],
        img
      )
    );
  }

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].alive()) {
      nodes.splice(i, 1);
    }
    nodes[i].render();
    nodes[i].move();
  }

  if (debug) {
    let fps = frameRate();
    if (fps < 30) {
      fill(255, 255, 0);
    } else if (fps < 59) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
    text("FPS: " + fps.toFixed(2) + " Nodes: " + nodes.length, 10, height - 10);
  }
}
