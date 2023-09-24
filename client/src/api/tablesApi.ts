import { api } from "./baseApi";
import { AppDispatch } from "../store/store";
import { setLoading, setError, setSuccess } from "../store/mainSlice";
import { setTablesData } from "../store/tableSlice";
import { TTableData, TCreateData } from "../types/TablesTypes";
import { TResponseData } from "../types/ApiTypes";

export const fetchGetTables = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get<TTableData[]>("/api/v1/table/");
    dispatch(setLoading(false));
    dispatch(setTablesData(response.data));
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}

export const fetchCreateTable = (data: TCreateData) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.post<TResponseData>("/api/v1/table/create", data);
    dispatch(setLoading(false));
    dispatch(setSuccess(response.data.message));
    dispatch(fetchGetTables());
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}


