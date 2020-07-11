var userClickedPattern = [];

var buttonColors = ["red" , "blue" , "green" , "yellow"];

var gamePattern = [];

var started= false;

var level = 0;
function nextSequence()
{
    userClickedPattern = [];

 var randomNumber = Math.floor(Math.random()*4);

level++;
$("#level-title").text("Level "+level);

var randomChosenColor = buttonColors[randomNumber];

gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


playsound(randomChosenColor);




}

$(".btn").click(function ()
{
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playsound(userChosenColor);

  animatePress(userChosenColor);

  setTimeout(deAnimateColor,100,userChosenColor);

  checkAnswer((userClickedPattern.length)-1);


});

function playsound( name )
{
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor)
{
 $("#"+currentColor).addClass("pressed");

}
function deAnimateColor(currentColor)
{
   $("#"+currentColor).removeClass("pressed");
}




$(document).keypress(function()
{

  if(!started)
  {
    $("h1").text("level 0");
    nextSequence();
    started = true;

  }


});


function checkAnswer(currentLevel)
{
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
  {
    console.log("success");


    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    playsound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    startOver();

  }
}

function startOver()
{
  level = 0;
  gamePattern = [];
  started = false;
}
