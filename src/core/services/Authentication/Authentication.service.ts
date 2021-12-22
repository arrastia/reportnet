import { AuthenticationRepository } from 'core/repositories/Authentication';

import { ACCESS_TOKEN, REFRESH_TOKEN } from 'configuration/constants/authentication.constants';

import Authentication from 'core/entities/Authentication';

import { CookiesUtils } from 'core/_tools/Utils/CookiesUtils';

const { getCookie, removeCookie, setCookie } = CookiesUtils;

const refreshToken = async () => await AuthenticationRepository.refreshToken(getCookie(REFRESH_TOKEN) || '');

const signIn = async ({ password, username }: { password: string; username: string }) => {
  const authentication = await AuthenticationRepository.signIn({ password, username });

  const { accessToken: authToken, accessTokenExpiration, groups, preferredUsername, refreshToken, roles, userId } = authentication;

  setCookie({ name: ACCESS_TOKEN, value: authToken });
  setCookie({ name: REFRESH_TOKEN, value: refreshToken });

  return new Authentication({ authToken, groups, refreshToken, roles, tokenExpiration: accessTokenExpiration, userId, username: preferredUsername });
};

const signOut = async () => {
  removeCookie(ACCESS_TOKEN);
  removeCookie(REFRESH_TOKEN);

  return await AuthenticationRepository.signOut(getCookie(REFRESH_TOKEN) || '');
};

export const AuthenticationService = { refreshToken, signOut, signIn };
