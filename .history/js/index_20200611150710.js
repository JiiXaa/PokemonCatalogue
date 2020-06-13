class PokemonTCGCatalogue {
  constructor() {
    this.cards = [];

    this.catalogue = null;

    this.API = 'https://api.pokemontcg.io';
    this.API_VERSION = 'v1';
    this.API_RESOURCE = 'cards';

    this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;

    this.UiSelectors = {
      content: '[data-content]',
    };
  }

  async initializeCatalogue() {
    this.catalogue = document.querySelector(this.UiSelectors.content);

    this.pullCards();
  }

  async pullCards() {
    const { cards } = await this.fetchData(this.API_ENDPOINT);

    this.cards = [...cards];

    this.createCatalogue(this.cards);

    console.log(cards);
  }

  // this function can fetch any data, you just pass url.
  async fetchData(url) {
    const response = await fetch(url);
    const parsedResponse = await response.json();

    return parsedResponse;
  }

  createCatalogue(cards) {
    this.catalogue.innerHTML += [
      cards.map((card) => this.createCard(card).join('')),
    ];
  }

  createCard({ name, number, imageUrl, supertype, subtype, rarity }) {
    return `
      <article class="card">
        <header class="card__header">
          <h2 class="card__heading">
            ${name}
          </h2>
          <p class="card__number">${number}</p>
        </header>
        <img class="card__image" src="${imageUrl}" alt="${name}">
        <p class="card__description">Supertype: ${supertype}</p>
        <p class="card__description">Subtype: ${subtype}</p>
        <p class="card__description">Rarity: ${rarity}</p>
      </article>
    `;
  }
}
