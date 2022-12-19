var nodes = [];
var colours = [];
var img;
var speedChange = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

var settings = {
  ammount: 35,
  size: 150,
  scale: 4,
  speed: 4,
  night: false,
  greenScreen: false,
  debug: false,
  old: false,
  circles: false,
};

var urlParams = new URLSearchParams(window.location.search);

//thanks frank
urlParams.forEach((value, key) => {
  try {
    settings[key] = JSON.parse(value);
  } catch {
    settings[key] = value;
  }
});

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (!settings["old"]) {
    if (settings["speed"] <= 10) {
      settings["speed"] = speedChange[settings["speed"] - 1];
    } else {
      settings["speed"] = 1;
    }
  }

  if (settings["circles"] == false) {
    img = loadImage(
      "https://raw.githubusercontent.com/MrDerman/Backgrounds/master/star.svg"
    );
  }

  settings["ammount"] = floor(
    ((width + height / 2) / 100 / 23) * settings["ammount"]
  );
  if (settings["night"]) {
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

  for (var i = 0; i < settings["ammount"]; i++) {
    pos = createVector(random(0, windowWidth), random(0, windowHeight));
    nodes.push(
      new node(
        random(settings["size"] / settings["scale"], settings["size"]),
        settings["speed"],
        colours[floor(random(0, colours.length))],
        img,
        settings["old"],
        pos
      )
    );
  }
}

function draw() {
  if (settings["greenScreen"]) {
    background(0, 255, 0);
  } else if (settings["night"]) {
    background(153, 173, 205);
  } else {
    background(255, 255, 255);
  }

  if (nodes.length < settings["ammount"]) {
    nodes.push(
      new node(
        random(settings["size"] / settings["scale"], settings["size"]),
        settings["speed"],
        colours[floor(random(0, colours.length))],
        img,
        settings["old"]
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

  if (settings["debug"]) {
    let fps = frameRate();
    if (fps < 30) {
      fill(255, 255, 0);
    } else if (fps < 59) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
    text(`FPS: ${fps.toFixed(2)} Nodes: ${nodes.length}`, 10, height - 10);
  }
}
