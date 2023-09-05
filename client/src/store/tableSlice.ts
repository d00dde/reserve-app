import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "./store";
import { TTableData } from "../types/TablesTypes";

export type TablesState = {
  tables: TTableData[],
};

const initialState: TablesState = {
  tables: [],
};

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setTablesData: (state, action: PayloadAction<TTableData[]>) => {
      state.tables = action.payload;
    },
  },
});

export const { setTablesData } = tablesSlice.actions;

export const selectTables = (state: RootState) => state.tables;

export default tablesSlice.reducer;
