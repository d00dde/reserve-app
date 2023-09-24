import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TMenuData } from "../types/MenuTypes";
import { RootState } from "./store";

export type MenuState = {
  menuData: TMenuData,
  scaleBase: number,
};

const initialState: MenuState = {
  menuData: [],
  scaleBase: 0,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuData: (state, action: PayloadAction<TMenuData>) => {
      state.menuData = action.payload;
    },
    setScaleBase: (state, action: PayloadAction<number>) => {
      state.scaleBase = action.payload;
    },
  },
});

export const { setMenuData, setScaleBase } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu;

export default menuSlice.reducer;
