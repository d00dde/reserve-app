import { api } from "./baseApi";
import { AppDispatch } from "../store/store";
import { setLoading, setError, setSuccess } from "../store/mainSlice";
import { setMenuData, setScaleBase } from "../store/menuSlice";
import {TMenuData, TMenuItemCreate, TScaleBaseResponse} from "../types/MenuTypes";
import { TResponseData } from "../types/ApiTypes";

export const fetchCreateMenuItem = (data: TMenuItemCreate) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.post<TResponseData>("/api/v1/menu/create", data);
    dispatch(setLoading(false));
    dispatch(setSuccess(response.data.message));
    dispatch(fetchGetMenu());
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}

export const fetchUpdateMenuItem = (id: number, data: TMenuItemCreate) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.put<TResponseData>(`/api/v1/menu/${id}`, data);
    dispatch(setLoading(false));
    dispatch(setSuccess(response.data.message));
    dispatch(fetchGetMenu());
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}

export const fetchDeleteMenuItem = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.delete<TResponseData>(`/api/v1/menu/${id}`,);
    dispatch(setLoading(false));
    dispatch(setSuccess(response.data.message));
    dispatch(fetchGetMenu());
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}

export const fetchGetMenu = () => async (dispatch: AppDispatch) => {
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

export const fetchGetScaleBase = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get<TScaleBaseResponse>("/api/v1/menu/scale");
    dispatch(setLoading(false));
    dispatch(setScaleBase(+response.data.base));
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}

export const fetchUpdateScaleBase = (base: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.put<TResponseData>(`/api/v1/menu/scale`, { base });
    dispatch(setLoading(false));
    dispatch(setSuccess(response.data.message));
    dispatch(fetchGetScaleBase());
    dispatch(fetchGetMenu());
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}
