import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { firbaseGetItemListData } from '../../firebaseFunctions/itemListData';

export const getItemListData = createAsyncThunk(
  '/itemList',
  async ({gender,categoryName},thunkAPI)=>{
    try {
      return await firbaseGetItemListData(gender,categoryName);
    } catch (error){
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  isLoading: false,
  failed: false,
  success: false,
  itemListArray: [],
};

const itemListData = createSlice({
  name: 'itemListSlice',
  initialState,
  reducers: {
    resetitemList: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getItemListData.fulfilled, (state, {payload}) => {
      state.itemListArray = [];
      state.isLoading = false;
      state.failed = false;
      state.success = true;
      state.itemListArray = payload;
    });
    builder.addCase(getItemListData.rejected, (state, action) => {
      state.itemListArray = [];
      state.isLoading = false;
      state.failed = true;
      state.success = false;
    });
    builder.addCase(getItemListData.pending, (state, {payload}) => {
      state.itemListArray = [];
      state.isLoading = true;
      state.failed = false;
      state.success = false;
    });
  },
});

export const {resetitemList} = itemListData.actions;

export default itemListData.reducer;
