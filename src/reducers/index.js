import { combineReducers } from 'redux';
import items from './items';
import favourites from './favourites';

export default combineReducers({
  items,
  favourites,
});
