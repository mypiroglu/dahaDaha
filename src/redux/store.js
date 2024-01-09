import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {categoriesSlice, promotionsSlice, promotionDetailSlice} from './slice';

const reducer = combineReducers({
  categories: categoriesSlice,
  promotions: promotionsSlice,
  promotionDetail: promotionDetailSlice,
});
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});
