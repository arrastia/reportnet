import { UserRepository } from 'core/repositories/User';

import User from 'core/entities/User';

const configuration = async () => {
  const configuration = await UserRepository.configuration();

  return new User(configuration);
};

export const UserService = { configuration };
