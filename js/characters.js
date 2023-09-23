const listeDesPersonnage = document.querySelector(".listeDesPersonnage ul");

function displayCharacters() {
  fetch("./data/characters.json")
    .then((response) => response.json())
    .then((data) => {
      // Boucle à travers chaque personnage dans le fichier JSON
      data.characters.forEach((character) => {
        // Créez un élément de liste pour le personnage
        const li = document.createElement("li");
        li.classList.add("character");

        li.innerHTML = `
        <ul>
          <li class="nationality">${character.nationality}</li>
          <li class="class">${character.class}</li>
          <li class="description">Description : ${character.description}</li>
          <ul class="stats">
          <li class="hp">HP <br /> ${character.hp}</li>
          <li class="force">Force <br /> ${character.force}</li>
          <li class="agility">Agility <br /> ${character.agility}</li>
          <li class="intel">Intel <br /> ${character.intel}</li>
          <li class="charisma">Charisma <br /> ${character.charisma}</li>
          <li class="feeling">Feeling <br /> ${character.feeling}</li>
          </ul>
        </ul>
        <img src="./assets/characters/${character.class}.jpg" alt="${character.class}" />
      `;
        listeDesPersonnage.appendChild(li);
      });
    })
    .catch((error) =>
      console.error("Erreur lors du chargement du fichier JSON :", error)
    );
}
/* fetch("./data/characters.json")
  .then((response) => response.json())
  .then((data) => {
    // Boucle à travers chaque personnage dans le fichier JSON
    data.characters.forEach((character) => {
      // Créez un élément de liste pour le personnage
      const li = document.createElement("li");
      li.classList.add("character");

      li.innerHTML = `
        <ul>
          <li class="nationality">${character.nationality}</li>
          <li class="class">${character.class}</li>
          <li class="description">Description : ${character.description}</li>
          <ul class="stats">
          <li class="hp">HP <br /> ${character.hp}</li>
          <li class="force">Force <br /> ${character.force}</li>
          <li class="agility">Agility <br /> ${character.agility}</li>
          <li class="intel">Intel <br /> ${character.intel}</li>
          <li class="charisma">Charisma <br /> ${character.charisma}</li>
          <li class="feeling">Feeling <br /> ${character.feeling}</li>
          </ul>
        </ul>
        <img src="./assets/characters/${character.class}.jpg" alt="${character.class}" />
      `;

      listeDesPersonnage.appendChild(li);
    });
  })
  .catch((error) =>
    console.error("Erreur lors du chargement du fichier JSON :", error)
  );
 */
