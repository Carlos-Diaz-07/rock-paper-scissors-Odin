let gameOptions = ["rock", "paper", "scissors"]
    
    function computerPlay() {
      let optionNum = Math.floor(Math.random() * 3);
      return gameOptions[optionNum];
    }

    function playerPlay() {
      let playerOption = prompt('rock, paper or scissors?', '');
      playerOption.toLowerCase();
      return playerOption == "rock" ? gameOptions[0]
            : playerOption == "paper" ? gameOptions[1]
            : playerOption == "scissors" ? gameOptions[2]
            : alert("Sorry, I didn't get that");
    }

    function gameRound() {
      let playerHand = playerPlay();
      let computerHand = computerPlay();
       if (playerHand.length == computerHand.length) {
         alert("draw again");
       } else if (playerHand.length > computerHand.length && computerHand.length !== 4) {
         playerWins++;
         alert("You win!!, scissors beat paper");
       } else if (computerHand.length === 4 && playerHand.length != 5) {
         computerWins++;
         alert("You lose!!, rock beats scissors");
       } else if (playerHand.length === 5 && computerHand.length !== 8) {
        playerWins++;
         alert("You win!!, paper beat rock");
       } else if (playerHand.length === 5 && computerHand.length === 8) {
        computerWins++;
         alert("You lose!!, scissors beat paper");
       } else if (playerHand.length === 4 && computerHand.length === 8) {
        playerWins++;
         alert("You win!!, rock beats scissors")
       } else if (playerHand.length === 4 && computerHand.length !== 8) {
        computerWins++;
         alert("You lose!!, paper beats rock")
       } else {
         alert("Sorry, I don't know what's wrong");
       }
    }

  function game() {
    playerWins = 0;
    computerWins = 0;
    for (rounds = 0; rounds < 5; rounds++) {
      gameRound();
    }
    if (playerWins == computerWins) {
      return alert("WE HAVE A TIE")
    } else {
    return playerWins > computerWins
      ? alert("You Win The Game")
      : alert("Computer Wins The Game");
    };
  }