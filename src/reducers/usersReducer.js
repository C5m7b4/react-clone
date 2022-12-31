import * as actions from '../actions/actionTypes';

const initialState = {
  users: [
    {
      id: 1,
      name: 'mike',
      job: 'developer',
    },
  ],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    default:
      return state;
  }
};
