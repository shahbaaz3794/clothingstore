import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { firbaseGetCategories } from '../../firebaseFunctions/categories';

export const getCategories = createAsyncThunk(
  '/categories',
  async (thunkAPI)=>{
    try {
      return await firbaseGetCategories();
    } catch (error){
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  failed: false,
  success: false,
  categoriesArray: [],
};

const categoriesData = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    resetCategories: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getCategories.fulfilled, (state, {payload}) => {
      state.categoriesArray = [];
      state.isLoading = false;
      state.failed = false;
      state.success = true;
      state.categoriesArray = payload;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.categoriesArray = [];
      state.isLoading = false;
      state.failed = true;
      state.success = false;
    });
    builder.addCase(getCategories.pending, (state, {payload}) => {
      state.categoriesArray = [];
      state.isLoading = true;
      state.failed = false;
      state.success = false;
    });
  },
});

export const {resetCategories} = categoriesData.actions;

export default categoriesData.reducer;
