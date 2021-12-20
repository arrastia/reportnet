import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { keys } from 'configuration/keys';

const token = localStorage.getItem(keys.ACCESS_TOKEN);
const refreshToken = localStorage.getItem(keys.REFRESH_TOKEN);

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // console.info(`[request] [${JSON.stringify(config)}]`);
  config!.headers!['Authorization'] = `Bearer ${token}`;

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);

  return axiosInstance;
}

export const InterceptorsUtils = { setupInterceptorsTo };
