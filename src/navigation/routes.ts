import CharacterDetails from '../screens/characterDetails';
import Characters from '../screens/characters';
import {route} from './types';

export const ROUTES: route[] = [
  {
    name: 'characters',
    component: Characters,
  },
  {
    name: 'characterDerails',
    component: CharacterDetails,
  },
];
