import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { firbaseGetHomeContent } from '../../firebaseFunctions/homeContent';

export const getHomeContent = createAsyncThunk(
  '/homeContent',
  async (thunkAPI)=>{
    try {
      return await firbaseGetHomeContent();
    } catch (error){
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  failed: false,
  success: false,
  homeContentArray: [],
};

const homeContentData = createSlice({
  name: 'homeContentSlice',
  initialState,
  reducers: {
    resetHomeContent: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getHomeContent.fulfilled, (state, {payload}) => {
      state.homeContentArray = [];
      state.isLoading = false;
      state.failed = false;
      state.success = true;
      state.homeContentArray = payload;
    });
    builder.addCase(getHomeContent.rejected, (state, action) => {
      state.homeContentArray = [];
      state.isLoading = false;
      state.failed = true;
      state.success = false;
    });
    builder.addCase(getHomeContent.pending, (state, {payload}) => {
      state.homeContentArray = [];
      state.isLoading = true;
      state.failed = false;
      state.success = false;
    });
  },
});

export const {resetHomeContent} = homeContentData.actions;

export default homeContentData.reducer;
