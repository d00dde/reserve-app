import axios from "axios";
import { config } from "../config/client_config";

export const api = axios.create({
  withCredentials: true,
  baseURL: config.apiBaseUrl,
});
