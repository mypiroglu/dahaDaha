import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCategories} from '../../services';

const initialState = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
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
      .addCase(getCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          state.data = action.payload;
          state.error = false;
        } else {
          state.error = true;
        }
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});

export const {reset} = categoriesSlice.actions;
export default categoriesSlice.reducer;
