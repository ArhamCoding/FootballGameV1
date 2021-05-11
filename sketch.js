var canvas, backgroundImage;


var football_img;
var footballgoal_img;
var footballkeeper_img;
var kickingball_img;
var kickingfootballer_img;
var footballerstanding_img;


var footballer;
var goal

function preload(){

  football_img = loadImage("images/football.jpeg");
  footballgoal_img = loadImage("images/footballgoal.png");
  footballkeeper_img = loadImage("images/footballkeeper.jpeg");
  kickingfootball_img = loadAnimation("images/kickingfootballer1122 copy.png")
  footballerstanding_img = loadAnimation("images/footballerstanding.png")



}

function setup(){
  canvas = createCanvas(1000,800);

  
  footballer = createSprite (displayWidth/2+100,displayHeight-300, 200, 200);

  footballer.scale = 0.8

  footballer.addAnimation("standing", footballerstanding_img);
  footballer.addAnimation("kicking", kickingfootballer_img);

  goal = createSprite (displayWidth/2-100, 120, 400, 250)
  goal.addImage("goal", footballgoal_img);
  goal.scale = 1.8

  ball = createSprite (displayWidth/2-50, displayHeight/2+120, 60,60);
  ball.addImage ("ball", football_img);
  ball.scale = 0.4;




}


function draw(){
  background ("green");
  drawSprites();

}

function keyPressed (){
  if (keyCode === 32){
    footballer.changeAnimation ("kicking",kickingfootball_img);
  }
}