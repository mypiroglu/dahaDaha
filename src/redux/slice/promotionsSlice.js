import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getPromotions} from '../../services';

const initialState = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const promotionsSlice = createSlice({
  name: 'promotionsSlice',
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
      .addCase(getPromotions.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPromotions.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.data = action.payload;
          state.error = false;
        } else {
          state.error = true;
        }
      })
      .addCase(getPromotions.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const {reset} = promotionsSlice.actions;
export default promotionsSlice.reducer;
