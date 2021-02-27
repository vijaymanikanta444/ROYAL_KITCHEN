import { combineReducers } from 'redux';
import items from './items';
import favourites from './favourites';
import users from './users';

export default combineReducers({
  items,
  favourites,
  users,
});
