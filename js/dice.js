const diceContainer = document.querySelector(".dice-container");
const diceImage = diceContainer.querySelector("img");
const resultContainer = diceContainer.querySelector("p");
const diceSettings = diceContainer.querySelector("button");

function displayDice() {
  diceContainer.style.display = "grid";
  diceImage.src = "./assets/dice.png";
  diceImage.addEventListener("click", rollDice);
  diceSettings.addEventListener("click", settings);
}

function rollDice() {
  displayRollingNumbers();
}
const min = 0;
const max = 100;
function getRandomNumber() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function displayRollingNumbers() {
  for (let i = 0; i <= max; i++) {
    setTimeout(() => {
      const randomNumber = getRandomNumber();
      resultContainer.textContent = `${randomNumber}`;
      if (i === max) {
        displayResult();
      }
    }, i * 20);
  }
}
function displayResult() {
  const randomNumber = getRandomNumber();
  resultContainer.textContent = `${randomNumber}`;
}

function settings() {
  console.log(" dice setting ");
}
