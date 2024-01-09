import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getPromotionDetail} from '../../services';

const initialState = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const promotionDetailSlice = createSlice({
  name: 'promotionDetailSlice',
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
      .addCase(getPromotionDetail.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPromotionDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.data = action.payload;
          state.error = false;
        } else {
          state.error = true;
        }
      })
      .addCase(getPromotionDetail.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const {reset} = promotionDetailSlice.actions;
export default promotionDetailSlice.reducer;
