import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  categoriesSlice,
  promotionsSlice,
  promotionDetailSlice,
  filteredPromotionSlice,
} from './slice';

const reducer = combineReducers({
  categories: categoriesSlice,
  promotions: promotionsSlice,
  promotionDetail: promotionDetailSlice,
  filteredPromotion: filteredPromotionSlice,
});
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});
