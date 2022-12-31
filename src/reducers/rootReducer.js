import { storeReducer } from './storeReducer';
import { productReducer } from './productReducer';
import { usersReducer } from './usersReducer';
import { combineReducers } from '../redux';

export const rootReducer = combineReducers({
  storeReducer,
  productReducer,
  usersReducer,
});
