import * as types from '../actions/types';
import AllItems from '../jsons/allItems.json';

// const temp = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto'],
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer'],
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream'],
//   },
// ];
let data = AllItems.reduce(
  (a, c) => ({ ...a, [c.category]: [...(a[c.category] || []), c] }),
  {}
);
// console.log('test298', data);
let initialState = Object.keys(data).map((key) => ({
  title: key,
  data: data[key],
}));
// console.log('test398', initialState);
export default (state = initialState, action) => {
  // console.log('test98', state);
  switch (action.type) {
    case types.ADD_ITEM:
      return state;

    default:
      return state;
  }
};
