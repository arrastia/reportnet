import axios, { AxiosError, AxiosPromise, AxiosRequestConfig, HeadersDefaults } from 'axios';

import { authenticationWebConfig } from 'configuration/www/Authentication';

import { ACCESS_TOKEN, REFRESH_TOKEN } from 'configuration/constants/authentication.constants';

import { CookiesUtils } from './CookiesUtils';
import { URLUtils } from './URLUtils';

const { getCookie, setCookie } = CookiesUtils;
const { parseURL } = URLUtils;

interface OriginalRequest extends AxiosRequestConfig<any> {
  _retry?: boolean | undefined;
}

interface AuthAxios extends HeadersDefaults {
  Authorization: `Bearer ${string}`;
}

const authAxios = axios.create({ baseURL: process.env.REACT_APP_DEV_URL, headers: { Authorization: `Bearer ${getCookie(ACCESS_TOKEN)}` } });

const onResponseError = async (error: AxiosError): Promise<AxiosError<any, any> | AxiosPromise<any> | undefined> => {
  const originalRequest: OriginalRequest = error.config;

  if (error?.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const prevRefreshToken = getCookie(REFRESH_TOKEN);

    try {
      const { data } = await authAxios.post(parseURL({ url: authenticationWebConfig.refreshToken, params: { refreshToken: prevRefreshToken } }));
      const { accessToken, refreshToken } = data;

      setCookie({ name: ACCESS_TOKEN, value: accessToken });
      setCookie({ name: REFRESH_TOKEN, value: refreshToken });

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
      authAxios.defaults.headers = { ...authAxios.defaults.headers, Authorization: `Bearer ${accessToken}` } as AuthAxios;
      originalRequest.headers = { ...originalRequest.headers, Authorization: `Bearer ${accessToken}` };

      return axios(originalRequest);
    } catch (error) {
      throw new Error('Error intercepting request.');
    }
  }

  if (error?.response?.status === 403) {
    window.location.href = '/';
    return;
  }

  return Promise.reject(error);
};

authAxios.interceptors.response.use(response => response, onResponseError);

export { authAxios };
