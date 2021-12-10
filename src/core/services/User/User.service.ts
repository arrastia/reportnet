import { UserRepository } from 'core/repositories/User';

import User from 'core/entities/User';
import Authentication from 'core/entities/Authentication';

const configuration = async () => {
  const configuration = await UserRepository.configuration();

  return new User(configuration);
};

const singIn = async ({ password, username }: { password: string; username: string }) => {
  const authentication = await UserRepository.singIn({ password, username });

  const { accessToken, accessTokenExpiration, groups, preferredUsername, refreshToken, roles, userId } = authentication;

  return new Authentication({
    groups,
    refreshToken,
    roles,
    token: accessToken,
    tokenExpiration: accessTokenExpiration,
    userId,
    username: preferredUsername
  });
};

export const UserService = { configuration, singIn };
