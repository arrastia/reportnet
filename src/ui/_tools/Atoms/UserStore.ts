import { atom } from 'recoil';

export const themeStore = atom<boolean | null>({
  key: 'themeStore',
  default: null
});

export const tokenStore = atom<string | null>({
  key: 'tokenStore',
  default: 'asdjakslj'
});

export const userRoleStore = atom<string | null>({
  key: 'userRoleStore',
  default: null
});

export const userInformationStore = atom({
  key: 'userInformationStore',
  default: { name: 'Karolina', surname: 'Kremska' }
});

export const profilePhotoStore = atom<string | null>({
  key: 'profilePhotoStore',
  default: null
});
