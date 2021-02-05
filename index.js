var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages1 = "images/dice" + randomNumber1 + ".png";
var imageLeft = document.querySelectorAll("img")[0];
imageLeft.setAttribute("src", randomDiceImages1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImages2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImages2);

function whoWins()
{
    // document.querySelector("h1").innerHTML = "refreshing";
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  setTimeout(function()
  {
    document.querySelector("h1").innerHTML = "Refresh Me !!";
  },10000);

}

whoWins();
