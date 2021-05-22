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
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  episode: string;
  url: string;
  created: string;
}
