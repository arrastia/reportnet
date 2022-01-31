import { UserService } from 'core/services/User';
import { atom, selector } from 'recoil';

export const themeStore = atom<boolean | null>({
  key: 'themeStore',
  default: null
});

export const tokenStore = atom<string | null>({
  key: 'tokenStore',
  default: localStorage.getItem('R3 token')
});

export const refreshTokenStore = atom<string | null>({
  key: 'refreshTokenStore',
  default: null
});

export const userRoleStore = atom<string | null>({
  key: 'userRoleStore',
  default: null
});

export const userInformationStore = atom({
  key: 'userInformationStore',
  default: { name: '', surname: '' }
});
// export const userInformationStore = selector({
//   key: 'userInformationStore',
//   get: async () => {
//     try {
//       return await UserService.configuration();
//     } catch (error) {
//       console.log(`error`, error);
//     }
//   }
// });

export const profilePhotoStore = atom<string | null>({
  key: 'profilePhotoStore',
  default: null
});
