import * as types from '../actions/types';

const initilState = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Dum Biriyani',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fry Biriyani',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Dragon chicken',
  },
];

export default (state = initilState, action) => {
  switch (action.type) {
    case types.ADD_FAVOURITES:
      return state;

    default:
      return state;
  }
};
