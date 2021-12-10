import { userWebConfig } from 'configuration/www/User';

import { IAuthenticationController } from 'core/entities/Authentication';
import { IUser } from 'core/entities/User';

import { HTTPUtils } from 'core/_tools/Utils/HTTPUtils';
import { URLUtils } from 'core/_tools/Utils/URLUtils';

const { get, post } = HTTPUtils;
const { parseURL } = URLUtils;

const configuration = async (): Promise<IUser> => {
  const { data } = await get({ url: parseURL({ url: userWebConfig.configuration }) });

  return data;
};

const singIn = async ({ password, username }: { password: string; username: string }): Promise<IAuthenticationController> => {
  const { data } = await post({ url: parseURL({ url: userWebConfig.singIn, params: { password, username } }) });

  return data;
};

export const UserRepository = { configuration, singIn };
