import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { NavigationButtons } from "./components/NavButton/NavButton.js";
import { Pagination } from "./components/NavPagination/NavPagination.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
searchBarContainer.append(SearchBar());
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const buttons = NavigationButtons();
console.log(Pagination());
navigation.append(buttons.previous, Pagination(), buttons.next);
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let pageIndex = 1;
let searchQuery = "";
const fetchUrl = "https://rickandmortyapi.com/api/character";

fetchCharacters();

async function fetchCharacters() {
  cardContainer.innerHTML = "";
  try {
    const charactersResponse = await fetch(
      `${fetchUrl}?page=${pageIndex}&name=${searchQuery}`
    );

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
  } catch (error) {
    maxPage = 0;
    pageIndex = 0;
    pagination.innerHTML = `${pageIndex}/${maxPage}`;
    cardContainer.innerHTML = "No Data found";
  }
}

//next funtionality implementation

nextButton.addEventListener("click", handleNextButton);

function handleNextButton() {
  if (pageIndex < maxPage) {
    pageIndex++;
    fetchCharacters();
  }
}
//previous funtionality implementation

prevButton.addEventListener("click", handlePreviousButton);

function handlePreviousButton() {
  if (pageIndex > 1) {
    pageIndex--;
    fetchCharacters();
  }
}

//Searchfunctianality

searchBar.addEventListener("submit", handleSearchBar);

function handleSearchBar(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const data = Object.fromEntries(form);
  searchQuery = data.query;
  pageIndex = 1;
  fetchCharacters();
}
