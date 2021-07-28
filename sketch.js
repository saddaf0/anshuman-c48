var canvas;
var backgroundImage;

var database;
var form, player;
var playerCount;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  
}

function draw() {
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
