import axios, { AxiosInstance} from "axios";


export interface ServiceOptions {
  axios: AxiosInstance;
}

export const serviceOptions: ServiceOptions = {axios};
