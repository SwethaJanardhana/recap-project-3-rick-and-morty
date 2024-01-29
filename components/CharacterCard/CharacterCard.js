export function CharacterCard(cardData) {
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card__image-container">
      <img
        class="card__image"
        src=${cardData.src}
        alt="Rick Sanchez"
      />
      <div class="card__image-gradient"></div>
    </div>
    <div class="card__content">
      <h2 class="card__title">${cardData.name}</h2>
      <dl class="card__info">
        <dt class="card__info-title">Status</dt>
        <dd class="card__info-description">${cardData.status}</dd>
        <dt class="card__info-title">Type</dt>
        <dd class="card__info-description">${cardData.type}</dd>
        <dt class="card__info-title">Occurrences</dt>
        <dd class="card__info-description">${cardData.occurences}</dd>
      </dl>
    </div>`;
  return card;
}
