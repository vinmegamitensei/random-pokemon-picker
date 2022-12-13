export interface Sprites {
  front_default: string;
  front_shiny: string;
}

export interface Ability {
  ability: {
    name: string;
  };
}

export interface Move {
  move: {
    name: string;
  };
}

export interface Pokemon {
  name: string;
  ability: string;
  picture: string;
  moves: string[];
  types: string[];
}
