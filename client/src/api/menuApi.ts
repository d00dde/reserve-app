import { api } from "./baseApi";
import { AppDispatch } from "../store/store";
import { setLoading, setError } from "../store/mainSlice";
import { setMenuData } from "../store/menuSlice";
import { TMenuData } from "../types/MenuTypes";

export const fetchGetUserMenu = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get<TMenuData>("/api/v1/menu/");
    dispatch(setLoading(false));
    dispatch(setMenuData(response.data));
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}
