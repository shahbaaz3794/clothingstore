import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { firbaseGetCarouselImages } from '../../firebaseFunctions/carouselImage';

export const getCarouselImages = createAsyncThunk(
  '/carouselImages',
  async (thunkAPI)=>{
    try {
      return await firbaseGetCarouselImages();
    } catch (error){
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  failed: false,
  success: false,
  imageArray: [],
};

const carouselData = createSlice({
  name: 'carouselImageSlice',
  initialState,
  reducers: {
    resetCarouselData: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getCarouselImages.fulfilled, (state, {payload}) => {
      state.imageArray = [];
      state.isLoading = false;
      state.failed = false;
      state.success = true;
      state.imageArray = payload;
    });
    builder.addCase(getCarouselImages.rejected, (state, action) => {
      state.imageArray = [];
      state.isLoading = false;
      state.failed = true;
      state.success = false;
    });
    builder.addCase(getCarouselImages.pending, (state, {payload}) => {
      state.imageArray = [];
      state.isLoading = true;
      state.failed = false;
      state.success = false;
    });
  },
});

export const {resetCarouselData} = carouselData.actions;

export default carouselData.reducer;
