const startBtn = document.querySelector("#start-btn");
const btnContainer = document.querySelector(".btn-container");
const roundDisplay = document.querySelector("#round-display");
const roundWinnerDisplay = document.querySelector("#round-winner-display");
const winnerDisplay = document.querySelector("#winner-display");
const pcHand = document.querySelector("#pc-hand");
const gameOptions = ["rock", "paper", "scissors"];
const scoreBoard = document.querySelector("#score");
let playerWins = 0;
let computerWins = 0;
let draw = 0;
let totalPlayerWins = 0;

function computerPlay() {
	let optionNum = Math.floor(Math.random() * 3);
	return gameOptions[optionNum];
}

function gameRound(playerHand) {
	let computerHand = computerPlay();
	pcHand.textContent = computerHand;
	if (playerHand.length == computerHand.length) {
		draw++;
		roundWinnerDisplay.textContent = "draw";
	} else if (
		playerHand.length > computerHand.length &&
		computerHand.length !== 4
	) {
		playerWins++;
		roundWinnerDisplay.textContent = "You win!!, scissors beat paper";
	} else if (computerHand.length === 4 && playerHand.length != 5) {
		computerWins++;
		roundWinnerDisplay.textContent = "You lose!!, rock beats scissors";
	} else if (playerHand.length === 5 && computerHand.length !== 8) {
		playerWins++;
		roundWinnerDisplay.textContent = "You win!!, paper beat rock";
	} else if (playerHand.length === 5 && computerHand.length === 8) {
		computerWins++;
		roundWinnerDisplay.textContent = "You lose!!, scissors beat paper";
	} else if (playerHand.length === 4 && computerHand.length === 8) {
		playerWins++;
		roundWinnerDisplay.textContent = "You win!!, rock beats scissors";
	} else if (playerHand.length === 4 && computerHand.length !== 8) {
		computerWins++;
		roundWinnerDisplay.textContent = "You lose!!, paper beats rock";
	} else {
		roundWinnerDisplay.textContent = "Sorry, I don't know what's wrong";
	}
}

function whoWins() {
	roundDisplay.textContent = draw + playerWins + computerWins;

	if (playerWins + computerWins + draw === 5) {
		if (playerWins == computerWins) {
			draw = 0;
			computerWins = 0;
			playerWins = 0;
			return (winnerDisplay.textContent = "WE HAVE A TIE");
		} else {
			return playerWins > computerWins
				? (winnerDisplay.textContent = "You Win The Game")
				: (winnerDisplay.textContent = "Computer Wins The Game");
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
	roundDisplay.textContent = draw;
	btnContainer.innerHTML =
		'<button class="player-btn" id="rock-btn">Rock</button> <button class="player-btn" id="paper-btn">Paper</button> <button class="player-btn" id="scissors-btn">Scissors</button>';
	gameBtns();
});
