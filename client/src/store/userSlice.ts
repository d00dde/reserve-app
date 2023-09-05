import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "./store";
import { TUserData } from "../types/UserTypes";

export type UserState = {
  userData: TUserData,
};

const initialState: UserState = {
  userData: {
    role: "none",
    name: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<TUserData>) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
