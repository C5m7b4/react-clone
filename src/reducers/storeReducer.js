import * as actions from '../actions/actionTypes';

const intitialState = {
  stores: [
    {
      storeid: 1,
      storeName: 'mikes grocery',
      state: 'tn',
    },
    {
      storeid: 2,
      storeName: 'tommy big mart',
      state: 'tn',
    },
    {
      storeid: 3,
      storeName: 'bens hookup center',
      state: 'mi',
    },
  ],
};

export const storeReducer = (state = intitialState, action) => {
  switch (action.type) {
    default:
      console.log('store reducer default behavior', state, action);
      return state;
  }
};
