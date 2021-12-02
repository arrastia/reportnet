import axios, { AxiosPromise, AxiosRequestHeaders, ResponseType } from 'axios';

interface HTTPProps<D = any> {
  data?: D;
  headers?: AxiosRequestHeaders;
  responseType?: ResponseType;
  url: string;
}

const baseURL = process.env.REACT_APP_DEV_URL;

const get = (options: HTTPProps): AxiosPromise => {
  return axios.get(`${baseURL}${options.url}`, { headers: options.headers, params: options.data, responseType: options.responseType });
};

const post = (options: HTTPProps): AxiosPromise => {
  return axios.post(`${baseURL}${options.url}`, { headers: options.headers, params: options.data, responseType: options.responseType });
};

const remove = (options: HTTPProps): AxiosPromise => {
  return axios.delete(`${baseURL}${options.url}`, { headers: options.headers, params: options.data, responseType: options.responseType });
};

const update = (options: HTTPProps): AxiosPromise => {
  return axios.put(`${baseURL}${options.url}`, { headers: options.headers, params: options.data, responseType: options.responseType });
};

export const HTTPUtils = { get, post, remove, update };
