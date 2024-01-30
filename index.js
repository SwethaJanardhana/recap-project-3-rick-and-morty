import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { NavigationButtons } from "./components/NavButton/NavButton.js";
import { Pagination } from "./components/NavPagination/NavPagination.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

const searchBar = SearchBar({ onSubmit: handleSearchBar });
searchBarContainer.append(searchBar);

const prevButton = NavigationButtons({
  eventType: "prev",
  onClick: handlePreviousButton,
});
const nextButton = NavigationButtons({
  eventType: "next",
  onClick: handleNextButton,
});

const pagination = Pagination();
navigation.append(prevButton, pagination, nextButton);
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

//Searchfunctianality

function handleSearchBar(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const data = Object.fromEntries(form);
  searchQuery = data.query;
  pageIndex = 1;
  fetchCharacters();
}

//next funtionality implementation
function handleNextButton() {
  if (pageIndex < maxPage) {
    pageIndex++;
    fetchCharacters();
  }
}

//Previous functionality
function handlePreviousButton() {
  if (pageIndex > 1) {
    pageIndex--;
    fetchCharacters();
  }
}
