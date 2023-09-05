import axios from "axios";
import { config } from "../config/client_config";

const api = axios.create({
  withCredentials: true,
  baseURL: config.apiBaseUrl,
});

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const original = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRutry) {
      original._isRutry = true;
      try {
        await axios.post(`${config.apiBaseUrl}/api/v1/auth/refresh`, {withCredentials: true});
        return api.request(original);
      }
      catch (err) {
        console.log(err);
      }
    }
    throw error;
  }
);

export { api };
