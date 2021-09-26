import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { firbaseGetHomecategories } from '../../firebaseFunctions/homeCategories';

export const getHomeCategories = createAsyncThunk(
  '/homeCategories',
  async (thunkAPI)=>{
    try {
      return await firbaseGetHomecategories();
    } catch (error){
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  failed: false,
  success: false,
  homeCategoriesArray: [],
};

const homeCategoriesData = createSlice({
  name: 'homeCategoriesSlice',
  initialState,
  reducers: {
    resetHomeCategories: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getHomeCategories.fulfilled, (state, {payload}) => {
      state.homeCategoriesArray = [];
      state.isLoading = false;
      state.failed = false;
      state.success = true;
      state.homeCategoriesArray = payload;
    });
    builder.addCase(getHomeCategories.rejected, (state, action) => {
      state.homeCategoriesArray = [];
      state.isLoading = false;
      state.failed = true;
      state.success = false;
    });
    builder.addCase(getHomeCategories.pending, (state, {payload}) => {
      state.homeCategoriesArray = [];
      state.isLoading = true;
      state.failed = false;
      state.success = false;
    });
  },
});

export const {resetHomeCategories} = homeCategoriesData.actions;

export default homeCategoriesData.reducer;
