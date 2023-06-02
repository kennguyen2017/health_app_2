import axiosDefault, { AxiosRequestConfig } from "axios";
import { serviceOptions } from "./serviceOptions";

const baseURL = process.env["API_BASE_URL"];
const axios = axiosDefault.create({ baseURL });
serviceOptions.axios = axios;

export const setAxiosConfig = (config: AxiosRequestConfig) => {
  const axios = axiosDefault.create({
    baseURL,
    ...config,
  });

  serviceOptions.axios = axios;
};
