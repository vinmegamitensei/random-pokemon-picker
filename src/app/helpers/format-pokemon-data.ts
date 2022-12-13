import { Injectable } from '@angular/core';
import { Sprites, Ability, Move, Pokemon } from '../types/pokemon.type';
import { NumberHandler } from './number-handler';

@Injectable({
  providedIn: 'root',
})
export class FormatPokemonData {
  constructor(private _numberHandler: NumberHandler) {}

  private getPokemonAbility(abilities: Ability[]): string {
    return abilities[this._numberHandler.generateRandomValue(abilities.length)]
      .ability.name;
  }

  private getPokemonMoves(movelist: Move[]): string[] {
    let selectedMoves: string[] = [];
    for (let moves = selectedMoves.length; moves < 4; moves++) {
      const currentMove = movelist.splice(
        this._numberHandler.generateRandomValue(movelist.length),
        1
      );
      selectedMoves.push(currentMove[0].move.name);
    }
    return selectedMoves;
  }

  private getPokemonSprite(spriteList: Sprites): string {
    const isShiny = this._numberHandler.generateRandomValue(8192) === 1;
    return isShiny ? spriteList.front_shiny : spriteList.front_default;
  }

  public formatPokemonData(pokemonServiceData: any): Pokemon {
    return {
      name: pokemonServiceData.name,
      ability: this.getPokemonAbility(pokemonServiceData.abilities),
      moves: this.getPokemonMoves(pokemonServiceData.moves),
      picture: this.getPokemonSprite(pokemonServiceData.sprites),
      types: ['grass'],
    };
  }
}
