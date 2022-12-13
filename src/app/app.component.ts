import { Component } from '@angular/core';
import { FormatPokemonData } from './helpers/format-pokemon-data';
import { NumberHandler } from './helpers/number-handler';
import { FetchPokemonService } from './services/fetch-pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Random Pokémon!';
  pokemonData: any;
  constructor(
    private _pokemonService: FetchPokemonService,
    private _pokemonDataHandler: FormatPokemonData,
    private _numberHandler: NumberHandler
  ) {}

  private fetchPokemonData(id: number = 1) {
    this._pokemonService.getPokemon(id).subscribe((res) => {
      this.pokemonData = this._pokemonDataHandler.formatPokemonData(res);
      console.log(res);
    });
  }

  fetchRandomPokemonData() {
    this.fetchPokemonData(this._numberHandler.generateRandomValue(905));
  }

  ngOnInit() {
    this.fetchRandomPokemonData();
  }
}
