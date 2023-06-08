import { createAsyncThunk } from "@reduxjs/toolkit";
import { signIn, signUp } from "../../api/authService";
import { STORAGE_KEY } from "../../constants";

export const signUpRequest = createAsyncThunk(
  "auth/signUp",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await signUp(payload);
      console.log("responce: ", responce);
      localStorage.setItem(STORAGE_KEY.AUTH, JSON.stringify(responce.data));

      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signInRequest = createAsyncThunk(
  "auth/signIp",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await signIn(payload);
      console.log("responce: ", responce);
      localStorage.setItem(STORAGE_KEY.AUTH, JSON.stringify(responce.data));
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
