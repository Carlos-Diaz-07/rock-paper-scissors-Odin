const startBtn = document.querySelector("#start-btn");
const btnContainer = document.querySelector(".btn-container");
const btnList = document.querySelectorAll(".btn-container");
const roundDisplay = document.querySelector("#round-display");
const winnerDisplay = document.querySelector("#winner-display");
const pcHand = document.querySelector("#pc-hand");
const gameOptions = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;
let draw = 0;

function computerPlay() {
	let optionNum = Math.floor(Math.random() * 3);
	return gameOptions[optionNum];
}

function gameRound(playerHand) {
	// need to change all alerts for changes in html w/ js
	let computerHand = computerPlay();
	if (playerHand.length == computerHand.length) {
		alert("draw again");
		draw++;
	} else if (
		playerHand.length > computerHand.length &&
		computerHand.length !== 4
	) {
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
		alert("You win!!, rock beats scissors");
	} else if (playerHand.length === 4 && computerHand.length !== 8) {
		computerWins++;
		alert("You lose!!, paper beats rock");
	} else {
		alert("Sorry, I don't know what's wrong");
	}
}

function whoWins() {
	if (playerWins + computerWins + draw === 5) {
		if (playerWins == computerWins) {
			draw = 0;
			computerWins = 0;
			playerWins = 0;
			return alert("WE HAVE A TIE");
		} else {
			draw = 0;
			computerWins = 0;
			playerWins = 0;
			return playerWins > computerWins
				? alert("You Win The Game")
				: alert("Computer Wins The Game");
		}
	}
}

function gameBtns() {
	let rockBtn = document.querySelector("#rock-btn");
	let paperBtn = document.querySelector("#paper-btn");
	let scissorsBtn = document.querySelector("#scissors-btn");

	rockBtn.addEventListener("click", () => {
		gameRound(gameOptions[0]);
		whoWins();
	});

	paperBtn.addEventListener("click", () => {
		gameRound(gameOptions[1]);
		whoWins();
	});

	scissorsBtn.addEventListener("click", () => {
		gameRound(gameOptions[2]);
		whoWins();
	});
}

startBtn.addEventListener("click", () => {
	startBtn.remove();
	btnContainer.innerHTML =
		'<button class="player-btn" id="rock-btn">Rock</button> <button class="player-btn" id="paper-btn">Paper</button> <button class="player-btn" id="scissors-btn">Scissors</button>';
	gameBtns();
});
