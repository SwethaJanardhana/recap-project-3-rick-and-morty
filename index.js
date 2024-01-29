import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let pageIndex = 1;
const searchQuery = "";
const fetchUrl = "https://rickandmortyapi.com/api/character";

cardContainer.innerHTML = "";
fetchCharacters();

async function fetchCharacters() {
  const charactersResponse = await fetch(`${fetchUrl}?page=${pageIndex}`);

  const characters = await charactersResponse.json();
  const pageInfo = characters.info;
  maxPage = pageInfo.pages;
  pagination.innerHTML = `${pageIndex}/${maxPage}`;

  characters.results.forEach((character) => {
    const cardData = {
      src: character.image,
      name: character.name,
      status: character.status,
      type: character.type,
      occurences: character.episode.length,
    };
    cardContainer.append(CharacterCard(cardData));
  });
}

//next funtionality implementation

nextButton.addEventListener("click", () => {
  if (pageIndex < maxPage) {
    pageIndex++;
    cardContainer.innerHTML = "";
    fetchCharacters();
  }
});

//previous funtionality implementation

prevButton.addEventListener("click", () => {
  if (pageIndex > 1) {
    pageIndex--;
    cardContainer.innerHTML = "";
    fetchCharacters();
  }
});
