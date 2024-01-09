import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {categoriesSlice, promotionsSlice} from './slice';

const reducer = combineReducers({
  categories: categoriesSlice,
  promotions: promotionsSlice,
});
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});
