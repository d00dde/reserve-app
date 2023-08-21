import { api } from "./baseApi";
import { TRegisterData, TLoginData, TUserData } from "../types/UserTypes";
import { AppDispatch } from "../store/store";
import { setLoading, setError } from "../store/mainSlice";
import { setUserData } from "../store/userSlice";

export const fetchRole = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.get<TUserData>(`/api/v1/auth/whoAmI`);
    dispatch(setLoading(false));
    dispatch(setUserData(response.data));
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}

export const fetchRegister = (registerData: TRegisterData) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.post(`/api/v1/auth/register`, registerData);
    if(response.status === 200) {
      dispatch(fetchRole());
    }
    else {
      dispatch(setError(response.data.error));
    }
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}

export const fetchLogin = (loginData: TLoginData) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.post(`/api/v1/auth/login`, loginData);
    if(response.status === 200) {
      dispatch(fetchRole());
    }
    else {
      dispatch(setError(response.data.error));
    }
  }
  catch(err: any) {
    dispatch(setError(err.message));
  }
}

export const fetchLogout = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await api.post(`/api/v1/auth/logout`);
    if(response.status === 200) {
      dispatch(fetchRole());
    }
    else {
      dispatch(setError(response.data.error));
    }
  }
  catch(err: any) {
    dispatch(setError(err.message))
  }
}
