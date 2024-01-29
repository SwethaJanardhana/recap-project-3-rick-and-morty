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
const maxPage = 1;
const page = 1;
const searchQuery = "";

fetchCharacters();

async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api");
  const data = await response.json();
  const charactersResponse = await fetch(data.characters);
  const characters = await charactersResponse.json();

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
