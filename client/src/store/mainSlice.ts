import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "./store";
import { TLanguageData } from "../types/MainTypes";
import { langData } from "../data/engLang";

export type MainState = {
  languageData: TLanguageData
  loading: boolean,
  message: {
    type: "info" | "success" | "warning" | "error",
    text: string,
  } | null,
};

const initialState: MainState = {
  languageData: langData,
  loading: false,
  message: null,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.message = { type: "error", text:action.payload };
    },
    setSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.message = { type: "success", text:action.payload };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading, setSuccess, setError } = mainSlice.actions;

export const selectMain = (state: RootState) => state.main;

export default mainSlice.reducer;
