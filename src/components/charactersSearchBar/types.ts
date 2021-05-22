import {ViewStyle} from 'react-native';

export interface CharactersSearchBarStyles {
  container: ViewStyle;
  searchField: ViewStyle;
}

export interface CharactersSearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
