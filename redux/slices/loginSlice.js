import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import auth from '@react-native-firebase/auth';

export const userLogin = createAsyncThunk("/login", ({ email, password }) =>
  auth.signInWithEmailAndPassword(email, password)
);

const initialState = {
  isAuthenticating: false,
  isAuthenticationFailed: true,
  isAuthenticationSuccess: false,
  userData:{},
  errorMsg:"",
};

const logIn = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    resetUserLogin: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.isAuthenticating = false;
      state.isAuthenticationFailed = false;
      state.isAuthenticationSuccess = true;
      state.userData = payload.user;
      state.errorMsg = "";
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      // console.log(action,"JJJJJ")
      state.isAuthenticating = false;
      state.isAuthenticationFailed = true;
      state.isAuthenticationSuccess = false;
      state.userData = {};
      state.errorMsg = "Invalid credentials"
    });
    builder.addCase(userLogin.pending, (state, { payload }) => {
      state.isAuthenticating = true;
      state.isAuthenticationFailed = false;
      state.isAuthenticationSuccess = false;
      state.userData = {};
      state.errorMsg = ""
    });
  },
});

export const { resetUserLogin } = logIn.actions;

export default logIn.reducer;