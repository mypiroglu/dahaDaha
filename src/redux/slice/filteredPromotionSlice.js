import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getFilteredPromotion} from '../../services';

const initialState = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const filteredPromotionSlice = createSlice({
  name: 'filteredPromotionSlice',
  initialState,
  reducers: {
    reset: state => {
      state.data = undefined;
      state.isLoading = false;
      state.error = undefined;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFilteredPromotion.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFilteredPromotion.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.data = action.payload;
          state.error = false;
        } else {
          state.error = true;
        }
      })
      .addCase(getFilteredPromotion.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const {reset} = filteredPromotionSlice.actions;
export default filteredPromotionSlice.reducer;
