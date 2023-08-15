import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './mainSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
