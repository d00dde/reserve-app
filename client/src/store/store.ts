import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './mainSlice';
import userReducer from './userSlice';
import menuReducer from './menuSlice';
import tablesReducer from './tableSlice';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    user: userReducer,
    menu: menuReducer,
    tables: tablesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
