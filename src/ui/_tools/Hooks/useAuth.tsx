import { useSetRecoilState } from 'recoil';

import { AuthenticationService } from 'core/services/Authentication';

import { refreshTokenStore, tokenStore } from '../Atoms/UserStore';

export const useAuth = () => {
  const setToken = useSetRecoilState(tokenStore);
  const setRefreshToken = useSetRecoilState(refreshTokenStore);

  const signIn = async (username: string, password: string) => {
    try {
      const { authToken, refreshToken } = await AuthenticationService.signIn({ password, username });

      setToken(authToken);
      setRefreshToken(refreshToken);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  const signOut = async () => {
    try {
      setToken(null);
      setRefreshToken(null);

      await AuthenticationService.signOut();
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  return { signIn, signOut };
};
