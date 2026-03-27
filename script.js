const guessInput = document.getElementById("guess");
const checkButton = document.getElementById("check-btn");
const resetButton = document.getElementById("reset-btn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

let secretNumber = generateRandomNumber();
let attempts = 0;
let hasWon = false;

function generateRandomNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

function setMessage(text, tone) {
	message.textContent = text;
	message.classList.remove("success", "warning");

	if (tone) {
		message.classList.add(tone);
	}
}

function checkGuess() {
	const guessedValue = Number(guessInput.value);

	if (!Number.isInteger(guessedValue) || guessedValue < 1 || guessedValue > 100) {
		setMessage("Entrez un nombre valide entre 1 et 100.", "warning");
		return;
	}

	if (hasWon) {
		setMessage("Vous avez deja gagne. Cliquez sur Rejouer.", "success");
		return;
	}

	attempts += 1;
	attemptsDisplay.textContent = String(attempts);

	if (guessedValue === secretNumber) {
		hasWon = true;
		setMessage(`Bravo ! Vous avez trouve en ${attempts} essai(s).`, "success");
		return;
	}

	if (guessedValue < secretNumber) {
		setMessage("Trop petit. Essayez un nombre plus grand.", "warning");
	} else {
		setMessage("Trop grand. Essayez un nombre plus petit.", "warning");
	}
}

function resetGame() {
	secretNumber = generateRandomNumber();
	attempts = 0;
	hasWon = false;

	attemptsDisplay.textContent = "0";
	guessInput.value = "";
	setMessage("Nouvelle partie ! Bonne chance !");
	guessInput.focus();
}

checkButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
guessInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		checkGuess();
	}
});
