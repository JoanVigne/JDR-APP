const diceContainer = document.querySelector(".dice-container");
const diceImage = diceContainer.querySelector("img");
const resultContainer = diceContainer.querySelector("p");
const diceSettings = diceContainer.querySelector("button");

// show and hide the dice
const showDice = document.querySelector("#showDice");
showDice.addEventListener("click", () => {
  diceContainer.style.display =
    diceContainer.style.display === "grid" ? "none" : displayDice();
});

// Display functions
function displayDice() {
  diceContainer.style.display = "grid";
  diceImage.addEventListener("click", rollDice);
  diceSettings.addEventListener("click", settings);
}
function hideDice() {
  diceContainer.style.display = "none";
}
//* <-- --> *//

// rolling dice functions
function rollDice() {
  displayRollingNumbers();
}
let min = 0;
let max = 100;
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
//* <-- --> *//
function settings() {
  console.log(" dice setting ");
}
