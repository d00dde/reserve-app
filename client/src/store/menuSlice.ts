import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TMenuData } from "../types/MenuTypes";
import { RootState } from "./store";

export type MenuState = {
  menuData: TMenuData,
};

const initialState: MenuState = {
  menuData: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuData: (state, action: PayloadAction<TMenuData>) => {
      state.menuData = action.payload;
    },
  },
});

export const { setMenuData } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu;

export default menuSlice.reducer;
