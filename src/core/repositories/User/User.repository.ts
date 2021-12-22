import { userWebConfig } from 'configuration/www/User';

import { IUser } from 'core/entities/User';

import { HTTPUtils } from 'core/_tools/Utils/HTTPUtils';
import { URLUtils } from 'core/_tools/Utils/URLUtils';

const { get } = HTTPUtils;
const { parseURL } = URLUtils;

const configuration = async (): Promise<IUser> => {
  const { data } = await get({ url: parseURL({ url: userWebConfig.configuration }) });

  return data;
};

export const UserRepository = { configuration };
