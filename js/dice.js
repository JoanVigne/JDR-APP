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

/* Settings */
const settingDiceModal = document.querySelector(".settingDiceModal");
let minContainerDisplay = settingDiceModal.querySelector(".minDice");
let maxContainerDisplay = settingDiceModal.querySelector(".maxDice");
function settings() {
  console.log(" dice setting ");
  console.log("min et max", min, max);
  settingDiceModal.style.display =
    settingDiceModal.style.display === "none" ? "block" : "none";
  minContainerDisplay.innerHTML = min;
  maxContainerDisplay.innerHTML = max;
}

function validateInput(input) {
  if (input.value > 1000) {
    input.value = 999;
  }
}

const alltheDice = ["./assets/dice/dice.png", "./assets/dice/red-dice.png"];
const diceStyleContainer = settingDiceModal.querySelector(
  ".diceStyleContainer"
);

alltheDice.forEach((dice) => {
  let thisDice = document.createElement("img");
  thisDice.setAttribute("class", "diceStyle");
  thisDice.addEventListener("click", () => changeDice(dice));
  thisDice.src = dice;
  diceStyleContainer.append(thisDice);
});

function changeDice(dice) {
  diceImage.src = dice;
  console.log("dedans");
}
