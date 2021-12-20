import axios, { AxiosPromise, AxiosRequestHeaders, ResponseType } from 'axios';
import { keys } from 'configuration/keys';
import { userWebConfig } from 'configuration/www/User';
import { authAxios } from './AxiosUtils';

import { InterceptorsUtils } from './InterceptorsUtils';
import { LocalStorageUtils } from './LocalStorageUtils';
import { URLUtils } from './URLUtils';

const { setupInterceptorsTo } = InterceptorsUtils;

// setupInterceptorsTo(axios);

interface HTTPProps<D = any> {
  data?: D;
  headers?: AxiosRequestHeaders;
  responseType?: ResponseType;
  url: string;
}

const get = (options: HTTPProps): AxiosPromise => {
  return authAxios.get(`${options.url}`, { params: options.data, responseType: options.responseType });
};

const post = (options: HTTPProps): AxiosPromise => {
  return authAxios.post(`${options.url}`, { params: options.data, responseType: options.responseType });
};

const remove = (options: HTTPProps): AxiosPromise => {
  return authAxios.delete(`${options.url}`, { params: options.data, responseType: options.responseType });
};

const update = (options: HTTPProps): AxiosPromise => {
  return authAxios.put(`${options.url}`, { params: options.data, responseType: options.responseType });
};

export const HTTPUtils = { get, post, remove, update };
