interface Info {
  next: number;
  count: number;
  pages: number;
}

export interface CharactersData {
  results: Character[];
  info: Info;
}

export interface CharactersQuery {
  characters: CharactersData;
}

export interface CharactersQueryVars {
  page?: number;
  filter?: {
    name: string;
  };
}

export interface Character {
  id: number;
  name: string;
  image: string;
}
