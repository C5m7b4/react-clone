const intitialState = {
  items: [
    {
      id: 1,
      upc: '4011',
      description: 'bananas',
    },
  ],
};

export const productReducer = (state = intitialState, action) => {
  switch (action.type) {
    default:
      console.log('store reducer default behavior');
      return state;
  }
};
