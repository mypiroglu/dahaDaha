import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {categoriesSlice} from './slice';

const reducer = combineReducers({
  categories: categoriesSlice,
});
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});
