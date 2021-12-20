import axios, { AxiosError, AxiosRequestConfig, HeadersDefaults } from 'axios';

import { keys } from 'configuration/keys';
import { userWebConfig } from 'configuration/www/User';

import { LocalStorageUtils } from 'core/_tools/Utils/LocalStorageUtils';
import { URLUtils } from 'core/_tools/Utils/URLUtils';

const { parseURL } = URLUtils;

interface OriginalRequest extends AxiosRequestConfig<any> {
  _retry?: boolean | undefined;
}

interface AuthAxios extends HeadersDefaults {
  Authorization: `Bearer ${string}`;
}

const accessToken = LocalStorageUtils.getItem({ key: keys.ACCESS_TOKEN });

const authAxios = axios.create({ baseURL: process.env.REACT_APP_DEV_URL, headers: { Authorization: `Bearer ${accessToken}` } });

authAxios.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const originalRequest: OriginalRequest = error.config;

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = LocalStorageUtils.getItem({ key: keys.REFRESH_TOKEN });

      return authAxios.post(parseURL({ url: userWebConfig.refreshToken, params: { refreshToken } })).then(res => {
        const { accessToken, refreshToken } = res.data;

        if (res.status >= 200 && res.status <= 299) {
          window.localStorage.setItem(keys.ACCESS_TOKEN, accessToken);
          window.localStorage.setItem(keys.REFRESH_TOKEN, refreshToken);

          axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
          authAxios.defaults.headers = { ...authAxios.defaults.headers, Authorization: `Bearer ${accessToken}` } as AuthAxios;
          originalRequest.headers = { ...originalRequest.headers, Authorization: `Bearer ${accessToken}` };

          return axios(originalRequest);
        }
      });
    }

    if (error?.response?.status === 403) {
      window.location.href = '/';
      return;
    }

    return Promise.reject(error);
  }
);

export { authAxios };
