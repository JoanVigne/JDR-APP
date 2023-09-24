const showCharacter = document.querySelector("#showCharacter");
showCharacter.addEventListener("click", start);

function isAGameRecored() {
  const recordGame = localStorage.getItem("recordGame");
  console.log(recordGame);
  if (recordGame !== null) {
    start();
  }
}

function start() {
  displayCharacters();
  showCharacter.removeEventListener("click", start);
  showCharacter.textContent = "Hide characters";

  showCharacter.addEventListener("click", () => {
    hideCharacters();
    showCharacter.textContent = "Show characters";
    showCharacter.addEventListener("click", start);
  });
}
