import { authenticationWebConfig } from 'configuration/www/Authentication';

import { IAuthenticationController } from 'core/entities/Authentication';

import { HTTPUtils } from 'core/_tools/Utils/HTTPUtils';
import { URLUtils } from 'core/_tools/Utils/URLUtils';

const { post } = HTTPUtils;
const { parseURL } = URLUtils;

const refreshToken = async (currentRefreshToken: string): Promise<IAuthenticationController> => {
  const { data } = await post({ url: parseURL({ url: authenticationWebConfig.refreshToken, params: { refreshToken: currentRefreshToken } }) });

  return data;
};

const signIn = async ({ password, username }: { password: string; username: string }): Promise<IAuthenticationController> => {
  const { data } = await post({ url: parseURL({ url: authenticationWebConfig.signIn, params: { password, username } }) });

  return data;
};

const signOut = async (refreshToken: string) => await post({ url: parseURL({ url: authenticationWebConfig.signOut, params: { refreshToken } }) });

export const AuthenticationRepository = { refreshToken, signOut, signIn };
