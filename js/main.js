const startButton = document
  .querySelector("#startButton")
  .addEventListener("click", start);

function isAGameRecored() {
  const recordGame = localStorage.getItem("recordGame");
  console.log(recordGame);
  if (recordGame !== null) {
    start();
  }
}

function start() {
  displayCharacters();
}
