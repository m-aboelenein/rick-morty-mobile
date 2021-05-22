export interface CharacterDetailsQuery {
  character: Character;
}

export interface Episode {
  id: string;
  name: string;
  air_date: string;
}

export interface CharacterDetailsQueryVars {
  id: string;
}

export interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
  episode: Episode[];
}
