class PokemonTCGCatalogue {
  constructor() {
    this.API = 'https://api.pokemontcg.io';
    this.API_VERSION = 'v1';
    this.API_RESOURCE = 'cards';

    this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;
  }

  async initializeCatalogue() {
    console.log(parsedResponse);
  }

  // this function can fetch any data, you just pass url.
  async fetchData(url) {
    const response = await fetch(this.API_ENDPOINT);
    const parsedResponse = await response.json();
  }
}
