import { atom } from 'recoil';

import { ISection, UserCardType } from 'ui/@types/Layout.types';

export const sidebarStore = atom<ISection[]>({
  key: 'sidebarStore',
  default: []
});

export const userCardShapeStore = atom<UserCardType>({
  key: 'userCardShapeStore',
  default: 'ONLY_ICON'
});
