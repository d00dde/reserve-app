import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './mainSlice';
import userReducer from './userSlice';
import menuReducer from './menuSlice';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    user: userReducer,
    menu: menuReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
