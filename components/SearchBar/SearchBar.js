export function SearchBar(prop) {
  const formElement = document.createElement("form");
  formElement.classList.add("search-bar");
  formElement.addEventListener("submit", prop.onSubmit);
  formElement.innerHTML = `
    <input
      name="query"
      class="search-bar__input"
      type="text"
      placeholder="search characters"
      aria-label="character name"
    />
    <button class="search-bar__button" aria-label="search for character">
      <img
        class="search-bar__icon"
        src="assets/magnifying-glass.png"
        alt=""
      />
    </button>
  `;
  return formElement;
}
