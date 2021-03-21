var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var Score = 0
var Erocs = 0

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
// create the variables for the score and displaying scores. and intialize with zero

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
  
   text("Player1: "+Score, 10, 10)
   text("Player2: "+Score, 10, 20)
   if (gameState === 1) {
     clear(); 
     game.play();
     if (player1.isTouching(fruitGroup)){
      Score = Score + 1
    }
    if (player1.isTouching(fruitGroup))
     Erocs = Erocs + 1 
    }
    if(keyDown(RIGHT_ARROW)){
player1.x = player.x + 10
    }
    if(keyDown(LEFT_ARROW)){
player1.x = player.x - 10
    }
    if(keyDown(d)){
player2.x = player2.x + 10
    }
    if(keyDown(a)){
player2.x = player2.x - 10
    }
    }
   if (gameState === 2) {
    
     game.end();
   }
}