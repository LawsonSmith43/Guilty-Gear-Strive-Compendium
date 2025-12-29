document.querySelectorAll(".CharacterList li").forEach(item => {
    item.addEventListener("click", () => {
        const key = item.dataset.character;
        const char = characters[key];

        updateCharacter(char);
    });

  function updateCharacter(char) {
  const container = document.querySelector(".CharacterContent");

  container.classList.add("hidden");

  setTimeout(() => {
    nameEl.textContent = char.name;
    imgEl.src = char.image;
    loreEl.textContent = char.lore;

    container.classList.remove("hidden");
  }, 300);
 }

 

});