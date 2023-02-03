// Math.random()*2 returns a random number between 0 and 2:
function computerPlay() {
  let x = Math.random() * 2;
  x = Math.round(x);

  // ‘Rock’, ‘Paper’ or ‘Scissors’.
  switch (x) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
} //end of function computerPlay

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
   let msg = [];

  if (playerSelection == computerSelection) {
    msg[0] = "same selection , repeat";
    msg[1] = "";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    msg[0] = "Paper beats rock :You win";
    msg[1] = "You";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    msg[0] = "Paper beats rock :The computer wins";
    msg[1] = "Computer";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    msg[0] = "Scissors beats paper :You win";
    msg[1] = "You";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    msg[0] = "Scissors beats paper :The computer wins";
    msg[1] = "Computer";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    msg[0] = "Rock beats scissors :You win";
    msg[1] = "You";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    msg[0] = "Rock beats scissors :The computer wins";
    msg[1] = "Computer";
  } else {
    alert("You have spelling mistake");
    msg[0] = "";
  }
  return msg;
} //end of function playRound

function getOption() {
  var obj = document.getElementById("mySelect").value;
  const playerSelection = obj;
  const computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  document.getElementById("demo").innerHTML = result[0];
} //end of function getOption

function game() {
  let result = [];
  let option = "";
  let score = 0;
  for (i = 0; i < 5; i++) {
    option = prompt(
      "Enter your round " + (i + 1) + "  Rock, Paper or Scissors",
      ""
    );
    
    const playerSelection = option;
    const computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    if (result[1] == "You") {
      score++;
      console.log("Round " + (i + 1) + " you win");
    } else console.log("Round " + (i + 1) + " Computer  wins");
  }

  if (score >= 3) console.log("End of game you are the winner");
  else console.log("End of game you are the loser");
} //end of function gamesc
