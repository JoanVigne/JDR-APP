document.addEventListener("DOMContentLoaded", () => {
  const fetchDataButton = document.getElementById("fetchDataButton");

  fetchDataButton.addEventListener("click", () => {
    fetch("http://localhost:3000/votre-endpoint")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Affichez la réponse dans la console
      })
      .catch((error) => {
        console.error("Erreur de requête :", error);
      });
  });
});
